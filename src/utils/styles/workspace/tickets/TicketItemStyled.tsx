import styled from "styled-components";
import { motion } from "framer-motion";

export const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${(props) => props.theme.background};
  padding: 20px;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  gap: 10px;
`;

export const ItemTitle = styled(motion.input)`
  color: ${(props) => props.theme.text};
  font-size: 20px;
  background: none;
  border: none;
  font-weight: bold;
`;

export const ItemDesc = styled(motion.input)`
  color: ${(props) => props.theme.subtitle};
  font-size: 16px;
  background: none;
  border: none;
  font-weight: 500;
`;

export const ItemIssue = styled(motion.p)`
  color: ${(props) => props.theme.subtitle};
  border: 1px solid ${(props) => props.theme.borderLight};
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 50px;
`;

export const ItemPriority = styled(motion.p)`
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 50px;
  font-weight: bold;

  &.low {
    background: rgb(101, 111, 169, 0.3);
    color: #020e44;
  }
  &.medium {
    background: rgb(200, 182, 83, 0.3);
    color: #414103;
  }
  &.high {
    background: rgb(169, 101, 101, 0.3);
    color: #4e0505;
  }
`;

export const ItemFooter = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;
