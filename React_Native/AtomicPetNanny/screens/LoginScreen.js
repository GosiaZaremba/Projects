import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Colors} from '../constants/colors';
import {Button} from '../components/buttons/Button';
import auth from '@react-native-firebase/auth';

export const LoginScreen = () => {
  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = enteredText => {
    setEmailAdress(enteredText);
  };
  const passwordHandler = enteredText => {
    setPassword(enteredText);
  };

  const onPressHandler = () => {
    auth()
      .signInWithEmailAndPassword(emailAdress, password)
      .then(() => {
        setEmailAdress('');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Invalid password!', 'Please, try again.');
        }

        if (error.code === 'auth/wrong-email') {
          Alert.alert('Invalid email!', 'Please, try again.');
        }

        console.error(error);
      });
  };
  return (
    <View style={styles.outerContainer}>
      <Logo />
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email adress"
          autoCorrect={false}
          spellCheck={false}
          textContentType={'emailAdress'}
          autoCapitalize="none"
          value={emailAdress}
          onChangeText={emailHandler}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          autoCorrect={false}
          secureTextEntry={true}
          spellCheck={false}
          textContentType={'password'}
          minLength={8}
          autoCapitalize="none"
          value={password}
          onChangeText={passwordHandler}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressHandler}>Login</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'stretch',
  },
  inputs: {
    backgroundColor: Colors.secondary.light,
    marginTop: 10,
    padding: 11,
    borderRadius: 25,
  },
  buttonContainer: {
    width: '100%',
  },
});
