import { createContext } from "react";

type WorkspaceContextType = {
  workspaceId: string | undefined;
};

export const WorkspaceParamsContext = createContext<WorkspaceContextType>({
  workspaceId: "",
});
