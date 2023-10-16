import { useEffect, useState, useContext } from "react";
import { showRemoveVariants } from "../../../utils/variants/variants";
import {
  ConfirmContainer,
  ConfirmRemoveText,
  NextStepContainer,
  RemoveText,
  TeamRemovePopupContainer,
} from "../../../utils/styles/workspace/WorkspaceTeamRemoveStyled";
import { removeUserFromWorkspace } from "../../../utils/api";
import { WorkspaceContext } from "../../../utils/context/WorkspaceContext";

type props = {
  handleClose: () => void;
  showRemove: boolean;
  userId: number;
};

export const WorkspaceRemovePopup: React.FC<props> = ({
  showRemove,
  handleClose,
  userId,
}) => {
  const [stepOption, setStepOption] = useState<number>(0);
  const { workspaceId } = useContext(WorkspaceContext);
  const handleStepOptions = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setStepOption(stepOption + 1);
  };

  useEffect(() => {
    if (!showRemove) {
      setStepOption(0);
    }
  }, [showRemove]);

  const handleRemoveConfirm = async () => {
    try {
      await removeUserFromWorkspace({ workspaceId, userId });
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <TeamRemovePopupContainer
      initial={{ display: "none" }}
      animate={showRemove ? "open" : "closed"}
      variants={showRemoveVariants}
    >
      {stepOption === 0 ? (
        <RemoveText onClick={(e) => handleStepOptions(e)}>Remove</RemoveText>
      ) : null}
      {stepOption === 1 ? (
        <NextStepContainer>
          <ConfirmRemoveText>Are you sure?</ConfirmRemoveText>
          <ConfirmContainer>
            <RemoveText onClick={handleRemoveConfirm}>Yes</RemoveText> /
            <RemoveText onClick={handleClose}>No</RemoveText>
          </ConfirmContainer>
        </NextStepContainer>
      ) : null}
    </TeamRemovePopupContainer>
  );
};
