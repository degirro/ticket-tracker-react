import axios, { AxiosRequestConfig } from "axios";
import {
  AddUserToWorkspaceAPI,
  CreateTicketParams,
  CreateUserParams,
  CreateWorkspaceParams,
  RemoveNotificationParams,
  removeUserData,
  UpdateTicketParams,
  User,
  UserCredentialsParams,
} from "./types/types";

const API_URL = process.env.REACT_APP_API_URL;
const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = (data: CreateUserParams) =>
  axiosClient.post(`/auth/register`, data, config);

export const postLoginUser = (data: UserCredentialsParams) =>
  axiosClient.post(`/auth/login`, data, config);

export const postCreateWorkspace = (data: CreateWorkspaceParams) =>
  axiosClient.post(`/workspaces/`, data, config);

export const postCreateTicket = (id: number, data: CreateTicketParams) =>
  axiosClient.post(`/tickets/create/${id}`, data, config);

export const addUserToWorkspace = (data: AddUserToWorkspaceAPI) =>
  axiosClient.post(
    `/workspaces/add/${data.workspaceId}/${data.username}`,
    data,
    config
  );

export const removeUserFromWorkspace = (data: removeUserData) =>
  axiosClient.post(
    `/workspaces/remove/${data.workspaceId}/${data.userId}`,
    data,
    config
  );

export const updateUserStatusConfirm = (workspaceId: number) =>
  axiosClient.post(`/workspaces/update/${workspaceId}`, workspaceId, config);

export const updateUserStatusDecline = (workspaceId: number) =>
  axiosClient.post(`/workspaces/decline/${workspaceId}`, workspaceId, config);

export const getAuthUser = () => axiosClient.get<User>(`/auth/status`, config);

export const logoutUser = () =>
  axiosClient.post("http://localhost:3001/api/auth/logout", {}, config);

export const getUserWorkspaces = () => axiosClient.get(`workspaces`, config);

export const getUsers = (id: number) =>
  axiosClient.get(`workspaces/users/${id}`, config);

export const getWorkspaceTickets = (
  id: number,
  status?: string,
  userTickets?: boolean
) =>
  axiosClient.get(`tickets/workspace-tickets/${id}`, {
    params: {
      status,
      userTickets,
    },
    ...config,
  });

export const getUserTickets = () => axiosClient.get(`tickets`, config);

export const getUserNotifications = () =>
  axiosClient.get(`notifications`, config);

export const checkWorkspaceUser = (workspaceId: number) =>
  axiosClient.get<boolean>(`workspaces/auth/${workspaceId}`, config);

export const checkWorkspaceAdmin = (workspaceId: number) =>
  axiosClient.get<boolean>(`workspaces/auth/admin/${workspaceId}`, config);

export const postUpdateTicket = (id: number, data: UpdateTicketParams) =>
  axiosClient.post(`/tickets/update/${id}`, data, config);

export const postRemoveNotification = (data: RemoveNotificationParams) =>
  axiosClient.post(`/notifications/remove/${data.notifId}`, data, config);

export const checkUserGuard = (userURLParams: string) =>
  axiosClient.get<boolean>(`users/auth/${userURLParams}`, config);
