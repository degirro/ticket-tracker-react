import { useContext, useEffect, useState } from "react";
import { getAuthUser } from "../api";
import { AuthContext } from "../context/AuthContext";
import { useQuery } from "react-query";

export const useAuth = () => {
  const { user, updateAuthUser } = useContext(AuthContext);

  const handleAuthUser = async () => {
    try {
      const res: any = await getAuthUser();
      const data: any = res.data;
      return updateAuthUser(data);
    } catch (err: any) {
      console.log(err.response.message, "error msg");
    }
  };

  const { isLoading } = useQuery(["isAuthUser"], handleAuthUser);

  return { user, isLoading };
};
