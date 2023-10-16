import { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserTickets } from "../components/tickets/UserTickets";
import { AuthContext } from "../utils/context/AuthContext";

export const UserTicketsPage = () => {
  const { user } = useContext(AuthContext);
  const { username } = useParams();
  if (user && user.username === username) {
    return <UserTickets />;
  } else {
    return <Navigate to="/dashboard" />;
  }
};
