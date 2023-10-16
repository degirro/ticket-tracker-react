import { useContext, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { checkWorkspaceAdmin, getUsers } from "../../../utils/api";
import { SocketContext } from "../../../utils/context/SocketContext";
import {
  TeamList,
  TeamUser,
  TeamUsername,
  TeamEmail,
} from "../../../utils/styles/workspace/WorkspaceTeamStyled";
import { workspaceUsersSingleType } from "../../../utils/types/types";
import { WorkspaceTeamRemove } from "./WorkspaceTeamRemove";

type props = {
  workspaceId: number;
};

export const WorkspaceTeamList: React.FC<props> = ({ workspaceId }) => {
  const queryClient = useQueryClient();
  const socket = useContext(SocketContext);

  useEffect(() => {
    const onWorkspaceUsersChange = () => {
      queryClient.invalidateQueries("workspacesUsers");
    };

    socket.on("onRemoveWorkspaceUser", onWorkspaceUsersChange);

    return () => {
      socket.off("onRemoveWorkspaceUser", onWorkspaceUsersChange);
    };
  }, []);

  const getUsersData = async () => {
    try {
      const res: any = await getUsers(workspaceId);
      return res.data;
    } catch (err: any) {
      console.log(err.response.message);
    }
  };

  const useWorkspaceAuth = async () => {
    try {
      const res: any = await checkWorkspaceAdmin(workspaceId);
      const adminData: boolean = res.data;
      return adminData;
    } catch (err: any) {
      console.log(err.response.message);
    }
  };

  const { data: isAdminData } = useQuery(["isAdmin"], useWorkspaceAuth);

  const { isLoading, data } = useQuery(["workspacesUsers"], getUsersData);

  return (
    <TeamList>
      {!isLoading &&
        data
          .filter((user: workspaceUsersSingleType) => user.status !== "pending")
          .map((item: workspaceUsersSingleType, i: number) => (
            <TeamUser key={item.id}>
              <TeamUsername>{item.user.username}</TeamUsername>
              <TeamEmail>{item.user.email}</TeamEmail>
              {isAdminData && <WorkspaceTeamRemove userId={item.user.id} />}
            </TeamUser>
          ))}
    </TeamList>
  );
};
