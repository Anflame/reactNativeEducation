import React, { FC, useCallback, useState } from 'react';
import { SafeAreaView, Text, StatusBar, Button, TouchableOpacity, FlatList, Image, Modal, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import type { RootStackParamList } from '../src/comon-types';
import { Ionicons } from '@expo/vector-icons'; 
import { styles } from './styles';
import { Form } from '../src/components/Form/Form';

type NavigateProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Main: FC<NavigateProps> = ({ navigation }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [news, setNews] = useState([
    {
      name: 'Google',
      anons: 'Google!!',
      full: 'Google is cool',
      img: 'https://avatars.mds.yandex.net/i?id=0eaa142d7202ac9bbd26ac279e7ae159_l-4898876-images-thumbs&n=27&h=384&w=480'
    },
    {
      name: 'Apple',
      anons: 'Apple!!',
      full: 'Apple is cool',
      img: 'http://pics.livejournal.com/anchiktigra/pic/001dgz1h',
    },
    {
      name: 'Facebook',
      anons: 'Facebook!!',
      full: 'Facebook is cool',
      img: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
    },

  ])
  
  const handlePress = () => {

  }

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);


  return (
    <SafeAreaView style={styles.main} onLayout={onLayoutRootView}>
      <Modal visible={isShowModal}>
        <View style={styles.main}>
          <Ionicons name="close" size={24} color="black" style={{ textAlign: 'center' }} onPress={() => setIsShowModal(false)} />
          <Text style={styles.text}>Добавление статей</Text>
          <Form />
        </View>
      </Modal>
      <Ionicons name="add-circle" size={24} color="black" style={{ textAlign: 'center' }} onPress={() => setIsShowModal(true)} />
      <Text style={styles.text}>Главная страница</Text>
      <FlatList data={news} renderItem={({ item: {name, anons, full, img}, item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('FullInfo', { state: item,
        })}>
          <Image source={{
            width: 200,
            height: 200,
            uri: img
          }} />
          <Text>{name}</Text>
          <Text>{anons}</Text>
        </TouchableOpacity>
      )} />
      <StatusBar barStyle='default'/>
    </SafeAreaView>
 );
}

export default Main;
