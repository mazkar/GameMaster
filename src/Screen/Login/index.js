import React, {useState} from 'react';
import {Image, Input} from 'react-native-elements';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from './style';

//redux
import {useDispatch, useSelector} from 'react-redux';

//action
import {postLogin} from './Reducer/LoginAction';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(postLogin({password, username}));
  };

  const navToLogin = () => {
    props.navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={Styles.mainContainer}>
      <View style={Styles.fiContainer}></View>

      <View>
        <Input
          placeholder="Username"
          style={Styles.input}
          onChangeText={text => {
            setUsername(text);
          }}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          style={Styles.input}
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>
      <View>
        <View style={Styles.passwordContainer}>
          <Text style={Styles.password}>Forgot your password?</Text>
        </View>
        <View style={Styles.loginContainer}>
          <TouchableOpacity style={Styles.button} onPress={handleLogin}>
            <Text style={Styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={navToLogin}>
            <Text style={Styles.signUp}>Don't have an account? Sign Up?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
