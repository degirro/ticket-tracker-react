import styled from "styled-components";

export const SidebarSection = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  position: relative;
  left: 0;
  z-index: 1000;
`;

export const SidebarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0px 30px;
  gap: 10px;
  position: relative;
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 30px;
  height: 100px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
`;
