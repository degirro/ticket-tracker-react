import React, { useContext } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import {
  SidebarNavContainer,
  NavItem,
  LinkText,
} from "../../utils/styles/sidebar/SidebarNavStyled";
import { AuthContext } from "../../utils/context/AuthContext";

export const SidebarNav = () => {
  const { user } = useContext(AuthContext);

  return (
    <SidebarNavContainer>
      <NavItem
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/dashboard"
      >
        <MdOutlineSpaceDashboard />
        <LinkText>Dashboard</LinkText>
      </NavItem>

      <NavItem
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to={`/tickets/${user?.username}/`}
      >
        <BsListTask />
        <LinkText>Tickets</LinkText>
      </NavItem>
    </SidebarNavContainer>
  );
};
