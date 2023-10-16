import { useQuery } from "react-query";
import { checkUserGuard } from "../api";

export const useUserTicketsAuth = (username: string) => {
  const {
    isLoading: isUserAuthLoading,
    data: isUserAuth,
    isError,
  } = useQuery(
    "isUserAuth",
    async () => {
      const res = await checkUserGuard(username);
      return res.data;
    },
    {
      enabled: !!username,
    }
  );

  return { isUserAuthLoading, isUserAuth, isError };
};
