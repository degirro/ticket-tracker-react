import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CreateUserParams } from "../../../utils/types/types";
import { postRegisterUser } from "../../../utils/api";
import { toast } from "react-toastify";
import { UsernameField } from "../inputs/register/UsernameField";
import { EmailField } from "../inputs/register/EmailField";
import { FirstNameField } from "../inputs/register/FirstNameField";
import { LastNameField } from "../inputs/register/LastNameField";
import { PasswordField } from "../inputs/register/PasswordField";
import {
  AccountContainer,
  AccountFooterContainer,
  AccountHeader,
  AccountHeaderWrapper,
  AccountRedirect,
  AccountSection,
  AccountSubmit,
} from "../../../utils/styles/form/account/AccountFormStyled";

export const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserParams>({ reValidateMode: "onBlur" });

  const formFieldProps = { errors, register };

  const onSubmit = async (data: CreateUserParams) => {
    try {
      await postRegisterUser(data);
      console.log("Success");
      navigate("/login");
      toast.clearWaitingQueue();
      toast("Account created!", { type: "success", icon: true });
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <AccountSection>
      <AccountContainer onSubmit={handleSubmit(onSubmit)}>
        <AccountHeaderWrapper>
          <AccountHeader>Register.</AccountHeader>
        </AccountHeaderWrapper>
        <UsernameField {...formFieldProps} />
        <EmailField {...formFieldProps} />
        <FirstNameField {...formFieldProps} />
        <LastNameField {...formFieldProps} />
        <PasswordField {...formFieldProps} />
        <AccountFooterContainer>
          <AccountSubmit>Create My Account</AccountSubmit>
          <AccountRedirect>
            Already have an account?
            <Link
              style={{ color: "#00b800", textDecoration: "none" }}
              to="/login"
            >
              Login
            </Link>
          </AccountRedirect>
        </AccountFooterContainer>
      </AccountContainer>
    </AccountSection>
  );
};
