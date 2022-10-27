import React, { FC, useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './pages/Main';
import Contacts from './pages/Contacts';
import { FullInfo } from './pages/FullInfo';
const Stack = createStackNavigator();

const Navigation = ({ appIsReady }) => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Main} options={{ title: 'Главная' }} initialParams={appIsReady} />
        <Stack.Screen name='FullInfo' component={FullInfo} options={{ title: 'Полная информация' }}/>
        <Stack.Screen name='Contacts' component={Contacts} options={{ title: 'О Нас' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;
