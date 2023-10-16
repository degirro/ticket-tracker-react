import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputError,
  InputFieldModal,
} from "../../../../utils/styles/global/InputStyled";
import { TicketFormFieldProps } from "../../../../utils/types/types";

export const EstimationField: React.FC<TicketFormFieldProps> = ({
  register,
  errors,
}) => {
  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel>Time Estimate (hours): </InputLabel>
        {errors.estimation && (
          <InputError>{errors.estimation.message}</InputError>
        )}
      </InputLabelContainer>
      <InputFieldModal
        type="number"
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
