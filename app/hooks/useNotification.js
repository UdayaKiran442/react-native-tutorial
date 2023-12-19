import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import expoPushTokensApi from "../api/expoPushTokens";

import { useEffect } from "react";

export default useNotification = (notificationListener) => {
  useEffect(() => {
    registorForPushNotification;
    Notifications.addPushTokenListener(notificationListener);
  }, []);
  const registorForPushNotification = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;
      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log(error);
    }
  };
};
