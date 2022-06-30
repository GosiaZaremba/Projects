/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
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
import {Dashboard} from './screens/Dashboard';
import {Home} from './screens/Home';
import {Login} from './screens/Login';
import {PetPanel} from './screens/PetPanel';
import {RecoverPassword} from './screens/RecoverPassword';
import {Register} from './screens/Register';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from './constants/colors';
import auth from '@react-native-firebase/auth';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

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
          {!user ? <Register /> : <Dashboard />}
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
