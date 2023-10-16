import { useContext, useState } from "react";
import {
  TicketFilterIcon,
  TicketsFilterContainer,
} from "../../../../utils/styles/workspace/tickets/TicketsFilterStyled";
import { TicketsFilterSelect } from "./TicketsFilterSelect";
import { TicketsContext } from "../../../../utils/context/TicketsContext";

export const TicketsFilter = () => {
  const { handleFilter, filterOption } = useContext(TicketsContext);
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <TicketsFilterContainer onClick={() => setOpen(!isOpen)}>
      Filter <TicketFilterIcon />
      <TicketsFilterSelect
        filterOption={filterOption}
        handleFilter={handleFilter}
        isOpen={isOpen}
      />
    </TicketsFilterContainer>
  );
};
