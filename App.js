import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, StyleSheet, Text, Platform } from 'react-native';

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.textStyle}>Hello Native</Text>
    //   <View style={styles.box}>
    //     <Text>Hello Native 2</Text>
    //   </View>
    //   <View styles={styles.miniBox}></View>
    //   <View styles={styles.miniBox}></View>
    //   <View styles={styles.miniBox}></View>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View style={[styles.miniBox, styles.firstMiniBox]}></View>
      <View style={[styles.miniBox, styles.secondMiniBox]}></View>
      <View style={[styles.miniBox, styles.thirdMiniBox]}></View>
    </SafeAreaView>
  );
}

const textStyle = {
  backgroundColor: 'red',
  color: 'white'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'baseline',
    alignItems: 'center'
    // justifyContent: 'center',
  },
  box: {
    backgroundColor: 'yellow',
    width: '50%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    left: '25%',
    top: Platform.OS === 'ios' ? 150 : 30,
  },
  textStyle: {
    backgroundColor: 'black',
    color: 'white'
  },
  miniBox: {
    width: 100,
    height: 100
    // flex: 1,
  },
  firstMiniBox: {
    backgroundColor: 'white',
    height: 200,
    alignSelf: 'flex-start'
    // flex: 3,
  },
  secondMiniBox: {
    backgroundColor: 'black',
    // flex: 2,
  },
  thirdMiniBox: {
    backgroundColor: 'blue'
  }
});
