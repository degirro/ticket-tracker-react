import { motion } from "framer-motion";
import styled from "styled-components";

export const AppLoadingContainer = styled(motion.section)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background: ${(props) => props.theme.body};
`;

export const AppLoading = styled.p`
  font-size: 25px;
  color: ${(props) => props.theme.text};
`;
