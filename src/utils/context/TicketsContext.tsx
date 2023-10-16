import { createContext, PropsWithChildren, useState } from "react";
import { TicketParams } from "../types/types";
import { useNavigate } from "react-router-dom";

type TicketsContextType = {
  handleTabs: (btnId: string) => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
  handleFilter: (option: string) => void;
  filterOption: string;
  tabFilter: string;
  targetItem: TicketParams | undefined;
  handleTargetItem: (item: TicketParams) => void;
  handleRemoveTargetItem: () => void;
};

export const TicketsContext = createContext<TicketsContextType>(null as any);

export const TicketsContextProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [tabFilter, setTabFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterOption, setFilterOption] = useState<string>("");
  const [targetItem, setTargetItem] = useState<TicketParams | undefined>();

  const handleTargetItem = (item: TicketParams) => {
    setTargetItem(item);
  };

  const handleRemoveTargetItem = () => {
    setTargetItem(undefined);
  };

  const handleTabs = (btnId: string) => {
    setTabFilter(btnId);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilter = (option: string) => {
    setFilterOption(option);
  };

  return (
    <TicketsContext.Provider
      value={{
        handleTabs,
        handleSearch,
        searchQuery,
        handleFilter,
        filterOption,
        tabFilter,
        targetItem,
        handleTargetItem,
        handleRemoveTargetItem,
      }}
    >
      {children}
    </TicketsContext.Provider>
  );
};
