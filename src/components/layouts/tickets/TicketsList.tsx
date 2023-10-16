import { MoonLoader } from "react-spinners";
import { TicketItem } from "./TicketItem";
import { TicketItemContainer } from "../../../utils/styles/workspace/tickets/TicketsCategoryStyled";
import { useContext, useEffect } from "react";
import { useQueryClient } from "react-query";
import { SocketContext } from "../../../utils/context/SocketContext";
import { NoDataMessage } from "../../../utils/styles/global/MessageStyled";
import { TicketsContext } from "../../../utils/context/TicketsContext";
import { useTicketsData } from "../../../utils/hooks/useTicketsData";
import { useParams } from "react-router-dom";
import { TicketsDataType } from "../../../utils/types/types";

export const TicketsList = () => {
  const queryClient = useQueryClient();
  const socket = useContext(SocketContext);
  const { id } = useParams();
  const { targetItem } = useContext(TicketsContext);
  const { filteredData, isLoading } = useTicketsData(id!);

  useEffect(() => {
    const onTicketsChange = () => {
      queryClient.invalidateQueries("ticketsData");
    };

    socket.on("onAddTicket", onTicketsChange);

    return () => {
      socket.off("onAddTicket", onTicketsChange);
    };
  }, []);

  return (
    <TicketItemContainer>
      {!isLoading ? (
        <>
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((item: TicketsDataType, i: number) => (
              <>
                {targetItem !== item && (
                  <TicketItem key={item.id} index={i} {...item} item={item} />
                )}
              </>
            ))
          ) : (
            <NoDataMessage>No tickets found.</NoDataMessage>
          )}
        </>
      ) : (
        <MoonLoader color="white" />
      )}
    </TicketItemContainer>
  );
};
