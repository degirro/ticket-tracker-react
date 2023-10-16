import { motion } from "framer-motion";
import { CgBell } from "react-icons/cg";
import styled from "styled-components";

export const SidebarUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  background: ${(props) => props.theme.borderLight};
  border-radius: 5px;
`;

export const SidebarUsername = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.text};
`;

export const SidebarNotificationsIconWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${(props) => props.theme.body};
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  transition: 0.3s border ease-in-out;
  border: 2px solid transparent;
  z-index: 50;

  &.active {
    border: 2px solid ${(props) => props.theme.button};
    transition: 0.3s border ease-in-out;
  }
`;

export const SidbarNotificationsAlert = styled.div`
  position: absolute;
  bottom: 70%;
  right: 0;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background: ${(props) => props.theme.button};
`;

export const SidebarNotificationsIcon = styled(CgBell)`
  font-size: 20px;
  color: ${(props) => props.theme.text};
`;
