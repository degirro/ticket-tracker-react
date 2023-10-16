import { motion } from "framer-motion";
import styled from "styled-components";

export const WorkspaceSection = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.body};
  position: relative;
  padding: 0px 3vw;
  gap: 3vw;
`;

export const WorkspaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const WorkspaceTicketsHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.text};
  max-width: 1100px;
  width: 100%;
  margin: 50px 0px 35px 0px;
`;

export const WorkspaceTicketsTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
`;

export const WorkspaceFade = styled.div`
  position: absolute;
  width: 100%;
  height: 10vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0),
    ${(props) => props.theme.body}
  );
  bottom: 0;
`;

export const WorkspaceName = styled.p`
  font-weight: 600;
  font-size: 25px;
  margin-left: 1vw;
`;

export const WorkspaceSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 100%;
  padding: 50px 0px;
`;
