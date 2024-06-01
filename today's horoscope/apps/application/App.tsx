import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, Platform, View, ToastAndroid } from 'react-native';
import WebView from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

export default function Native() {
  const webViewRef = useRef<WebView>(null);
  const [isCanGoBack, setIsCanGoBack] = useState(false);
  const [lastBackPressed, setLastBackPressed] = useState(0);
  const [expoPushToken, setExpoPushToken] = useState<string>('');
  const [notification, setNotification] = useState<Notifications.Notification | null>(null);
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

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

  const registerForPushNotificationsAsync = async (setExpoPushToken: (token: string) => void) => {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        alert('푸시 알림 설정을 확인해 주세요.');
        return;
      }

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      setExpoPushToken(token);
    } else {
      alert('기기를 확인할 수 없습니다.');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
      });
    }
  };

  useEffect(() => {
    registerForPushNotificationsAsync(setExpoPushToken);

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

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
