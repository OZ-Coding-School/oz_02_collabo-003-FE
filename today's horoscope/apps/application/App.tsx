import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, Platform, View, ToastAndroid, Alert } from 'react-native';
import WebView from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
import messaging from '@react-native-firebase/messaging';

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

  useEffect(() => {
    const setupMessaging = async () => {
      const permissionGranted = await requestUserPermission();

      if (permissionGranted) {
        try {
          const token = await messaging().getToken();
          console.log(token);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log('failed token status');
      }

      const initialNotification = await messaging().getInitialNotification();
      if (initialNotification) {
        console.log('Notification caused app to open from quit state', initialNotification.notification);
      }

      messaging().onNotificationOpenedApp(async remoteMessage => {
        console.log('Notification caused app to open from quit state', remoteMessage.notification);
      });

      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background', remoteMessage);
      });

      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert(JSON.stringify(remoteMessage));
      });

      return () => unsubscribe();
    };

    setupMessaging();
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
