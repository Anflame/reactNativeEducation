import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type FullInfoProps = {
  route: {
    params: {
      state: {
        full: string;
        anons: string;
        name: string;
      }
    }
  }
}

export const FullInfo: FC<FullInfoProps> = ({ route: { params: { state: { full, name, anons } } } }) => {
 return (
   <View>
     <Text style={styles.text}> {name}</Text>
     <Text> {full} </Text>
   </View>
 );
}
