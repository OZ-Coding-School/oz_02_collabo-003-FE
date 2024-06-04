import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, View, ToastAndroid, Text } from 'react-native';
import WebView from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';
import NetInfo from '@react-native-community/netinfo';

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
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

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
      {isConnected ? (
        <WebView
          style={{ flex: 1 }}
          textZoom={100}
          source={{ uri: 'https://today-s-horoscope.vercel.app/' }}
          onNavigationStateChange={handleNavigationStateChange}
          ref={webViewRef}
          onLoadEnd={handleLoad}
        />
      ) : (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#191a18',
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
            }}>
            <Text style={{ fontSize: 18, fontWeight: '500', color: '#d3d3d3' }}>인터넷 연결</Text>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#838f90' }}>
              오프라인 상태입니다. 인터넷 연결을 확인하세요.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
