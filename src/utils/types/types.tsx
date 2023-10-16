import {
  FieldErrorsImpl,
  UseFormRegister,
  UseFormSetValue,
  UseFormStateReturn,
} from "react-hook-form";

export type CreateUserParams = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type RegisterFormFieldProps = {
  register: UseFormRegister<CreateUserParams>;
  errors: FieldErrorsImpl<{
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  }>;
};

export type CreateWorkspaceParams = {
  name: string;
};

export type WorkspaceType = {
  id: number;
  name: string;
  users: User[];
};

export type CreateTicketParams = {
  title: string;
  desc: string;
  issueType: string;
  status: string;
  priority: string;
  estimation: number;
  users: User[];
};

export type UpdateTicketParams = {
  title: string;
  desc: string;
  issueType: string;
  status: string;
  priority: string;
  estimation: number;
  users: User[];
};

export type TicketFormFieldProps = {
  register: UseFormRegister<CreateTicketParams>;
  errors: FieldErrorsImpl<{
    title: string;
    desc: string;
    issueType: string;
    status: string;
    priority: string;
    estimation: number;
    users: User[];
  }>;
  setValue: UseFormSetValue<CreateTicketParams>;
  watch: (data: any) => unknown;
};

export type UserCredentialsParams = {
  username: string;
  password: string;
};

export type UserOptionsParams = {
  option: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type TicketParams = {
  id: number;
  title: string;
  desc: string;
  priority: string;
  status: string;
  users: User[];
  issueType: string;
  estimation: number;
};

export type TabOptionsParams = {
  id: number;
  filter: string;
  label: string;
};

export type filterOptionsProps = {
  label: string;
};

export type PieChartDataType = {
  [key: string]: number;
};

export type AddUserToWorkspaceParam = {
  username: string;
};

export type AddUserToWorkspaceAPI = {
  workspaceId: number;
  username: string;
};

export type AddMemberFieldProps = {
  register: UseFormRegister<AddUserToWorkspaceParam>;
  errors: FieldErrorsImpl<{
    username: string;
  }>;
};

export type workspaceUsersAllType = {
  id: number;
  name: string;
  workspacesUsers: workspaceUsersSingleType[];
};

export type workspaceUsersSingleType = {
  id: number;
  status: string;
  user: User;
};

export type WorkspaceExclude = {
  id: number;
  name: string;
};

export type notificationsType = {
  id: number;
  message: string;
  recipient: User;
  type: string;
  workspace: WorkspaceExclude;
};

export type removeUserData = {
  workspaceId: number | undefined;
  userId: number;
};

export type RemoveNotificationParams = {
  notifId: number;
};

export type TicketsDataType = {
  desc: string;
  estimation: number;
  id: number;
  issueType: string;
  priority: string;
  status: string;
  title: string;
  users: User[];
  workspaceId: number;
};

export type UserTicketsDataType = {
  id: number;
  name: string;
  tickets: TicketsDataType[];
};
