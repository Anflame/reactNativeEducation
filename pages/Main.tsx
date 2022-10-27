import React, { FC, useCallback } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { styles } from './styles';

type MainProps = {
  appIsReady: boolean;
}

export const Main: FC<MainProps> = ({ appIsReady }) => {

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return (
    <SafeAreaView style={styles.main} onLayout={onLayoutRootView}>
      <Text style={styles.text}>Главная страница</Text>
      <StatusBar barStyle='default'/>
    </SafeAreaView>
 );
}
