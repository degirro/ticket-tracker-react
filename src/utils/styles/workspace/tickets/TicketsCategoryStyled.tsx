import { motion } from "framer-motion";
import styled from "styled-components";

type props = {
  iconColor: string;
};

export const TicketsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  max-width: 1100px;
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.subtitle};
`;

export const Icon = styled.div<props>`
  margin-right: 10px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: ${(props) => props.iconColor};
`;

export const Title = styled.p`
  font-size: 16px;
`;

export const DataLength = styled.p`
  font-size: 16px;
`;

export const TicketItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 750px;
  overflow-y: scroll;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TicketScroll = styled(motion.div)`
  width: 100%;
  height: 10px;
  background: #00b800;
  transform-origin: 0%;
`;
