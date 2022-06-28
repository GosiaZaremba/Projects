/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AddPet} from './screens/AddPet';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from './constants/colors';

const App = () => {
  // const user = async () => {
  //   const userDocs = await firestore()
  //     .collection('Users')
  //     .doc('TUr8hAdC51oxS8qZGTdi')
  //     .get();
  //   console.log(userDocs);
  // };
  // user();

  return (
    <LinearGradient
      colors={[Colors.primary.medium, Colors.accent.dark]}
      style={styles.rootContainer}>
      <ImageBackground
        source={require('./assets/bckg.png')}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImge}>
        <SafeAreaView style={styles.rootContainer}>
          <StatusBar></StatusBar>
          <AddPet />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  backgroundImge: {
    opacity: 0.3,
  },
});
export default App;
