import { RegisterPage } from "./pages/forms/FormPage";
import { LoginPage } from "./pages/forms/LoginPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { PrivateOutlet } from "./components/PrivateOutlet";
import { AuthContext } from "./utils/context/AuthContext";
import { PropsWithChildren, useState } from "react";
import { User } from "./utils/types/types";
import { DashboardPage } from "./pages/DashboardPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WorkspacePage } from "./pages/WorkspacePage";
import { ThemeContextProvider } from "./utils/context/ThemeContext";
import { GlobalStyles } from "./utils/styles/global/globalStyles";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { AnimatePresence } from "framer-motion";
import { UserTicketsPage } from "./pages/UserTicketsPage";
import { Socket } from "socket.io-client";
import { socket, SocketContext } from "./utils/context/SocketContext";
import { WorkspaceContextProvider } from "./utils/context/WorkspaceContext";
import { TicketsContextProvider } from "./utils/context/TicketsContext";
import { WorkspacePageGuard } from "./guards/WorkspacePageGuard";
import { UserTicketsPageGurad } from "./guards/UserTicketsPageGuard";
const queryClient = new QueryClient();

type Props = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  socket: Socket;
};

function AppWithProviders({
  children,
  user,
  setUser,
}: PropsWithChildren & Props) {
  return (
    <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
      <QueryClientProvider client={queryClient}>
        <SocketContext.Provider value={socket}>
          <WorkspaceContextProvider>
            <TicketsContextProvider>
              <ThemeContextProvider>{children}</ThemeContextProvider>
            </TicketsContextProvider>
          </WorkspaceContextProvider>
        </SocketContext.Provider>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}

function App() {
  const [user, setUser] = useState<User>();
  const location = useLocation();

  return (
    <AppWithProviders user={user} setUser={setUser} socket={socket}>
      <GlobalStyles />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route element={<PrivateOutlet />}>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route
              path="/workspace/:id"
              element={<WorkspacePageGuard children={<WorkspacePage />} />}
            ></Route>
            <Route
              path="/tickets/:username"
              element={<UserTicketsPageGurad children={<UserTicketsPage />} />}
            ></Route>
          </Route>
        </Routes>
      </AnimatePresence>
      <ToastContainer theme="dark" />
    </AppWithProviders>
  );
}

export default App;
