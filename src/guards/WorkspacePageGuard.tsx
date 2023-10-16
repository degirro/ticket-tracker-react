import { Navigate, useParams } from "react-router-dom";
import { useWorkspaceAuth } from "../utils/hooks/useWorkspaceAuth";
import { LoadingPage } from "../components/loading/LoadingPage";
import { PropsWithChildren } from "react";

export const WorkspacePageGuard: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { id } = useParams();
  const { isWorkspaceAuthLoading, isWorkspaceAuth } = useWorkspaceAuth(id);

  if (isWorkspaceAuthLoading) return <LoadingPage />;

  return isWorkspaceAuth ? <>{children}</> : <Navigate to="/dashboard" />;
};
