import { useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  getUserNotifications,
  postRemoveNotification,
  updateUserStatusConfirm,
  updateUserStatusDecline,
} from "../../utils/api";
import { NoDataMessage } from "../../utils/styles/global/MessageStyled";
import {
  DeleteNotificationButton,
  NotificationText,
  NotificationTextContainer,
  SidebarNotificationsContainer,
  TeamConfirmButton,
  TeamDeclineButton,
  WorkspaceTeamButtonContainer,
} from "../../utils/styles/sidebar/SidebarNotificationsStyled";
import { notificationsType } from "../../utils/types/types";
import { showNotifVariants } from "../../utils/variants/variants";

type props = {
  showNotif: boolean;
  isLoading: boolean;
  data: any;
};

export const SidebarNotifications: React.FC<props> = ({
  showNotif,
  isLoading,
  data,
}) => {
  const queryClient = useQueryClient();

  const handleUpdateUserStatusConfirm = async (
    e: React.MouseEvent<HTMLButtonElement>,
    workspaceId: number
  ) => {
    e.stopPropagation();
    try {
      await updateUserStatusConfirm(workspaceId);
      queryClient.invalidateQueries("userWorkspacesData");
      toast.clearWaitingQueue();
      toast("Workspace Added!", { type: "success", icon: true });
    } catch (err: any) {
      console.log(err.response.message);
    }
  };

  const handleUpdateUserStatusDecline = async (
    e: React.MouseEvent<HTMLButtonElement>,
    workspaceId: number
  ) => {
    e.stopPropagation();
    try {
      await updateUserStatusDecline(workspaceId);
      queryClient.invalidateQueries("userWorkspacesData");
    } catch (err: any) {
      console.log(err.response.message);
    }
  };

  const handleRemoveNotif = (e: React.MouseEvent<SVGElement>, id: number) => {
    e.stopPropagation();
    postRemoveNotification({ notifId: id });
  };

  return (
    <SidebarNotificationsContainer
      initial={{ display: "none" }}
      animate={showNotif ? "open" : "closed"}
      variants={showNotifVariants}
      transition={{ duration: 0.15 }}
    >
      {!isLoading && (
        <>
          {data.length > 0 ? (
            data?.map((item: notificationsType, i: number) => (
              <NotificationTextContainer>
                <NotificationText key={item.id}>
                  {item.message}
                </NotificationText>
                {item.type === "team" ? (
                  <WorkspaceTeamButtonContainer>
                    <TeamConfirmButton
                      onClick={(e) =>
                        handleUpdateUserStatusConfirm(e, item.workspace.id)
                      }
                    >
                      Accept
                    </TeamConfirmButton>
                    <TeamDeclineButton
                      onClick={(e) =>
                        handleUpdateUserStatusDecline(e, item.workspace.id)
                      }
                    >
                      Decline
                    </TeamDeclineButton>
                  </WorkspaceTeamButtonContainer>
                ) : (
                  <DeleteNotificationButton
                    onClick={(e) => handleRemoveNotif(e, item.id)}
                  />
                )}
              </NotificationTextContainer>
            ))
          ) : (
            <NoDataMessage>No new notifications.</NoDataMessage>
          )}
        </>
      )}
    </SidebarNotificationsContainer>
  );
};
