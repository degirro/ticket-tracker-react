import { motion } from "framer-motion";
import styled from "styled-components";

export const TicketsFilterSelectContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${(props) => props.theme.background};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 200;
  overflow: hidden;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 5px 5px 0px rgb(0, 0, 0, 0.2);
`;

export const FilterOption = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0px;
  color: ${(props) => props.theme.textLight};
  font-size: 0.8rem;
  margin: 5px 10px;
  font-weight: 500;

  &.active {
    color: ${(props) => props.theme.text};
    font-weight: bod;
  }
`;
