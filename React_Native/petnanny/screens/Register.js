import React from 'react';
import {Alert, StyleSheet, TextInput, View, Text} from 'react-native';
import {Logo} from '../components/Logo';
import {Colors} from '../constants/colors';
import {Button} from '../components/Button';
import {useState} from 'react';
import {Title} from '../components/Title';

export const Register = () => {
  const [emailAddress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = enteredText => {
    setEmailAdress(enteredText);
  };
  const passwordHandler = enteredText => {
    setPassword(enteredText);
  };

  const onPressHandler = () => {
    if (
      password.match(/[a-z]/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[0-9]/g) &&
      password.match(/[^a-zA-Z\d]/g) &&
      password.length >= 8
    ) {
      console.log('click', emailAddress, password);
      setEmailAdress('');
      setPassword('');
    } else {
      Alert.alert(
        'Invalid password!',
        'The password should contain at least 8 characters, including at least one uppercase letter and one lowercase letter, one special character, and one number.',
        [{text: 'OK', style: 'destructive', onPress: setPassword('')}],
      );
    }
  };

  return (
    <View style={styles.outerContainer}>
      <Logo />
      <View>
        <Title>Please register Your account!</Title>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email adress"
          autoCorrect={false}
          spellCheck={false}
          textContentType={'emailAddress'}
          autoCapitalize="none"
          value={emailAddress}
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
        <Button onPress={onPressHandler}>Register</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 30,
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
    padding: 8,
    borderRadius: 25,
  },
  buttonContainer: {
    width: '100%',
  },
});
