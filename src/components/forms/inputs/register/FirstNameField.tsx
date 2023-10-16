import React from "react";
import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputError,
  InputField,
} from "../../../../utils/styles/global/InputStyled";
import { RegisterFormFieldProps } from "../../../../utils/types/types";
import {
  AccountInputContainer,
  AccountInputLabel,
  AccountInputField,
} from "../../../../utils/styles/form/account/AccountFormStyled";

export const FirstNameField: React.FC<RegisterFormFieldProps> = ({
  register,
  errors,
}) => {
  return (
    <AccountInputContainer>
      <InputLabelContainer>
        <AccountInputLabel>First Name</AccountInputLabel>
        {errors.firstName && (
          <InputError>{errors.firstName.message}</InputError>
        )}
      </InputLabelContainer>
      <AccountInputField
        type="text"
        id="firstName"
        {...register("firstName", {
          required: "First name is required",
          minLength: 2,
          maxLength: 32,
        })}
      />
    </AccountInputContainer>
  );
};
