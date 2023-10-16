import styled from "styled-components";

export const NoDataMessage = styled.p`
  position: absolute;
  white-space: nowrap;
  display: flex;
  font-size: 16px;
  color: ${(props) => props.theme.textLight};
  top: 15px;
  left: 15px;
`;
