import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputError,
  InputField,
  InputFieldModal,
} from "../../../utils/styles/global/InputStyled";
import { CreateWorkspaceParams } from "../../../utils/types/types";
import { postCreateWorkspace } from "../../../utils/api";
import { toast } from "react-toastify";
import {
  FormContainer,
  FormFooterWrapper,
  FormSubmit,
} from "../../../utils/styles/form/FormStyled";
import { AuthContext } from "../../../utils/context/AuthContext";

type props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WorkspaceForm: React.FC<props> = ({ setShow }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateWorkspaceParams>();

  const onSubmit = async (data: CreateWorkspaceParams) => {
    try {
      await postCreateWorkspace(data);
      toast.clearWaitingQueue();
      toast("Workspace created!", { type: "success", icon: true });
      setShow(false);
      reset();
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabelContainer>
          <InputLabel htmlFor="name">Workspace Name</InputLabel>
          {errors.name && <InputError>{errors.name.message}</InputError>}
        </InputLabelContainer>
        <InputFieldModal
          type="text"
          id="name"
          {...register("name", {
            required: "Workspace name is required",
          })}
        />
      </InputContainer>

      <FormFooterWrapper>
        <FormSubmit type="submit">Create Workspace</FormSubmit>
      </FormFooterWrapper>
    </FormContainer>
  );
};
