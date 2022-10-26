import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

export const Header = () => {
 return (
   <SafeAreaView style={styles.header}>
     <Text style={styles.text}>Hello</Text>
   </SafeAreaView>
 );
}
