import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getUserWorkspaces } from "../../utils/api";
import { socket } from "../../utils/context/SocketContext";
import {
  DashboardSection,
  DashboardContainer,
} from "../../utils/styles/dashboard/DashboardStyled";
import { WorkspacesList } from "./workspaces/WorksapcesList";

export const Dashboard = () => {
  const queryClient = useQueryClient();

  const getUserWorkspacesData = async () => {
    try {
      const res: any = await getUserWorkspaces();
      return res.data;
    } catch (err: any) {
      console.log(err.response.message);
    }
  };

  const { isLoading, data } = useQuery(
    ["userWorkspacesData"],
    getUserWorkspacesData
  );

  useEffect(() => {
    const onUserWorkspacesChange = () => {
      queryClient.invalidateQueries("userWorkspacesData");
    };

    socket.on("onGetUserWorkspaces", onUserWorkspacesChange);

    return () => {
      socket.off("onGetUserWorkspaces", onUserWorkspacesChange);
    };
  }, []);

  return (
    <DashboardSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <DashboardContainer>
        <WorkspacesList isLoading={isLoading} />
      </DashboardContainer>
    </DashboardSection>
  );
};
