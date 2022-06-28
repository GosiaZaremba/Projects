import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Button} from '../components/Button';
import {Logo} from '../components/Logo';

export const Home = () => {
  return (
    <View style={styles.outerContainer}>
      <View>
        <Logo />
      </View>

      <View style={styles.innerContainer}>
        <Button>Login</Button>
        <Button>Register</Button>
        <Button>Reset password</Button>
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
