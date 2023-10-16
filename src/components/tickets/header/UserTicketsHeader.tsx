import { useContext } from "react";
import { AuthContext } from "../../../utils/context/AuthContext";
import {
  UserTicketsHeading,
  UserTicketsHeaderText,
  UserTicketsUsername,
} from "../../../utils/styles/tickets/user-tickets/UserTicketsHeaderStyled";

export const UserTicketsHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <UserTicketsHeading>
      <UserTicketsHeaderText>
        Tickets: <UserTicketsUsername>{user?.username}</UserTicketsUsername>
      </UserTicketsHeaderText>
    </UserTicketsHeading>
  );
};
