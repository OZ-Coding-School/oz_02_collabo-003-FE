import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, View, ToastAndroid } from 'react-native';
import WebView from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

type WebViewNavigation = {
  url: string;
  title: string;
  loading: boolean;
  canGoBack: boolean;
  canGoForward: boolean;
};

export default function Native() {
  const webViewRef = useRef<WebView>(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const [lastBackPressed, setLastBackPressed] = useState(0);

  SplashScreen.preventAutoHideAsync();

  const onPressHardwareBackButton = () => {
    const now = Date.now();
    if (currentUrl === 'https://today-s-horoscope.vercel.app/') {
      if (now - lastBackPressed <= 2000) {
        BackHandler.exitApp();
      } else {
        ToastAndroid.show('뒤로가기 버튼을 한번 더 누르면 종료됩니다.', ToastAndroid.SHORT);
        setLastBackPressed(now);
      }
      return true;
    } else if (webViewRef.current) {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onPressHardwareBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onPressHardwareBackButton);
    };
  }, [currentUrl, lastBackPressed]);

  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    setCurrentUrl(navState.url);
  };

  const handleLoad = () => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ flex: 1 }}
        source={{ uri: 'https://today-s-horoscope.vercel.app/' }}
        onNavigationStateChange={handleNavigationStateChange}
        ref={webViewRef}
        onLoadEnd={handleLoad}
      />
    </View>
  );
}
