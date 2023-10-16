import { useQuery, useQueryClient } from "react-query";
import { getWorkspaceTickets } from "../api";
import { useContext, useEffect } from "react";
import { TicketsContext } from "../context/TicketsContext";
import { AuthContext } from "../context/AuthContext";
import { TicketsDataType, User } from "../types/types";

export const useTicketsData = (id: string) => {
  const queryClient = useQueryClient();
  const { tabFilter, searchQuery, filterOption } = useContext(TicketsContext);
  const user = useContext(AuthContext);

  const getTicketsData = async () => {
    try {
      const res: any = await getWorkspaceTickets(parseInt(id), filterOption);
      return res.data.tickets;
    } catch (err: any) {
      console.log(err.response.message);
    }
  };

  const { isLoading, data } = useQuery(
    ["ticketsData", filterOption],
    getTicketsData
  );

  console.log(data);
  console.log(user);

  useEffect(() => {
    queryClient.invalidateQueries("ticketsData");
  }, [tabFilter, searchQuery, filterOption]);

  const filteredData = data?.filter((ticket: TicketsDataType) => {
    if (
      searchQuery !== "" &&
      !ticket.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    if (tabFilter === "assigned") {
      return ticket.users.some(
        (userMap: User) => userMap.username === user?.user?.username
      );
    }

    if (
      tabFilter === "archive" &&
      !ticket.status.toLowerCase().includes(tabFilter)
    ) {
      return false;
    }

    return true;
  });

  return {
    filteredData,
    isLoading,
  };
};
