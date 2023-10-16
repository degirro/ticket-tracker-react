import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

export const SidebarNotificationsContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 350px;
  background: ${(props) => props.theme.notifBg};
  border-radius: 5px;
  top: 110%;
  left: 0;
  z-index: 200;
  box-shadow: 0px 0px 20px 0px rgb(0, 0, 0, 0.3);
  overflow: hidden;
  overflow-y: scroll;
  padding: 0px 5px;
  backdrop-filter: blur(3px);
  z-index: 50;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const NotificationTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.text};
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.borderLight};
`;

export const NotificationText = styled.p`
  font-weight: bold;
  white-space: nowrap;
`;

export const WorkspaceTeamButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TeamConfirmButton = styled.button`
  padding: 7px 10px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.button};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const TeamDeclineButton = styled.button`
  padding: 7px 10px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.textLight};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const DeleteNotificationButton = styled(IoMdClose)`
  background: ${(props) => props.theme.borderLight};
  padding: 5px;
  border-radius: 50%;
  font-size: 25px;
  color: ${(props) => props.theme.text};
`;
