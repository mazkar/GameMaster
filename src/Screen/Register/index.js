import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './style';

//action
import {postRegister} from './Redux/RegisterAction';

export default function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(postRegister({email, password, username}));
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.content}>
        <Input
          placeholder="email"
          style={styles.input}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <Input
          placeholder="Username"
          style={styles.input}
          onChangeText={text => {
            setUsername(text);
          }}
        />
        <Input
          placeholder="Pasword"
          style={styles.input}
          secureTextEntry
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>

      <View style={styles.signUpContainer}>
        <TouchableOpacity style={styles.buttonUp} onPress={handleRegister}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text style={styles.already}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
