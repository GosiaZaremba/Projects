import React, {useEffect, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Register} from './Register';
import {Login} from './Login';
import {RecoverPassword} from './RecoverPassword';
import {Dashboard} from './Dashboard';
import {AddPet} from './AddPet';
import auth from '@react-native-firebase/auth';
import {Colors} from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const DrawerNav = ({navigation}) => {
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
          name="Dashboard"
          component={Dashboard}
          options={{drawerLabel: 'Your Pets', title: 'Your Pets'}}
        />
        <Drawer.Screen
          name="AddPet"
          component={AddPet}
          options={{drawerLabel: 'Add a Pet!', title: 'Add a Pet!'}}
        />
        {/* <Drawer.Screen name="Log out" component={LogOutButton} /> */}
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
          component={Login}
          options={{drawerLabel: 'Log In', title: 'Log In'}}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{drawerLabel: 'Register', title: 'Register'}}
        />
        <Drawer.Screen
          name="RecoverPassword"
          component={RecoverPassword}
          options={{drawerLabel: 'Recover Password', title: 'Recover Password'}}
        />
      </Drawer.Navigator>
    );
};
