import { useContext, useEffect, useState } from "react";
import { checkWorkspaceUser, getAuthUser } from "../api";
import { AuthContext } from "../context/AuthContext";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export const useWorkspaceAuth = (id: string | undefined) => {
  const useWorkspaceUserAuth = async () => {
    if (id !== undefined) {
      try {
        const res: any = await checkWorkspaceUser(parseInt(id!));
        const workspaceUserData: boolean = res.data;
        return workspaceUserData;
      } catch (err: any) {
        console.log(err, "error msg");
      }
    }
  };

  const { isLoading: isWorkspaceAuthLoading, data: isWorkspaceAuth } = useQuery(
    ["isWorkspaceUser"],
    useWorkspaceUserAuth
  );

  return { isWorkspaceAuthLoading, isWorkspaceAuth };
};
