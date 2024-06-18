import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

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

        const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/push/token/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
            device_os: Platform.OS,
          }),
        });
        const data = await res.json();
        console.log('data:', data);
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
