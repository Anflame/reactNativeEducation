import { Platform, StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    minHeight: 100,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
});