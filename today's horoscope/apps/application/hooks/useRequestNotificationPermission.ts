import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

export default function requestNotificationPermission() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  const requestNotificationPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      Notifications.requestPermissionsAsync();
    }
  };
}
