import styled from "styled-components";

export const UserTicketsHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.text};
  margin: 50px 0px 35px 0px;
  width: 100%;
`;

export const UserTicketsHeaderText = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
  width: 100%;
`;

export const UserTicketsUsername = styled.p`
  font-weight: 600;
  font-size: 25px;
  margin-left: 1vw;
`;
