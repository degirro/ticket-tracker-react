import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

type props = {
  loading: boolean;
};

export const DashboardSection = styled(motion.section)`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.body};
`;

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 20px;
  width: 100%;
  margin: 50px 0px;
`;

export const WorkspaceListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.background};
  max-width: 1100px;
  width: 100%;
  max-height: 700px;
  border-radius: 10px;
  padding: 30px;
`;

export const DividerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 50px;
  background: ${(props) => props.theme.header};
`;

export const DividerTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const DividerSearchIcon = styled(FaSearch)`
  margin: 5px 0px 0px 5px;
  position: absolute;
  color: #8f8f8f;
  opacity: 0.5;
`;

export const WorkspaceListScroll = styled(motion.div)`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #00b800;
  transform-origin: 0%;
`;

export const WorkspaceDataContainer = styled.div<props>`
  display: flex;
  flex-direction: column;
  height: 430px;
  overflow-y: scroll;
  justify-content: ${(props) => props.loading && "center"};
  align-items: ${(props) => props.loading && "center"};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WorkspaceItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  min-height: 70px;
  border-bottom: 2px solid ${(props) => props.theme.border};
  cursor: pointer;
  transition: background ease-in-out 0.2s;

  &:hover {
    transition: background ease-in-out 0.2s;
    background: ${(props) => props.theme.hover};
  }
`;

export const WorkspaceDataName = styled.div`
  font-size: 16px;
`;

export const GridHeaderInput = styled.input`
  font-size: 16px;
`;

export const WorkspaceListHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.text};
  margin-bottom: 20px;
`;

export const WorkspaceListTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 25px;
`;
