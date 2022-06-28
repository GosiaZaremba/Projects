import React from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Colors} from '../constants/colors';
import {Button} from '../components/Button';
import {useState} from 'react';
import {Title} from '../components/Title';

export const RecoverPassword = () => {
  const [emailAddress, setEmailAdress] = useState('');

  const emailHandler = enteredText => {
    setEmailAdress(enteredText);
  };
  const onPressHandler = () => {
    console.log('click', emailAddress);
    setEmailAdress('');
  };

  return (
    <View style={styles.outerContainer}>
      <Logo />
      <View>
        <Title>Please enter Your email.</Title>
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
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressHandler}>Recover password</Button>
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
