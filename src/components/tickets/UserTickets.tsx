import { useQuery } from "react-query";
import { getUserTickets } from "../../utils/api";
import { UserTicketsSection } from "../../utils/styles/tickets/user-tickets/UserTicketsStyled";
import { UserTicketsHeader } from "./header/UserTicketsHeader";
import { UserTicketsWorkspace } from "./UserTicketsWorkspace";

export const UserTickets = () => {
  const { data } = useQuery("userTicketsData", async () => {
    const res = await getUserTickets();
    return res.data;
  });

  return (
    <UserTicketsSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <UserTicketsHeader />
      <UserTicketsWorkspace data={data} />
    </UserTicketsSection>
  );
};
