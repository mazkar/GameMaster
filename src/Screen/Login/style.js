import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

export const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: ms(4),
    paddingVertical: ms(64),
  },
  fiContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    marginBottom: ms(10),
    height: ms(120),
    width: ms(120),
  },
  whiteText: {
    color: 'white',
    marginBottom: ms(65),
    fontFamily: 'robboto',
  },
  input: {
    paddingTop: ms(8),
    color: 'white',
  },
  passwordContainer: {
    paddingBottom: ms(20),
    alignItems: 'flex-end',
    paddingRight: ms(12),
  },
  password: {
    color: 'white',
  },
  button: {
    backgroundColor: '#2154BC',
    paddingTop: ms(4),
    paddingVertical: ms(14),
    paddingHorizontal: ms(10),
    borderRadius: ms(20),
    alignItems: 'center',
    paddingBottom: ms(6),
    width: ms(120),
    height: ms(44),
    justifyContent: 'center',
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
  loginContainer: {
    alignItems: 'center',
    paddingBottom: ms(20),
  },
  signUp: {
    color: 'white',
    alignSelf: 'center',
  },
});
