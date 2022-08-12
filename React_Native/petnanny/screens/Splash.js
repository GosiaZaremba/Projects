import React from 'react';
import {Logo} from '../components/Logo';
import auth from '@react-native-firebase/auth';

export const Splash = ({navigation}) => {
  const userId = auth().currentUser;

  userId ? navigation.navigate('Dashboard') : navigation.navigate('Home');

  return <Logo></Logo>;
};
