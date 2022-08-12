import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from './Button';
import auth from '@react-native-firebase/auth';

export const LogOutButton = ({navigation}) => {
  const logOut = () => {
    auth()
      .signOut()
      .then(() => {});
  };

  return (
    <View style={styles.rootContainer}>
      <Button onPress={logOut}>Change account</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  rootContainer: {
    height: 200,
    width: 200,
  },
});
