import { motion } from "framer-motion";
import styled from "styled-components";

export const ThemeContainer = styled.div`
  display: flex;
  padding: 15px 0px;
  width: 100%;
  background: ${(props) => props.theme.body};
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  font-size: 20px;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 16px;
  width: 40px;
  background: #00b800;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: background ease-in-out 0.2s;
`;

export const SwitchButton = styled(motion.div)`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background: #eeeeee;
  position: absolute;
`;
