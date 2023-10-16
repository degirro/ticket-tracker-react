import React from "react";
import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputError,
  InputFieldModal,
} from "../../../../utils/styles/global/InputStyled";
import { TicketFormFieldProps } from "../../../../utils/types/types";

export const DescField: React.FC<TicketFormFieldProps> = ({
  register,
  errors,
}) => {
  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel>Description</InputLabel>
        {errors.desc && <InputError>{errors.desc.message}</InputError>}
      </InputLabelContainer>
      <InputFieldModal
        type="text"
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
