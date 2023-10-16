import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useContext } from "react";
import { TicketsListContainer } from "../../../utils/styles/workspace/tickets/TicketsCategoryStyled";
import { ItemCard } from "./TicketCard";
import { TicketsList } from "./TicketsList";
import { TicketsContext } from "../../../utils/context/TicketsContext";
import { TicketsSort } from "./header/TicketSorts";

export const Tickets = () => {
  const { targetItem, handleRemoveTargetItem } = useContext(TicketsContext);

  return (
    <TicketsListContainer>
      <TicketsSort />
      <TicketsList />
      <AnimatePresence>
        {targetItem ? (
          <ItemCard {...targetItem} handleRemove={handleRemoveTargetItem} />
        ) : null}
      </AnimatePresence>
    </TicketsListContainer>
  );
};
