import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import * as Notifications from 'expo-notifications';

export default function useNotification() {
  const requestUserPermission = async () => {
    const settings = await Notifications.requestPermissionsAsync();
    const enabled = settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', settings);
    }

    return enabled;
  };

  const setupNotificationHandler = async () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  };

  useEffect(() => {
    const clearAllNotifications = async () => {
      await Notifications.dismissAllNotificationsAsync();
      console.log('All notifications dismissed');
    };

    (async () => {
      await setupNotificationHandler();

      const permissionGranted = await requestUserPermission();
      if (permissionGranted) {
        const token = await messaging().getToken();
        console.log(token);
      } else {
        console.log('Permission not granted');
      }

      await clearAllNotifications();

      const initialNotification = await messaging().getInitialNotification();
      if (initialNotification) {
        console.log('Notification caused app to open from quit state:', initialNotification.notification);
      }

      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log('Notification caused app to open from background state:', remoteMessage.notification);
      });

      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      });

      const unsubscribe = messaging().onMessage(async remoteMessage => {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: remoteMessage.notification?.title,
            body: remoteMessage.notification?.body,
            data: remoteMessage.data,
          },
          trigger: null,
        });
      });

      return () => unsubscribe();
    })();
  }, []);
}
