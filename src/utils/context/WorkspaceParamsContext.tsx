import { createContext } from "react";
import { User } from "../types/types";

type WorkspaceContextType = {
  workspaceId: string | undefined;
};

export const WorkspaceParamsContext = createContext<WorkspaceContextType>({
  workspaceId: "",
});
