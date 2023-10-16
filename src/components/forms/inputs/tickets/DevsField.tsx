import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import {
  DevsFieldContainer,
  DevsSearchContainer,
  UserCheckboxContainer,
  UserInput,
  UserInputLabel,
  UsersList,
} from "../../../../utils/styles/form/tickets/DevsFieldStyled";
import {
  InputLabelContainer,
  InputLabel,
  InputError,
} from "../../../../utils/styles/global/InputStyled";
import {
  TicketFormFieldProps,
  User,
  workspaceUsersSingleType,
} from "../../../../utils/types/types";

export const DevsField: React.FC<TicketFormFieldProps> = ({
  register,
  errors,
  setValue,
  watch,
}) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<any>("workspacesUsers");
  const [userSelect, setUserSelect] = useState<User[]>([]);

  const handleCheck = (
    e: React.MouseEvent<HTMLDivElement>,
    i: number,
    item: User
  ) => {
    const selectIdx: number = userSelect.indexOf(item);
    if (userSelect.includes(item) && selectIdx > -1) {
      // const slice = userSelect.splice(selectIdx - 1, selectIdx);
      const slice = [
        ...userSelect.slice(0, selectIdx),
        ...userSelect.slice(selectIdx + 1),
      ];
      setUserSelect(slice);
    } else {
      setUserSelect((prev: User[]) => [...prev, item]);
    }
  };

  useEffect(() => {
    setValue("users", userSelect);
  }, [userSelect]);

  return (
    <DevsFieldContainer>
      <InputLabelContainer>
        <InputLabel htmlFor="users">Users</InputLabel>
        {errors.users && <InputError>{errors.users.message}</InputError>}
      </InputLabelContainer>
      <DevsSearchContainer>
        <UsersList>
          {data?.map((item: any, i: number) => (
            <UserCheckboxContainer
              key={item.id}
              id={item.user.username}
              onClick={(e) => handleCheck(e, i, item.user)}
              className={userSelect.includes(item.user) ? "active" : "inactive"}
            >
              <UserInput
                type="checkbox"
                checked={userSelect.includes(item.user)}
                {...register("users", {
                  required: "Users is required",
                  value: userSelect,
                  minLength: 1,
                })}
              />
              <UserInputLabel htmlFor="users">
                {item.user.username}
              </UserInputLabel>
            </UserCheckboxContainer>
          ))}
        </UsersList>
      </DevsSearchContainer>
    </DevsFieldContainer>
  );
};
