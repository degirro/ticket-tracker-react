import { motion } from "framer-motion";
import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";

export const UserTicketsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.body};
  position: relative;
  padding: 0px 20px;
  overflow: hidden;
`;

export const TicketsWorkspaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const WorkspaceDropDownContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export const WorkspaceDropDown = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  height: 70px;
  width: 100%;
  background: ${(props) => props.theme.cardBg};
  border-radius: 5px;
  cursor: pointer;
`;

export const WorkspaceName = styled.h2`
  color: ${(props) => props.theme.text};
  font-size: 20px;
`;

export const DropdownArrow = styled(BiChevronDown)`
  color: ${(props) => props.theme.text};
  font-size: 30px;
`;

export const UserTicketsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  gap: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
