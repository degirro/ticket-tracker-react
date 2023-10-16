import React from "react";
import {
  InputContainer,
  InputLabel,
  InputField,
  InputLabelContainer,
  InputError,
} from "../../../../utils/styles/global/InputStyled";
import { RegisterFormFieldProps } from "../../../../utils/types/types";
import {
  AccountInputLabel,
  AccountInputField,
  AccountInputContainer,
} from "../../../../utils/styles/form/account/AccountFormStyled";

export const UsernameField: React.FC<RegisterFormFieldProps> = ({
  register,
  errors,
}) => {
  return (
    <AccountInputContainer>
      <InputLabelContainer>
        <AccountInputLabel>Username</AccountInputLabel>
        {errors.username && <InputError>{errors.username.message}</InputError>}
      </InputLabelContainer>
      <AccountInputField
        type="text"
        id="username"
        {...register("username", {
          required: "Username is required",
          minLength: 2,
          maxLength: 32,
        })}
      />
    </AccountInputContainer>
  );
};
