import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';
import useHardwareBack from './hooks/useHardwareBack';
import useSplash from './hooks/useSplash';
import useIsConnected from './hooks/useIsConnected';

const INJECTEDJAVASCRIPT = `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `;

export default function Native() {
  const webViewRef = useRef<WebView>(null);
  const handleNavigationStateChange = useHardwareBack(webViewRef);
  const handleLoad = useSplash();
  const isConnected = useIsConnected();

  return (
    <View style={{ flex: 1 }}>
      {isConnected ? (
        <WebView
          style={{ flex: 1 }}
          textZoom={100}
          source={{
            uri: 'https://today-s-horoscope.vercel.app/',
          }}
          injectedJavaScript={INJECTEDJAVASCRIPT}
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
