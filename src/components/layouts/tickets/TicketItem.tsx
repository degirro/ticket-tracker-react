import { useContext } from "react";
import {
  ItemTitle,
  ItemDesc,
  ItemIssue,
  Item,
  ItemPriority,
  ItemFooter,
} from "../../../utils/styles/workspace/tickets/TicketItemStyled";
import { TicketParams } from "../../../utils/types/types";
import { TicketsContext } from "../../../utils/context/TicketsContext";

type props = {
  index: number;
  id: number;
  title: string;
  desc: string;
  issueType: string;
  item: TicketParams;
  priority: string;
};

export const TicketItem: React.FC<props> = ({
  index,
  id,
  title,
  desc,
  issueType,
  priority,
  item,
}) => {
  const { handleTargetItem } = useContext(TicketsContext);

  return (
    <Item
      layoutId={`item-container-${id}`}
      onClick={() => handleTargetItem(item)}
      initial={{ opacity: 0, right: 10 }}
      animate={{ opacity: 1, right: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ItemTitle disabled={true} value={title} layoutId={`item-title-${id}`} />
      <ItemDesc disabled={true} value={desc} layoutId={`item-desc-${id}`} />
      <ItemFooter>
        <ItemPriority
          className={priority.toLowerCase()}
          layoutId={`item-priority-${id}`}
        >
          {priority}
        </ItemPriority>
        <ItemIssue layoutId={`item-issue-${id}`}>{issueType}</ItemIssue>
      </ItemFooter>
    </Item>
  );
};
