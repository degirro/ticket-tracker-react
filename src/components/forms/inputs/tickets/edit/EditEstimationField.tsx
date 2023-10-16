import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputError,
  InputFieldModal,
} from "../../../../../utils/styles/global/InputStyled";
import { CardSubEdit } from "../../../../../utils/styles/workspace/tickets/TicketCardEditStyled";
import { TicketFormFieldProps } from "../../../../../utils/types/types";

interface DefaultInputProps extends TicketFormFieldProps {
  defaultEstimation: number;
  isEdit: boolean;
}

export const EditEstimationField: React.FC<DefaultInputProps> = ({
  register,
  errors,
  defaultEstimation,
  isEdit,
}) => {
  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel>Time Estimate (hours): </InputLabel>
        {errors.estimation && (
          <InputError>{errors.estimation.message}</InputError>
        )}
      </InputLabelContainer>
      <CardSubEdit
        disabled={isEdit}
        type="number"
        defaultValue={defaultEstimation}
        id="estimation"
        {...register("estimation", {
          required: "Estimation is required",
          valueAsNumber: true,
          minLength: 1,
          maxLength: 3,
        })}
      />
    </InputContainer>
  );
};
