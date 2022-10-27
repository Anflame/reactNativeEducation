import React, { FC, useCallback, useState } from 'react';
import { SafeAreaView, Text, StatusBar, Button, TouchableOpacity, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import type { RootStackParamList } from '../src/comon-types';
import { styles } from './styles';

type NavigateProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Main: FC<NavigateProps> = ({ navigation }) => {
  const [news, setNews] = useState([
    {
      name: 'Google',
      anons: 'Google!!',
      full: 'Google is cool'
    },
    {
      name: 'Apple',
      anons: 'Apple!!',
      full: 'Apple is cool'
    },
    {
      name: 'Facebook',
      anons: 'Facebook!!',
      full: 'Facebook is cool'
    },

  ])
  
  const handlePress = () => {

  }

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);


  return (
    <SafeAreaView style={styles.main} onLayout={onLayoutRootView}>
      <Text style={styles.text}>Главная страница</Text>
      <FlatList data={news} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('FullInfo', { state: item,
          })}>
          <Text>{item.name}</Text>
          <Text>{item.anons}</Text>
        </TouchableOpacity>
      )} />
      <StatusBar barStyle='default'/>
    </SafeAreaView>
 );
}

export default Main;
