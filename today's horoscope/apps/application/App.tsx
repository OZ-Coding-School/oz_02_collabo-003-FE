import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, Platform, View, ToastAndroid } from 'react-native';
import WebView from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
import { Alert } from 'react-native';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

export default function Native() {
  const webViewRef = useRef<WebView>(null);
  const [isCanGoBack, setIsCanGoBack] = useState(false);
  const [lastBackPressed, setLastBackPressed] = useState(0);

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

  //푸시 알림 권한 요청
  const requestUserPermission = async (): Promise<boolean> => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
    return enabled;
  };

  //푸시 메세지 설정
  useEffect(() => {
    //토큰 가져오기
    const getToken = async () => {
      const permissionGranted = await requestUserPermission();

      if (permissionGranted) {
        const token = await messaging().getToken();
        console.log(token);
      } else {
        console.log('Permission not granted');
      }
    };

    getToken();

    //초기 알림 처리 함수
    const handleInitialNotification = async () => {
      const remoteMessage = await messaging().getInitialNotification();
      if (remoteMessage) {
        console.log('Notification caused app to open from quit state:', remoteMessage.notification);
      }
    };

    handleInitialNotification();

    // 백그라운드 상태에서 알림
    const unsubscribeOnNotificationOpenedApp = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('Notification caused app to open from background state:', remoteMessage.notification);
    });

    // 백그라운드 메시지 처리 함수
    const backgroundMessageHandler = async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    };

    messaging().setBackgroundMessageHandler(backgroundMessageHandler);

    // 포그라운드 메시지 처리
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived', JSON.stringify(remoteMessage));
    });

    return () => {
      unsubscribeOnNotificationOpenedApp();
      unsubscribeOnMessage();
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
