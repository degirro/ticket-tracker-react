import {
  FilterOption,
  TicketsFilterSelectContainer,
} from "../../../../utils/styles/workspace/tickets/TicketsFilterSelectStyled";
import { filterOptionsProps } from "../../../../utils/types/types";
import { ticketOptionsVariants } from "../../../../utils/variants/variants";

type props = {
  isOpen: boolean;
  handleFilter: (option: string) => void;
  filterOption: string;
};

export const TicketsFilterSelect: React.FC<props> = ({
  isOpen,
  handleFilter,
  filterOption,
}) => {
  const filterOptions: filterOptionsProps[] = [
    { label: "Unresolved" },
    { label: "In-Progress" },
  ];

  const clickOption = (optionLabel: string) => {
    if (filterOption !== optionLabel) {
      handleFilter(optionLabel);
    } else {
      handleFilter("");
    }
  };

  return (
    <TicketsFilterSelectContainer
      initial={{ display: "none" }}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.3 }}
      variants={ticketOptionsVariants}
    >
      {filterOptions.map((option: filterOptionsProps, i: number) => (
        <FilterOption
          key={i}
          onClick={() => clickOption(option.label)}
          className={option.label === filterOption ? "active" : "undefined"}
        >
          {option.label}
        </FilterOption>
      ))}
    </TicketsFilterSelectContainer>
  );
};
