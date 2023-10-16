import React, { useState } from "react";
import {
  InputContainer,
  InputLabel,
  InputLabelContainer,
  InputSelectField,
  SelectOption,
  CurrentSelect,
  CurrentSelectContainer,
  SelectContainer,
  InputSelectIconDown,
  InputSelectIconUp,
  SelectInputContainer,
} from "../../../../utils/styles/global/InputStyled";
import {
  TicketFormFieldProps,
  UserOptionsParams,
} from "../../../../utils/types/types";
import { optionsVariants } from "../../../../utils/variants/ModalVariants";

type RegisterStrings = "status" | "issueType" | "priority";

interface DropdownFieldProps extends TicketFormFieldProps {
  options: UserOptionsParams[];
  registerString: RegisterStrings;
  dropdownLabel: string;
}

export const DropdownField: React.FC<DropdownFieldProps> = ({
  register,
  setValue,
  options,
  registerString,
  dropdownLabel,
  errors,
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

      <InputSelectField onClick={() => setOpen(!isOpen)}>
        <CurrentSelectContainer>
          <CurrentSelect
            value={textVal}
            readOnly={true}
            {...register(`${registerString}`, {
              required: `${dropdownLabel} is required`,
            })}
          />
          {!isOpen ? <InputSelectIconDown /> : <InputSelectIconUp />}
        </CurrentSelectContainer>
      </InputSelectField>
      <SelectContainer
        initial={{ height: "0px" }}
        variants={optionsVariants}
        animate={isOpen ? "open" : "closed"}
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
      </SelectContainer>
    </SelectInputContainer>
  );
};
