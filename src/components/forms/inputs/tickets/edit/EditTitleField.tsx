import React, { useEffect } from "react";
import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputError,
  InputFieldModal,
} from "../../../../../utils/styles/global/InputStyled";
import { CardTitleEdit } from "../../../../../utils/styles/workspace/tickets/TicketCardEditStyled";
import { TicketFormFieldProps } from "../../../../../utils/types/types";

interface DefaultInputProps extends TicketFormFieldProps {
  id: number;
  isEdit: boolean;
}

export const EditTitleField: React.FC<DefaultInputProps> = ({
  register,
  errors,
  id,
  isEdit,
}) => {
  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel>Title</InputLabel>
        {errors.title && <InputError>{errors.title.message}</InputError>}
      </InputLabelContainer>
      <CardTitleEdit
        disabled={isEdit}
        layoutId={`item-title-${id}`}
        transition={{ duration: 0.3 }}
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
