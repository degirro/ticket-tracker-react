import { useState, useEffect } from "react";
import { useQueryClient } from "react-query";
import {
  UsersList,
  UserInput,
  UserInputLabel,
  EditDevsFieldContainer,
  EditDevsSearchContainer,
  EditUserCheckboxContainer,
} from "../../../../../utils/styles/form/tickets/DevsFieldStyled";
import {
  InputLabelContainer,
  InputLabel,
  InputError,
} from "../../../../../utils/styles/global/InputStyled";
import { TicketFormFieldProps, User } from "../../../../../utils/types/types";

interface DefaultInputProps extends TicketFormFieldProps {
  defaultUsers: User[];
}

export const EditDevsField: React.FC<DefaultInputProps> = ({
  register,
  errors,
  setValue,
  defaultUsers,
  watch,
}) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<any>("workspacesUsers");
  const [userSelect, setUserSelect] = useState<User[]>(defaultUsers);

  const handleCheck = (item: User) => {
    const selectIdx: number = userSelect.findIndex(
      (user) => user.username === item.username
    );
    if (selectIdx > -1) {
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
  }, [userSelect, setValue]);

  return (
    <EditDevsFieldContainer>
      <InputLabelContainer>
        <InputLabel htmlFor="users">Users</InputLabel>
        {errors.users && <InputError>{errors.users.message}</InputError>}
      </InputLabelContainer>
      <EditDevsSearchContainer>
        <UsersList>
          {data?.map((item: any) => (
            <EditUserCheckboxContainer
              key={item.id}
              onClick={() => handleCheck(item.user)}
              className={
                userSelect.some((user) => user.username === item.user.username)
                  ? "active"
                  : "inactive"
              }
            >
              <UserInput
                type="checkbox"
                checked={userSelect.some(
                  (user) => user.username === item.user.username
                )}
                {...register("users", {
                  required: "Users is required",
                  value: userSelect,
                  minLength: 1,
                })}
              />
              <UserInputLabel htmlFor="users">
                {item.user.username}
              </UserInputLabel>
            </EditUserCheckboxContainer>
          ))}
        </UsersList>
      </EditDevsSearchContainer>
    </EditDevsFieldContainer>
  );
};
