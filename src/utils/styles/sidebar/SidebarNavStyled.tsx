import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarNavContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 20px;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.text};
  gap: 10px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  text-decoration: none;
  padding: 15px 20px;
  color: ${(props) => props.theme.text};
  border-radius: 5px;
  font-size: 20px;
  transition: background ease-in-out 0.3s;
  position: relative;
  z-index: 5;

  &:hover {
    background: ${(props) => props.theme.hover};
    transition: background ease-in-out 0.3s;
  }

  &.active {
    background: ${(props) => props.theme.button};
  }
`;

export const LinkText = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 16px;
`;
