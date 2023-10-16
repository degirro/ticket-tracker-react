import { TicketsSortContainer } from "../../../../utils/styles/workspace/tickets/TicketsSortStyled";
import { TicketsFilter } from "./TicketsFilter";
import { TicketsSearch } from "./TicketsSearch";
import { TicketTabs } from "./TicketsTabs";

export const TicketsSort = () => {
  return (
    <TicketsSortContainer>
      <TicketTabs />
      <TicketsSearch />
      <TicketsFilter />
    </TicketsSortContainer>
  );
};
