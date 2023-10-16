import { motion } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";

export const TeamRemoveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;
  position: relative;
`;

export const DotsIcon = styled(BsThreeDotsVertical)`
  font-size: 20px;
  color: ${(props) => props.theme.text};
`;

export const TeamRemovePopupContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: ${(props) => props.theme.background};
  top: 100%;
  right: 0;
  width: 150px;
  overflow: hidden;
  z-index: 99;
`;

export const RemoveText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.text};
  padding: 12px 20px;
`;

export const ConfirmRemoveText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.text};
  padding: 12px 20px 0px 20px;
`;

export const NextStepContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ConfirmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: ${(props) => props.theme.text};
`;
