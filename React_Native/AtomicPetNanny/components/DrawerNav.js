import React, {useEffect, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {RegisterScreen} from '../screens/RegisterScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {RecoverPasswordScreen} from '../screens/RecoverPasswordScreen';
import {PetListScreen} from '../screens/PetListScreen';
import {AddPetScreen} from '../screens/AddPetScreen';
import auth from '@react-native-firebase/auth';
import {Colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const DrawerNav = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const Drawer = createDrawerNavigator();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  const logOut = () => {
    auth().signOut();
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, [user]);

  if (user)
    return (
      <Drawer.Navigator
        screenOptions={{
          headerTitle: false,
          swipeEnabled: true,
          gestureEnabled: true,
          drawerPosition: 'left',
          headerStyle: {backgroundColor: 'transparent'},
          headerTintColor: Colors.secondary.light,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
          drawerStyle: {
            backgroundColor: Colors.secondary.medium,
            width: 200,
          },
          drawerActiveTintColor: Colors.primary.medium,
          drawerIcon: () => <Icon name={'paw'} size={20} color="black" />,
        }}
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                icon={() => <Icon color={'black'} size={20} name={'paw-off'} />}
                label="Logout"
                onPress={logOut}
              />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen
          name="PetListScreen"
          component={PetListScreen}
          options={{drawerLabel: 'Your Pets', title: 'Your Pets'}}
        />
        <Drawer.Screen
          name="AddPetScreen"
          component={AddPetScreen}
          options={{drawerLabel: 'Add a Pet!', title: 'Add a Pet!'}}
        />
      </Drawer.Navigator>
    );
  else
    return (
      <Drawer.Navigator
        screenOptions={{
          headerTitle: false,
          swipeEnabled: true,
          gestureEnabled: true,
          drawerPosition: 'left',
          headerStyle: {backgroundColor: 'transparent'},
          headerTintColor: Colors.secondary.light,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
          drawerStyle: {
            backgroundColor: Colors.secondary.medium,
            width: 200,
          },
          drawerActiveTintColor: Colors.primary.medium,
          drawerIcon: () => <Icon name={'paw'} size={20} color="black" />,
        }}>
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{drawerLabel: 'Log In', title: 'Log In'}}
        />
        <Drawer.Screen
          name="Register"
          component={RegisterScreen}
          options={{drawerLabel: 'Register', title: 'Register'}}
        />
        <Drawer.Screen
          name="RecoverPassword"
          component={RecoverPasswordScreen}
          options={{drawerLabel: 'Recover Password', title: 'Recover Password'}}
        />
      </Drawer.Navigator>
    );
};
