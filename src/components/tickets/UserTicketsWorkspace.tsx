import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  DropdownArrow,
  TicketsWorkspaceContainer,
  UserTicketsContainer,
  WorkspaceDropDown,
  WorkspaceDropDownContainer,
  WorkspaceName,
} from "../../utils/styles/tickets/user-tickets/UserTicketsStyled";
import { UserTicketItem } from "./UserTicketItem";
import { showUserTicketsVariants } from "../../utils/variants/ModalVariants";
import { TicketsDataType, UserTicketsDataType } from "../../utils/types/types";

type props = {
  data: UserTicketsDataType[];
};

export const UserTicketsWorkspace: React.FC<props> = ({ data }) => {
  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState<number | null>(
    null
  );

  const toggleWorkspaceDropdown = (workspaceId: number) => {
    setSelectedWorkspaceId((prev) =>
      prev === workspaceId ? null : workspaceId
    );
  };

  console.log(data);

  return (
    <TicketsWorkspaceContainer>
      {data?.map((item: UserTicketsDataType) => (
        <WorkspaceDropDownContainer key={item.id}>
          <WorkspaceDropDown onClick={() => toggleWorkspaceDropdown(item.id)}>
            <WorkspaceName>{item.name}</WorkspaceName>
            <DropdownArrow />
          </WorkspaceDropDown>

          <AnimatePresence>
            <UserTicketsContainer
              variants={showUserTicketsVariants}
              initial={{ height: "0px" }}
              animate={selectedWorkspaceId === item.id ? "open" : "closed"}
              transition={{ duration: 0.5 }}
            >
              {item.tickets.map((ticket: TicketsDataType) => (
                <UserTicketItem {...ticket} key={ticket.id} />
              ))}
            </UserTicketsContainer>
          </AnimatePresence>
        </WorkspaceDropDownContainer>
      ))}
    </TicketsWorkspaceContainer>
  );
};
