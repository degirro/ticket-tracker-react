import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addUserToWorkspace, postCreateTicket } from "../../../utils/api";
import { TicketsContext } from "../../../utils/context/TicketsContext";
import {
  FormContainer,
  FormFooterWrapper,
  FormSubmit,
} from "../../../utils/styles/form/FormStyled";
import { InputError } from "../../../utils/styles/global/InputStyled";
import {
  AddUserToWorkspaceParam,
  CreateTicketParams,
} from "../../../utils/types/types";
import { AddMembersField } from "../inputs/members/AddMembersField";

type props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddMemberForm: React.FC<props> = ({ setShow }) => {
  const { id } = useParams();
  const workspaceId = parseInt(id!);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<AddUserToWorkspaceParam>();

  const formFieldProps = { errors, register };

  const onSubmit = async (data: AddUserToWorkspaceParam) => {
    console.log(data);
    try {
      const dataWithWorkspaceId = { workspaceId, ...data };
      await addUserToWorkspace(dataWithWorkspaceId);
      toast.clearWaitingQueue();
      toast("Member added!", { type: "success", icon: true });
      setShow(false);
      reset();
    } catch (err: any) {
      const errors = err.response.data.message;
      if (errors === "User not found") {
        setError("username", {
          type: "server",
          message: "User not found",
        });
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <AddMembersField {...formFieldProps} />
      <FormFooterWrapper>
        <FormSubmit type="submit">Add Member</FormSubmit>
      </FormFooterWrapper>
    </FormContainer>
  );
};
