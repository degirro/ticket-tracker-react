import { useContext } from "react";
import {
  TabsContainer,
  TabWrapper,
} from "../../../../utils/styles/workspace/tickets/TicketTabsStyled";
import { TabOptionsParams } from "../../../../utils/types/types";
import { TicketsContext } from "../../../../utils/context/TicketsContext";

export const TicketTabs = () => {
  const { handleTabs, tabFilter } = useContext(TicketsContext);

  const tabOptions: TabOptionsParams[] = [
    { id: 1, filter: "all", label: "All tickets" },
    { id: 2, filter: "assigned", label: "Assigned to me" },
    { id: 3, filter: "archive", label: "Archive" },
  ];

  return (
    <TabsContainer>
      {tabOptions.map((tab: TabOptionsParams) => (
        <TabWrapper
          key={tab.id}
          className={tab.filter === tabFilter ? "active" : undefined}
          onClick={() => handleTabs(tab.filter)}
        >
          {tab.label}
        </TabWrapper>
      ))}
    </TabsContainer>
  );
};
