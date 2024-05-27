import React, { useEffect, useRef } from 'react';
import { BackHandler, Platform, View } from 'react-native';
import WebView from 'react-native-webview';
import * as SplashScreen from 'expo-splash-screen';

export default function Native() {
  const webViewRef = useRef<WebView>(null);

  SplashScreen.preventAutoHideAsync();

  const onAndroidBackPress = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
      };
    }
  }, []);

  const handleLoad = () => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 850);
  };

  return Platform.OS === 'web' ? (
    <iframe src="https://today-s-horoscope.vercel.app/" height={'100%'} width={'100%'} />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        style={{ margin: 0, padding: 0 }}
        ref={webViewRef}
        javaScriptEnabled={true}
        allowsBackForwardNavigationGestures={true}
        source={{ uri: 'https://today-s-horoscope.vercel.app/' }}
        onLoadEnd={handleLoad}
      />
    </View>
  );
}
