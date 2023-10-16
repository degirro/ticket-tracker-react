import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const TicketsSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  border: 2px solid ${(props) => props.theme.borderLight};
  width: 300px;
  padding: 7px 10px;
`;

export const TicketsSearchInput = styled.input`
  background: none;
  color: ${(props) => props.theme.text};
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const TicketsSearchIcon = styled(FaSearch)`
  font-size: 1vw;
  margin-left: 10px;
  color: ${(props) => props.theme.text};
`;
