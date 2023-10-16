import React, { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { checkWorkspaceAdmin } from "../../utils/api";
import { SocketContext } from "../../utils/context/SocketContext";
import {
  WorkspaceContainer,
  WorkspaceFade,
  WorkspaceSection,
  WorkspaceSideContainer,
} from "../../utils/styles/workspace/WorkspaceStyled";
import { Tickets } from "../layouts/tickets/Tickets";
import { WorkspaceTicketsHeader } from "./headers/WorkspaceTicketsHeader";
import { WorkspaceTeam } from "./team/WorkspaceTeam";

export const Workspace = () => {
  const socket = useContext(SocketContext);
  const { id } = useParams();

  useEffect(() => {
    // Join the room with the workspace id
    socket.emit("onWorkspaceJoin", id);
    console.log("User joined");

    // Clean up function to leave the room when the component unmounts
    return () => {
      socket.emit("onWorkspaceLeave", id);
      console.log("User left");
    };
  }, [socket]);

  return (
    <WorkspaceSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <WorkspaceContainer>
        <WorkspaceTicketsHeader />
        <Tickets />
      </WorkspaceContainer>
      <WorkspaceSideContainer>
        <WorkspaceTeam workspaceId={parseInt(id!)} />
      </WorkspaceSideContainer>
      <WorkspaceFade />
    </WorkspaceSection>
  );
};
