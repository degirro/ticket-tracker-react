import { WorkspaceForm } from "../../forms/workspaces/WorkspacesForm";
import { ModalLayout } from "../../layouts/modals/ModalLayout";

type props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
};

export const CreateWorkspaceModal: React.FC<props> = ({ setShow, show }) => {
  return (
    <ModalLayout setShow={setShow} show={show} modalTitle="New Workspace">
      <WorkspaceForm setShow={setShow} />
    </ModalLayout>
  );
};
