import { createContext, PropsWithChildren, useState } from "react";

type WorkspaceContextType = {
  workspaceId: number | undefined;
  setWorkspaceId: React.Dispatch<React.SetStateAction<number | undefined>>;
  workspaceName: string;
  setWorkspaceName: React.Dispatch<React.SetStateAction<string>>;
};

export const WorkspaceContext = createContext<WorkspaceContextType>(
  null as any
);

export const WorkspaceContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [workspaceId, setWorkspaceId] = useState<number | undefined>();
  const [workspaceName, setWorkspaceName] = useState<string>("");

  return (
    <WorkspaceContext.Provider
      value={{
        workspaceId,
        setWorkspaceId,
        workspaceName,
        setWorkspaceName,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};
