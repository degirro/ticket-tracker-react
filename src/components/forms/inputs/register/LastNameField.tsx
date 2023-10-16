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
  AccountInputField,
  AccountInputLabel,
} from "../../../../utils/styles/form/account/AccountFormStyled";

export const LastNameField: React.FC<RegisterFormFieldProps> = ({
  register,
  errors,
}) => {
  return (
    <AccountInputContainer>
      <InputLabelContainer>
        <AccountInputLabel>Last Name</AccountInputLabel>
        {errors.lastName && <InputError>{errors.lastName.message}</InputError>}
      </InputLabelContainer>
      <AccountInputField
        type="text"
        id="lastName"
        {...register("lastName", {
          required: "Last name is required",
          minLength: 2,
          maxLength: 32,
        })}
      />
    </AccountInputContainer>
  );
};
