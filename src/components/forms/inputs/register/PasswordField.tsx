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

export const PasswordField: React.FC<RegisterFormFieldProps> = ({
  register,
  errors,
}) => {
  return (
    <AccountInputContainer>
      <InputLabelContainer>
        <AccountInputLabel>Password</AccountInputLabel>
        {errors.password && <InputError>{errors.password.message}</InputError>}
      </InputLabelContainer>
      <AccountInputField
        type="password"
        id="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
          pattern: {
            value:
              /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[a-z]).{8,}$/,
            message:
              "Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol",
          },
        })}
      />
    </AccountInputContainer>
  );
};
