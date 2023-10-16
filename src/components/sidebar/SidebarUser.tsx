import { useContext, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getUserNotifications } from "../../utils/api";
import { AuthContext } from "../../utils/context/AuthContext";
import {
  SidebarUserContainer,
  SidebarUsername,
  SidebarNotificationsIcon,
  SidebarNotificationsIconWrapper,
  SidbarNotificationsAlert,
} from "../../utils/styles/sidebar/SidebarUserStyled";
import { SidebarNotifications } from "./SidebarNotifications";

export const SidebarUser = () => {
  const { user } = useContext(AuthContext);
  const [showNotif, setShowNotif] = useState<boolean>(false);

  const getNotificationsData = async () => {
    try {
      const res: any = await getUserNotifications();
      return res.data;
    } catch (err: any) {
      console.log(err.response.message);
    }
  };

  const { isLoading, data } = useQuery(
    ["notificationsData"],
    getNotificationsData
  );

  return (
    <SidebarUserContainer>
      <SidebarUsername>{user?.username}</SidebarUsername>
      <SidebarNotificationsIconWrapper
        className={showNotif ? "active" : undefined}
        whileTap={{ scale: 0.8 }}
        onClick={() => setShowNotif(!showNotif)}
      >
        {data && data.length > 0 && <SidbarNotificationsAlert />}
        <SidebarNotificationsIcon />
        <SidebarNotifications
          isLoading={isLoading}
          data={data}
          showNotif={showNotif}
        />
      </SidebarNotificationsIconWrapper>
    </SidebarUserContainer>
  );
};
