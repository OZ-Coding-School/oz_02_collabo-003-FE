import React from 'react';
import { useEffect, useRef } from 'react';
import { BackHandler, Platform, View } from 'react-native';
import WebView from 'react-native-webview';

export default function Native() {
  const webViewRef = useRef(null);
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

  return Platform.OS === 'web' ? (
    <iframe src="https://today-s-horoscope.vercel.app/" height={'100%'} width={'100%'} />
  ) : (
    <View style={{ flex: 1 }}>
      <WebView
        androidCleartextTraffic={true}
        ref={webViewRef}
        javaScriptEnabled={true}
        allowsbackforwardnavigationgestures={true}
        source={{ uri: 'https://today-s-horoscope.vercel.app/' }}
        style={{ marginTop: 22, flex: 1 }}
      />
    </View>
  );
}
