import React from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Colors} from '../constants/colors';
import {Button} from '../components/Button';
import {useState} from 'react';
import {Title} from '../components/Title';

export const Login = () => {
  const [emailAddress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = enteredText => {
    setEmailAdress(enteredText);
  };
  const passwordHandler = enteredText => {
    setPassword(enteredText);
  };

  const onPressHandler = () => {
    console.log('click', emailAddress, password);
    setEmailAdress('');
    setPassword('');
  };

  return (
    <View style={styles.outerContainer}>
      <Logo />
      <View>
        <Title>Please Log In</Title>
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
        <Button onPress={onPressHandler}>Login</Button>
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
