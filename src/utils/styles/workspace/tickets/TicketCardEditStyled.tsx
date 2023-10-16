import { motion } from "framer-motion";
import styled from "styled-components";

export const CardTitleEdit = styled(motion.input)`
  font-size: 25px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};
  border: none;
  border-radius: 5px;
  transition: background ease-in-out 0.3s;
  padding: 5px 10px;
  font-weight: bold;

  &:disabled {
    background: transparent;
  }
`;

export const CardSubEdit = styled(motion.input)`
  color: ${(props) => props.theme.subtitle};
  font-size: 20px;
  background: ${(props) => props.theme.body};
  border: none;
  border-radius: 5px;
  transition: background ease-in-out 0.3s;
  padding: 5px 10px;

  &:disabled {
    background: transparent;
  }
`;
