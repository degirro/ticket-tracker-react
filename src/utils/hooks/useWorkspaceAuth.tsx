import { checkWorkspaceUser } from "../api";
import { useQuery } from "react-query";

export const useWorkspaceAuth = (id: string | undefined) => {
  const useWorkspaceUserAuth = async () => {
    if (id !== undefined) {
      try {
        const res: any = await checkWorkspaceUser(parseInt(id!));
        const workspaceUserData: boolean = res.data;
        return workspaceUserData;
      } catch (err: any) {
        console.log(err, "error msg");
      }
    }
  };

  const { isLoading: isWorkspaceAuthLoading, data: isWorkspaceAuth } = useQuery(
    ["isWorkspaceUser"],
    useWorkspaceUserAuth
  );

  return { isWorkspaceAuthLoading, isWorkspaceAuth };
};
