import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { postUpdateTicket } from "../../../utils/api";
import { WorkspaceContext } from "../../../utils/context/WorkspaceContext";
import { FormContainer } from "../../../utils/styles/form/FormStyled";
import {
  CardEditButton,
  EditCardInfoContainer,
  EditCardSection,
  EditDropdownContainer,
  EditFormFooterWrapper,
  EditFormSubmit,
} from "../../../utils/styles/workspace/tickets/TicketsCardStyled";
import {
  CreateTicketParams,
  UpdateTicketParams,
  User,
} from "../../../utils/types/types";
import { EditDescField } from "../inputs/tickets/edit/EditDescField";
import { EditDevsField } from "../inputs/tickets/edit/EditDevsField";
import { EditDropdownField } from "../inputs/tickets/edit/EditDropdownField";
import { EditEstimationField } from "../inputs/tickets/edit/EditEstimationField";
import { EditTitleField } from "../inputs/tickets/edit/EditTitleField";
import {
  priorityOptions,
  statusOptions,
  typeOptions,
} from "../inputs/tickets/optionsData/optionsData";
import { useQueryClient } from "react-query";

type defaultInputProps = {
  handleRemove: () => void;
  id: number;
  title: string;
  desc: string;
  issueType: string;
  priority: string;
  status: string;
  estimation: number;
  users: User[];
};

export const EditTicketForm: React.FC<defaultInputProps> = (
  defaultInputProps
) => {
  const [isEdit, setEdit] = useState<boolean>(true);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<any>("isAdmin");
  const { workspaceId } = useContext(WorkspaceContext);

  const handleEdit = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.stopPropagation();
    setEdit(!isEdit);
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isDirty },
  } = useForm<CreateTicketParams>({ defaultValues: defaultInputProps });

  const formFieldProps = {
    errors,
    register,
    setValue,
    watch,
  };

  const onSubmit = async (data: UpdateTicketParams) => {
    defaultInputProps.handleRemove();

    setTimeout(async () => {
      try {
        await postUpdateTicket(workspaceId!, data);
        toast.clearWaitingQueue();
        toast("Ticket Updated!", { type: "success", icon: true });
      } catch (err: any) {
        console.log(err.response.data);
      }
    }, 500);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <EditCardSection>
        <EditCardInfoContainer>
          <EditTitleField
            id={defaultInputProps.id}
            isEdit={isEdit}
            {...formFieldProps}
          />
          <EditDescField
            id={defaultInputProps.id}
            isEdit={isEdit}
            {...formFieldProps}
          />
          <EditEstimationField
            defaultEstimation={defaultInputProps.estimation}
            isEdit={isEdit}
            {...formFieldProps}
          />
          <EditDropdownContainer>
            <EditDropdownField
              isEdit={isEdit}
              defaultDropDown={defaultInputProps.priority}
              id={defaultInputProps.id}
              options={priorityOptions}
              registerString="priority"
              dropdownLabel="Priority"
              {...formFieldProps}
            />
            <EditDropdownField
              isEdit={isEdit}
              defaultDropDown={defaultInputProps.issueType}
              id={defaultInputProps.id}
              options={typeOptions}
              registerString="issueType"
              dropdownLabel="Type"
              {...formFieldProps}
            />
            <EditDropdownField
              isEdit={isEdit}
              defaultDropDown={defaultInputProps.status}
              id={defaultInputProps.id}
              options={statusOptions}
              registerString="status"
              dropdownLabel="Status"
              {...formFieldProps}
            />
          </EditDropdownContainer>
        </EditCardInfoContainer>
        <EditDevsField
          defaultUsers={defaultInputProps.users}
          {...formFieldProps}
        />
      </EditCardSection>

      <EditFormFooterWrapper>
        {isDirty ? <EditFormSubmit type="submit">Save</EditFormSubmit> : null}
        {data ? (
          <CardEditButton onClick={(e) => handleEdit(e)}>Edit</CardEditButton>
        ) : null}
      </EditFormFooterWrapper>
    </FormContainer>
  );
};
