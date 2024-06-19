import * as SplashScreen from 'expo-splash-screen';

export default function useSplash() {
  SplashScreen.preventAutoHideAsync();

  const handleLoad = () => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  };

  return handleLoad;
}
