import React, { useEffect } from "react";
import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputError,
  InputFieldModal,
} from "../../../../utils/styles/global/InputStyled";
import { TicketFormFieldProps } from "../../../../utils/types/types";

export const TitleField: React.FC<TicketFormFieldProps> = ({
  register,
  errors,
}) => {
  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel>Title</InputLabel>
        {errors.title && <InputError>{errors.title.message}</InputError>}
      </InputLabelContainer>
      <InputFieldModal
        type="text"
        id="title"
        {...register("title", {
          required: "Title is required",
          minLength: 2,
          maxLength: 32,
        })}
      />
    </InputContainer>
  );
};
