import { StatusBar } from 'expo-status-bar';
import { FC, useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, Platform, Button } from 'react-native';
import { Form } from './src/components/Form/Form';
import Header from './src/components/Header';
import List from './src/components/List';



const App: FC = () => {
  const [list, setList] = useState([
    {
      id: '1',
      title: 'Купить молоко',
      done: false,
    },
    {
      id: '2',
      title: 'Приготовить суп',
      done: false,
    },
    {
      id: '3',
      title: 'Погулять с собакой',
      done: false,
    }
  ]);

  const handlePress = (text: string) => {
    setList((list) => [...list, {
      id: Math.random().toString(36).substring(7),
      title: text,
      done: false,
    }]);
  }

  const deleteHandler = (id: string) => {
    setList(list.filter(el => el.id !== id));
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Form handlePress={handlePress} />
      <List list={list} deleteHandler={deleteHandler} />
      <StatusBar style='auto' />
    </View>
  );
}

export default App;