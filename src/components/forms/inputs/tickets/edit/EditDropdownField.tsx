import React, { useState } from "react";
import {
  InputContainer,
  InputLabelContainer,
  InputLabel,
  InputSelectField,
  CurrentSelectContainer,
  CurrentSelect,
  InputSelectIconDown,
  InputSelectIconUp,
  SelectContainer,
  SelectOption,
  EditCurrentSelect,
  SelectInputContainer,
  EditInputSelectField,
  EditSelectContainer,
} from "../../../../../utils/styles/global/InputStyled";
import {
  TicketFormFieldProps,
  UserOptionsParams,
} from "../../../../../utils/types/types";
import { optionsVariants } from "../../../../../utils/variants/ModalVariants";

type RegisterStrings = "status" | "issueType" | "priority";

interface EditDropdownFieldProps extends TicketFormFieldProps {
  options: UserOptionsParams[];
  registerString: RegisterStrings;
  dropdownLabel: string;
  defaultDropDown: string;
  id: number;
  isEdit: boolean;
}

export const EditDropdownField: React.FC<EditDropdownFieldProps> = ({
  register,
  setValue,
  options,
  registerString,
  dropdownLabel,
  defaultDropDown,
  id,
  errors,
  isEdit,
}) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [textVal, setTextVal] = useState<string>("");

  const handleSelect = (option: string) => {
    setTextVal(option);
    setValue(registerString, option);
    setOpen(false);
  };

  return (
    <SelectInputContainer>
      <InputLabelContainer>
        <InputLabel htmlFor={registerString}>{dropdownLabel}</InputLabel>
      </InputLabelContainer>

      <EditInputSelectField
        className={isEdit ? "active" : "inactive"}
        onClick={() => setOpen(!isOpen)}
      >
        <CurrentSelectContainer>
          <EditCurrentSelect
            disabled={true}
            layoutId={`item-${dropdownLabel.toLowerCase()}-${id}`}
            transition={{ duration: 0 }}
            value={textVal !== "" ? textVal : defaultDropDown}
            readOnly={true}
            defaultValue={defaultDropDown}
            {...register(`${registerString}`, {
              required: `${dropdownLabel} is required`,
            })}
          />
          {!isEdit &&
            (isOpen ? <InputSelectIconUp /> : <InputSelectIconDown />)}
        </CurrentSelectContainer>
      </EditInputSelectField>
      <EditSelectContainer
        initial={{ height: "0px" }}
        variants={optionsVariants}
        animate={isOpen && !isEdit ? "open" : "closed"}
      >
        {options.map((item: UserOptionsParams, i: number) => (
          <SelectOption
            key={i}
            id={registerString}
            onClick={() => handleSelect(item.option)}
            className={
              registerString === item.option
                ? "current"
                : errors[registerString]
                ? "error"
                : ""
            }
          >
            {item.option}
          </SelectOption>
        ))}
      </EditSelectContainer>
    </SelectInputContainer>
  );
};
