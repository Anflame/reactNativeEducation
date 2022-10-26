import React, { FC, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './styles';

type FormProps = {
  handlePress: (text: string) => void;
}

export const Form: FC<FormProps> = ({ handlePress }) => {

  const [text, setText] = useState<string>();

  return (
    <View>
      <TextInput style={styles.input} onChangeText={(text) => setText(text)} />
      <Button title='Создать задачу' onPress={() => handlePress(text)} color='grey' />
    </View>
  );
}
