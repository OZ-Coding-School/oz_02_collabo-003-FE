import WebView from 'react-native-webview';

export default function Native() {
  return <WebView source={{ uri: 'http://localhost:5173/' }} style={{ flex: 1 }} />;
}
