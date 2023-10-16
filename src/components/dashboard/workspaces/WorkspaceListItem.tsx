import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  WorkspaceItemContainer,
  WorkspaceDataName,
} from "../../../utils/styles/dashboard/DashboardStyled";

type props = {
  name: string;
  id: number;
};

export const WorkspaceListItem: React.FC<props> = ({ id, name }) => {
  const navigate = useNavigate();

  return (
    <WorkspaceItemContainer onClick={() => navigate(`/workspace/${id}/`)}>
      <WorkspaceDataName>{name}</WorkspaceDataName>
      <MdOutlineKeyboardArrowRight />
    </WorkspaceItemContainer>
  );
};
