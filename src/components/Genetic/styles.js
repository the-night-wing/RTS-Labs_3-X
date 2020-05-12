import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center'
  },
  output: {
    height: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginRight: 20
  },
  card: {
    padding: 10
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    fontSize: 18,
    width: 200,
    height: 50,
    borderColor: 'black',
    borderWidth: 1
  }
});
