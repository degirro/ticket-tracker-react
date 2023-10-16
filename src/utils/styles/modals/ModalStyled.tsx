import { motion } from "framer-motion";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const ModalOverlay = styled(motion.div)`
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.overlay};
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 50;
`;

export const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
  height: max-content;
  width: 450px;
  background: ${(props) => props.theme.background};
  border-radius: 10px;
  z-index: 51;
  color: ${(props) => props.theme.text};
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ModalClose = styled(IoMdClose)`
  color: ${(props) => props.theme.text};
  font-size: 25px;
  cursor: pointer;
`;
