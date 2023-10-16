import React from "react";
import { useForm } from "react-hook-form";
import {
  InputLabelContainer,
  InputError,
} from "../../../utils/styles/global/InputStyled";
import { UserCredentialsParams } from "../../../utils/types/types";
import { Link, useNavigate } from "react-router-dom";
import { postLoginUser } from "../../../utils/api";
import {
  AccountContainer,
  AccountHeaderWrapper,
  AccountHeader,
  AccountInputContainer,
  AccountInputLabel,
  AccountInputField,
  AccountFooterContainer,
  AccountSubmit,
  AccountRedirect,
  AccountSection,
} from "../../../utils/styles/form/account/AccountFormStyled";

export const Login = () => {
  const navigate = useNavigate();

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentialsParams>();

  const onSubmit = async (data: UserCredentialsParams) => {
    try {
      await postLoginUser(data);
      console.log("Success");
      navigate("/dashboard");
    } catch (err: any) {
      const errors = err.response.data.message;
      if (errors === "Unauthorized" || "Invalid Credentials") {
        console.log(" passing through ");
        setError("username", {
          type: "server",
          message: "Invalid Credentials",
        });
        setError("password", {
          type: "server",
          message: "Invalid Credentials",
        });
      }
    }
  };

  return (
    <AccountSection>
      <AccountContainer onSubmit={handleSubmit(onSubmit)}>
        <AccountHeaderWrapper>
          <AccountHeader>Login.</AccountHeader>
        </AccountHeaderWrapper>

        <AccountInputContainer>
          <InputLabelContainer>
            <AccountInputLabel htmlFor="username">Username</AccountInputLabel>
            {errors.username && (
              <InputError>{errors.username.message}</InputError>
            )}
          </InputLabelContainer>
          <AccountInputField
            type="text"
            id="username"
            {...register("username", {
              required: "Username is required",
            })}
          />
        </AccountInputContainer>

        <AccountInputContainer>
          <InputLabelContainer>
            <AccountInputLabel htmlFor="password">Password</AccountInputLabel>
            {errors.password && (
              <InputError>{errors.password.message}</InputError>
            )}
          </InputLabelContainer>
          <AccountInputField
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
        </AccountInputContainer>

        <AccountFooterContainer>
          <AccountSubmit>Login</AccountSubmit>
          <AccountRedirect>
            Don't have an account?{" "}
            <Link
              style={{ color: "#00b800", textDecoration: "none" }}
              to="/register"
            >
              Register
            </Link>
          </AccountRedirect>
        </AccountFooterContainer>
      </AccountContainer>
    </AccountSection>
  );
};
