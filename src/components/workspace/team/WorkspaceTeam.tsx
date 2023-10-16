import { WorkspaceTeamContainer } from "../../../utils/styles/workspace/WorkspaceTeamStyled";
import { WorkspaceTeamHeader } from "./WorkspaceTeamHeader";
import { WorkspaceTeamList } from "./WorkspaceTeamList";

type props = {
  workspaceId: number;
};

export const WorkspaceTeam: React.FC<props> = ({ workspaceId }) => {
  return (
    <WorkspaceTeamContainer>
      <WorkspaceTeamHeader />
      <WorkspaceTeamList workspaceId={workspaceId} />
    </WorkspaceTeamContainer>
  );
};
