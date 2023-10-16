import styled from "styled-components";

export const OpenModalButton = styled.button`
  background: #00b800;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-family: Inter;
  font-weight: 500;
  cursor: pointer;
  width: max-content;

  &:disabled {
    background: ${(props) => props.theme.borderLight};
  }
`;
