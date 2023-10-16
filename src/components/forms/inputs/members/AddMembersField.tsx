import React from "react";
import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputError,
  InputFieldModal,
} from "../../../../utils/styles/global/InputStyled";
import { AddMemberFieldProps } from "../../../../utils/types/types";

export const AddMembersField: React.FC<AddMemberFieldProps> = ({
  register,
  errors,
}) => {
  return (
    <InputContainer>
      <InputLabelContainer>
        <InputLabel>Enter Member Username</InputLabel>
        {errors.username && <InputError>{errors.username.message}</InputError>}
      </InputLabelContainer>
      <InputFieldModal
        type="text"
        id="username"
        {...register("username", {
          required: "Username is required",
          minLength: 2,
          maxLength: 32,
        })}
      />
    </InputContainer>
  );
};
