import { Navigate, useParams } from "react-router-dom";
import { LoadingPage } from "../components/loading/LoadingPage";
import { PropsWithChildren, useEffect } from "react";
import { useUserTicketsAuth } from "../utils/hooks/useUserTicketsAuth";

export const UserTicketsPageGurad: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { username } = useParams();
  const { isUserAuthLoading, isUserAuth, isError } = useUserTicketsAuth(
    username!
  );

  if (isUserAuthLoading) return <LoadingPage />;
  if (isError) return <Navigate to="/dashboard" />;
  return isUserAuth ? <>{children}</> : <Navigate to="/dashboard" />;
};
