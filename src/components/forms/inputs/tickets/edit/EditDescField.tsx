import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputError,
} from "../../../../../utils/styles/global/InputStyled";
import { CardSubEdit } from "../../../../../utils/styles/workspace/tickets/TicketCardEditStyled";
import { TicketFormFieldProps } from "../../../../../utils/types/types";

interface DefaultInputProps extends TicketFormFieldProps {
  id: number;
  isEdit: boolean;
}

export const EditDescField: React.FC<DefaultInputProps> = ({
  register,
  errors,
  id,
  isEdit,
}) => {
  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel>Description</InputLabel>
        {errors.desc && <InputError>{errors.desc.message}</InputError>}
      </InputLabelContainer>
      <CardSubEdit
        disabled={isEdit}
        type="text"
        layoutId={`item-desc-${id}`}
        id="desc"
        {...register("desc", {
          required: "Description is required",
          minLength: 2,
          maxLength: 32,
        })}
      />
    </InputContainer>
  );
};
