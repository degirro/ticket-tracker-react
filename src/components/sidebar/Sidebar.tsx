import React, { useContext, useEffect } from "react";
import { SidebarNav } from "./SidebarNav";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarSection,
} from "../../utils/styles/sidebar/SidebarStyled";
import { SideBarTheme } from "./SideBarTheme";
import { SidebarLogout } from "./SidebarLogout";
import { SidebarUser } from "./SidebarUser";
import { useQuery, useQueryClient } from "react-query";
import { SocketContext } from "../../utils/context/SocketContext";
import { getUserNotifications } from "../../utils/api";

export const Sidebar = () => {
  const queryClient = useQueryClient();
  const socket = useContext(SocketContext);

  useEffect(() => {
    const onNotificationsChange = () => {
      queryClient.invalidateQueries("notificationsData");
    };
    socket.on("onNotification", onNotificationsChange);

    return () => {
      socket.off("onNotification", onNotificationsChange);
    };
  }, []);

  return (
    <SidebarSection>
      <SidebarContainer>
        <SidebarHeader>Squash It</SidebarHeader>
        <SidebarUser />
        <SidebarNav />
        <SideBarTheme />
        <SidebarLogout />
      </SidebarContainer>
    </SidebarSection>
  );
};
