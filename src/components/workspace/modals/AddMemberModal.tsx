import { AddMemberForm } from "../../forms/members/AddMemberForm";
import { ModalLayout } from "../../layouts/modals/ModalLayout";

type props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};

export const AddMemberModal: React.FC<props> = ({ setShow, show }) => {
  return (
    <ModalLayout setShow={setShow} show={show} modalTitle="New Member">
      <AddMemberForm setShow={setShow} />
    </ModalLayout>
  );
};
