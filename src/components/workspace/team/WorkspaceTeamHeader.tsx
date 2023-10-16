import { useState } from "react";
import { OpenModalButton } from "../../../utils/styles/global/OpenModalButtonStyled";
import {
  WorkspaceTeamHeading,
  WorkspaceTeamTitle,
} from "../../../utils/styles/workspace/WorkspaceTeamStyled";
import { AddMemberModal } from "../modals/AddMemberModal";
import { useQueryClient } from "react-query";

export const WorkspaceTeamHeader = () => {
  const [show, setShow] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<any>("isAdmin");

  return (
    <WorkspaceTeamHeading>
      <AddMemberModal show={show} setShow={setShow} />
      <WorkspaceTeamTitle>Team</WorkspaceTeamTitle>
      <OpenModalButton
        disabled={data ? false : true}
        onClick={() => setShow(true)}
      >
        New Member
      </OpenModalButton>
    </WorkspaceTeamHeading>
  );
};
