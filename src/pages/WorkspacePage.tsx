import { useParams } from "react-router-dom";
import { Workspace } from "../components/workspace/Workspace";
import { useContext, useEffect } from "react";
import { WorkspaceContext } from "../utils/context/WorkspaceContext";

export const WorkspacePage = () => {
  const { setWorkspaceId } = useContext(WorkspaceContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setWorkspaceId(parseInt(id));
    }
  }, [id]);

  return <Workspace />;
};
