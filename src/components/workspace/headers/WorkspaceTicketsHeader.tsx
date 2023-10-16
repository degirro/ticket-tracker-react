import { useContext, useState } from "react";
import { WorkspaceContext } from "../../../utils/context/WorkspaceContext";
import { OpenModalButton } from "../../../utils/styles/global/OpenModalButtonStyled";
import {
  WorkspaceName,
  WorkspaceTicketsHeading,
  WorkspaceTicketsTitle,
} from "../../../utils/styles/workspace/WorkspaceStyled";
import { CreateTicketModal } from "../modals/CreateTicketModal";

export const WorkspaceTicketsHeader = () => {
  const [show, setShow] = useState<boolean>(false);
  const { workspaceName } = useContext(WorkspaceContext);

  return (
    <WorkspaceTicketsHeading>
      <CreateTicketModal show={show} setShow={setShow} />
      <WorkspaceTicketsTitle>
        Tickets: <WorkspaceName>{workspaceName}</WorkspaceName>
      </WorkspaceTicketsTitle>
      <OpenModalButton onClick={() => setShow(true)}>
        New Ticket
      </OpenModalButton>
    </WorkspaceTicketsHeading>
  );
};
