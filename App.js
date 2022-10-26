import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, Alert, Image, TouchableWithoutFeedback } from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log('press');
  }

  const handleButtonPress = () => Alert.alert('title', 'myMessage', [
    { text: 'Ok', onPress: handlePress},
    { text: 'Cancel' }
  ]);
  const handleButtonPress2 = () => Alert.prompt('title', 'myMessage', text => console.log(text));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={handlePress}>dsdsds{'\n'}sdada</Text>
      <Button title='Нажми на меня' onPress={handleButtonPress} color='grey' />
      <Button title='Prompt' onPress={handleButtonPress2} />
      <TouchableWithoutFeedback onPress={handleButtonPress}>
        <Image blurRadius={15} source={{
          width: 200,
          height: 150,
          uri: 'https://img3.akspic.ru/previews/9/6/1/9/6/169169/169169-ty_zasluzhivaesh_vsyacheskogo_schastya-schaste-strah-voda-polety_na_vozdushnom_share-500x.jpg'
        }}/>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'red',
    backgroundColor: 'black',
    textAlign: 'center',
  }
});
