import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, Platform, View, ToastAndroid, Text } from 'react-native';
import WebView from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import Device from 'expo-device';

export interface PushNotificationState {
  notification?: Notifications.Notification;
  expoPushToken?: Notifications.ExpoPushToken;
}
export default function Native() {
  const webViewRef = useRef<WebView>(null);
  const [isCanGoBack, setIsCanGoBack] = useState(false);
  const [lastBackPressed, setLastBackPressed] = useState(0);
  const [expoPushToken, setExpoPushToken] = useState<Notifications.ExpoPushToken | null>();
  const [notification, setNotification] = useState<Notifications.Notification>();

  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  SplashScreen.preventAutoHideAsync();

  const onPressHardwareBackButton = () => {
    const now = Date.now();
    if (webViewRef.current && isCanGoBack) {
      webViewRef.current.goBack();
      return true;
    } else if (now - lastBackPressed <= 2000) {
      BackHandler.exitApp();
      return true;
    } else {
      ToastAndroid.show('뒤로가기 버튼을 한번 더 누르면 종료됩니다.', ToastAndroid.SHORT);
      setLastBackPressed(now);
      return true;
    }
  };

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token');
      }
      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra?.eas?.projectId,
      });

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
      return token;
    } else {
      console.log('Error Please use a physical device');
    }
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current!);
      Notifications.removeNotificationSubscription(responseListener.current!);
    };
  }, []);

  const data = JSON.stringify(notification, undefined, 2);
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onPressHardwareBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onPressHardwareBackButton);
    };
  }, [isCanGoBack, lastBackPressed]);

  const handleLoad = () => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  };

  return Platform.OS === 'web' ? (
    <iframe src="https://today-s-horoscope.vercel.app/" height={'100%'} width={'100%'} />
  ) : (
    <View style={{ flex: 1 }}>
      <Text>Token: {expoPushToken?.data ?? ''}</Text>
      <WebView
        textZoom={100}
        style={{ margin: 0, padding: 0 }}
        ref={webViewRef}
        javaScriptEnabled={true}
        allowsBackForwardNavigationGestures={true}
        source={{ uri: 'https://today-s-horoscope.vercel.app/' }}
        onLoadEnd={handleLoad}
        injectedJavaScript={`
          (function() {
            function wrap(fn) {
              return function wrapper() {
                var res = fn.apply(this, arguments);
                window.ReactNativeWebView.postMessage('navigationStateChange');
                return res;
              }
            }
      
            history.pushState = wrap(history.pushState);
            history.replaceInstance = wrap(history.replaceState);
            window.addEventListener('popstate', function() {
              window.ReactNativeWebView.postMessage('navigationStateChange');
            });
          })();
      
          true;
        `}
        onMessage={({ nativeEvent: state }) => {
          if (state.data === 'navigationStateChange') {
            setIsCanGoBack(state.canGoBack);
          }
        }}
      />
    </View>
  );
}
