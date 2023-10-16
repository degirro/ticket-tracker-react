import { IoFilter } from "react-icons/io5";
import styled from "styled-components";

export const TicketsFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 5px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-weight: bold;
  cursor: pointer;
  position: relative;
`;

export const TicketFilterIcon = styled(IoFilter)`
  color: ${(props) => props.theme.button};
  margin-left: 10px;
  font-size: 1vw;
`;
