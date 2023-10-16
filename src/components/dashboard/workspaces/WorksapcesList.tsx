import React, { useRef } from "react";
import { WorkspaceType } from "../../../utils/types/types";
import { MoonLoader } from "react-spinners";
import { useScroll, useSpring } from "framer-motion";
import { WorkspaceDivider } from "./WorkspaceDivider";
import { WorkspaceListItem } from "./WorkspaceListItem";
import { WorkspacesListHeader } from "./WorkspacesListHeader";
import {
  WorkspaceListContainer,
  WorkspaceListScroll,
  WorkspaceDataContainer,
} from "../../../utils/styles/dashboard/DashboardStyled";
import { useWorkspacesData } from "../../../utils/hooks/useWorkspacesData";

type props = {
  isLoading: boolean;
};

export const WorkspacesList: React.FC<props> = ({ isLoading }) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const { handleSearch, filteredData } = useWorkspacesData();

  const { scrollYProgress } = useScroll({ container: bodyRef });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <WorkspaceListContainer>
      <WorkspacesListHeader />
      <WorkspaceDivider handleSearch={handleSearch} />
      <WorkspaceListScroll style={{ scaleX }} />
      <WorkspaceDataContainer ref={bodyRef} loading={isLoading}>
        {!isLoading ? (
          filteredData?.map((item: WorkspaceType, i: number) => (
            <WorkspaceListItem key={item.id} {...item} />
          ))
        ) : (
          <MoonLoader color="#00b800" />
        )}
      </WorkspaceDataContainer>
    </WorkspaceListContainer>
  );
};
