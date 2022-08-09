import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Button} from '../components/Button';
import {Logo} from '../components/Logo';
import {Title} from '../components/Title';
import auth from '@react-native-firebase/auth';
import {Dashboard} from './Dashboard';

export const Home = ({navigation}) => {
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const onPressRegister = () => {
    navigation.navigate('Register');
  };
  const onRecoverPassword = () => {
    navigation.navigate('RecoverPassword');
  };

  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => Alert.alert('Bye!', 'You have succesfully logged out.'));
  };
  return (
    <View style={styles.outerContainer}>
      <View>
        <Logo />
        <Title>Please, choose Your next action:</Title>
      </View>

      <View style={styles.innerContainer}>
        <Button onPress={onPressLogin}>Login</Button>
        <Button onPress={onPressRegister}>Register</Button>
        <Button onPress={onRecoverPassword}>Reset password</Button>
        <Button onPress={onSignOut}>Singn out</Button>
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
  innerContainer: {
    width: '100%',
    alignItems: 'stretch',
  },
});
