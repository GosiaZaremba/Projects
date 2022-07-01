import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Button} from '../components/Button';
import {Logo} from '../components/Logo';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
  return (
    <View style={styles.outerContainer}>
      <View>
        <Logo />
      </View>

      <View style={styles.innerContainer}>
        <Button onPress={onPressLogin}>Login</Button>
        <Button onPress={onPressRegister}>Register</Button>
        <Button onPress={onRecoverPassword}>Reset password</Button>
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
