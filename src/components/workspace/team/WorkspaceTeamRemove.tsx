import { useState } from "react";
import { WorkspaceRemovePopup } from "./WorkspaceRemovePopup";
import {
  TeamRemoveContainer,
  DotsIcon,
} from "../../../utils/styles/workspace/WorkspaceTeamRemoveStyled";

type props = {
  userId: number;
};

export const WorkspaceTeamRemove: React.FC<props> = ({ userId }) => {
  const [showRemove, setShowRemove] = useState<boolean>(false);

  const handleClose = () => {
    setShowRemove(false);
  };

  return (
    <TeamRemoveContainer onClick={() => setShowRemove(!showRemove)}>
      <DotsIcon />
      <WorkspaceRemovePopup
        userId={userId}
        handleClose={handleClose}
        showRemove={showRemove}
      />
    </TeamRemoveContainer>
  );
};
