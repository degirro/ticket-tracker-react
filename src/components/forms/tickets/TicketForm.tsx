import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { postCreateTicket } from "../../../utils/api";
import { TicketsContext } from "../../../utils/context/TicketsContext";
import { WorkspaceContext } from "../../../utils/context/WorkspaceContext";
import {
  FormContainer,
  FormFooterWrapper,
  FormSubmit,
} from "../../../utils/styles/form/FormStyled";
import { CreateTicketParams } from "../../../utils/types/types";
import { DescField } from "../inputs/tickets/DescField";
import { DevsField } from "../inputs/tickets/DevsField";
import { DropdownField } from "../inputs/tickets/DropdownField";
import { EstimationField } from "../inputs/tickets/EstimationField";
import {
  priorityOptions,
  statusOptions,
  typeOptions,
} from "../inputs/tickets/optionsData/optionsData";
import { TitleField } from "../inputs/tickets/TitleField";

type props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TicketForm: React.FC<props> = ({ setShow }) => {
  const { workspaceId } = useContext(WorkspaceContext);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
    formState: { dirtyFields },
  } = useForm<CreateTicketParams>();

  const formFieldProps = { errors, register, setValue, watch, dirtyFields };

  const onSubmit = async (data: CreateTicketParams) => {
    try {
      if (workspaceId) {
        await postCreateTicket(workspaceId, data);
        toast.clearWaitingQueue();
        toast("Ticket created!", { type: "success", icon: true });
        setShow(false);
        reset();
      }
    } catch (err: any) {
      console.log(err.response.data);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <TitleField {...formFieldProps} />
      <DescField {...formFieldProps} />
      <DevsField {...formFieldProps} />
      <EstimationField {...formFieldProps} />
      <DropdownField
        options={typeOptions}
        registerString="issueType"
        dropdownLabel="Type"
        {...formFieldProps}
      />
      <DropdownField
        options={priorityOptions}
        registerString="priority"
        dropdownLabel="Priority"
        {...formFieldProps}
      />
      <DropdownField
        options={statusOptions}
        registerString="status"
        dropdownLabel="Status"
        {...formFieldProps}
      />
      <FormFooterWrapper>
        <FormSubmit type="submit">Create Ticket</FormSubmit>
      </FormFooterWrapper>
    </FormContainer>
  );
};
