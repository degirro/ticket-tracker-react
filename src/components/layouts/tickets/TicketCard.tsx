import {
  CardContainer,
  CardOverlay,
  Card,
  CardId,
  CardCloseButton,
  CardHeader,
  CardHeaderRight,
  CardHeaderTitle,
} from "../../../utils/styles/workspace/tickets/TicketsCardStyled";
import { User } from "../../../utils/types/types";
import { EditTicketForm } from "../../forms/tickets/EditTicketForm";

type props = {
  id: number;
  title: string;
  desc: string;
  issueType: string;
  priority: string;
  status: string;
  estimation: number;
  users: User[];
  handleRemove: () => void;
};

export const ItemCard: React.FC<props> = ({
  id,
  title,
  desc,
  issueType,
  priority,
  status,
  estimation,
  users,
  handleRemove,
}) => {
  return (
    <CardContainer>
      <CardOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      <Card layoutId={`item-container-${id}`}>
        <CardHeader>
          <CardHeaderTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ticket Information
          </CardHeaderTitle>
          <CardHeaderRight>
            <CardId>Ticket ID: {id}</CardId>
            <CardCloseButton onClick={handleRemove} />
          </CardHeaderRight>
        </CardHeader>
        <EditTicketForm
          handleRemove={handleRemove}
          id={id}
          title={title}
          desc={desc}
          issueType={issueType}
          priority={priority}
          status={status}
          estimation={estimation}
          users={users}
        />
      </Card>
    </CardContainer>
  );
};
