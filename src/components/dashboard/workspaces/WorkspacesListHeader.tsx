import React, { useState } from "react";
import {
  WorkspaceListHeading,
  WorkspaceListTitle,
} from "../../../utils/styles/dashboard/DashboardStyled";
import { OpenModalButton } from "../../../utils/styles/global/OpenModalButtonStyled";
import { CreateWorkspaceModal } from "../modals/CreateWorkspaceModal";

export const WorkspacesListHeader = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <WorkspaceListHeading>
      <CreateWorkspaceModal show={show} setShow={setShow} />
      <WorkspaceListTitle>Workspaces</WorkspaceListTitle>
      <OpenModalButton onClick={() => setShow(true)}>
        New Workspace
      </OpenModalButton>
    </WorkspaceListHeading>
  );
};
