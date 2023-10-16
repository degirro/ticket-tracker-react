import { TicketForm } from "../../forms/tickets/TicketForm";
import { ModalLayout } from "../../layouts/modals/ModalLayout";

type props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};

export const CreateTicketModal: React.FC<props> = ({ setShow, show }) => {
  return (
    <ModalLayout setShow={setShow} show={show} modalTitle="New Ticket">
      <TicketForm setShow={setShow} />
    </ModalLayout>
  );
};
