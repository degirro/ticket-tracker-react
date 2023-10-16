import styled from "styled-components";

export const WorkspaceTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.borderLight};
  max-width: 400px;
  width: 100%;
  padding: 20px;
  gap: 20px;
  max-height: 100vh;
  height: 100%;
`;

export const WorkspaceTeamHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.text};
  width: 100%;
`;

export const WorkspaceTeamTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
`;

export const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const TeamUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background: ${(props) => props.theme.borderLight};
  border-radius: 5px;
`;

export const TeamUsername = styled.p`
  color: ${(props) => props.theme.text};
  width: 100%;
`;

export const TeamEmail = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.textLight};
  width: 100%;
  overflow: hidden;
  overflow: ellipsis;
`;
