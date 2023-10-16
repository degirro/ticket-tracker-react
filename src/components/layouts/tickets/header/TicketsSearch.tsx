import { useContext } from "react";
import {
  TicketsSearchContainer,
  TicketsSearchInput,
  TicketsSearchIcon,
} from "../../../../utils/styles/workspace/tickets/TicketsSearchStyled";
import { TicketsContext } from "../../../../utils/context/TicketsContext";

export const TicketsSearch = () => {
  const { handleSearch } = useContext(TicketsContext);
  return (
    <TicketsSearchContainer>
      <TicketsSearchInput onChange={handleSearch} />
      <TicketsSearchIcon />
    </TicketsSearchContainer>
  );
};
