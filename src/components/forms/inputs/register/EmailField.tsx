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

export const EmailField: React.FC<RegisterFormFieldProps> = ({
  register,
  errors,
}) => {
  return (
    <AccountInputContainer>
      <InputLabelContainer>
        <AccountInputLabel>Email</AccountInputLabel>
        {errors.email && <InputError>{errors.email.message}</InputError>}
      </InputLabelContainer>
      <AccountInputField
        type="email"
        id="email"
        {...register("email", {
          required: "Email is required",
          minLength: 2,
          maxLength: 32,
        })}
      />
    </AccountInputContainer>
  );
};
