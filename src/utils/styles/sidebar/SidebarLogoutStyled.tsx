import styled from "styled-components";

export const LogoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  background: #303030;
  width: 100%;
  padding: 15px 0px;
  border-radius: 5px;
  gap: 20px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #00b800;
    transition: background 0.2s ease-in-out;
  }
`;

export const LogoutText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;
