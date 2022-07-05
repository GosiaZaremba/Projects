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
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [userMessage, setUserMessage] = useState('');

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setUserMessage(user ? user.email : 'Stranger');
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  const Stack = createNativeStackNavigator();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
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
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerStyle: {backgroundColor: 'transparent'},
                headerTintColor: Colors.secondary.light,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
                headerShadowVisible: false,
              }}>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{title: `Welcome, ${userMessage}!`}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{title: `${userMessage} `}}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{title: `${userMessage}`}}
              />
              <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{title: `${userMessage}`}}
              />
              <Stack.Screen
                name="PetPanel"
                component={PetPanel}
                options={{title: `${userMessage}`}}
              />
              <Stack.Screen
                name="AddPet"
                component={AddPet}
                options={{title: `${userMessage}`}}
              />
              <Stack.Screen
                name="RecoverPassword"
                component={RecoverPassword}
                options={{title: `${userMessage}`}}
              />
            </Stack.Navigator>
            {/* {!user ? <Register /> : <Dashboard user={user} />} */}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </NavigationContainer>
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
