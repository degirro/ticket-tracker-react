import {
  Item,
  ItemTitle,
  ItemDesc,
  ItemFooter,
  ItemPriority,
  ItemIssue,
} from "../../utils/styles/workspace/tickets/TicketItemStyled";
import { TicketsDataType } from "../../utils/types/types";

export const UserTicketItem: React.FC<TicketsDataType> = ({
  id,
  title,
  desc,
  issueType,
  priority,
}) => {
  return (
    <Item layoutId={`item-container-${id}`}>
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
