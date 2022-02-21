import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 25,
    fontWeight: 'bold',
    color: '#0040F0',
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  genderLabel: {
    fontSize: 18,
    paddingHorizontal: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 8,

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  radioLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  circle: {
    height: 28,
    width: 28,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: 'black'
  },
  result: {
    fontSize: 24,
    marginTop: 25,
    marginBottom: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#0040F0'
  },
  zero: {
    fontSize: 24,
    marginTop: 25,
    marginBottom: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'green'
  },
  low: {
    fontSize: 24,
    marginTop: 25,
    marginBottom: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'yellow'
  },
  high: {
    fontSize: 24,
    marginTop: 25,
    marginBottom: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'red'
  }
})