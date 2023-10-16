import React, { FC, useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../utils/hooks/useAuth";
import { LayoutBody, LayoutPage } from "../utils/styles/LayoutPage";
import { Sidebar } from "./sidebar/Sidebar";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../utils/styles/theme/Themes";
import { ThemeContext } from "../utils/context/ThemeContext";
import { LoadingPage } from "./loading/LoadingPage";
import { WorkspaceContext } from "../utils/context/WorkspaceContext";
export const PrivateOutlet: FC<React.PropsWithChildren> = () => {
  const { darkSwitch } = useContext(ThemeContext);
  const { isLoading, user } = useAuth();
  const location = useLocation();

  return (
    <ThemeProvider theme={darkSwitch ? darkTheme : lightTheme}>
      <LayoutPage>
        {user ? <Sidebar /> : null}
        <LayoutBody>
          {isLoading ? (
            <LoadingPage />
          ) : user ? (
            <Outlet />
          ) : (
            <Navigate to="/login" state={{ from: location }} replace />
          )}
        </LayoutBody>
      </LayoutPage>
    </ThemeProvider>
  );
};
