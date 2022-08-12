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
import {LogOutButton} from '../components/LogOutButton';
import {Colors} from '../constants/colors';

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

  if (!user)
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
        }}>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="RecoverPassword" component={RecoverPassword} />
      </Drawer.Navigator>
    );
  else
    return (
      <Drawer.Navigator
        screenOptions={{
          swipeEnabled: true,
          gestureEnabled: true,
          drawerPosition: 'left',
        }}
        drawerContent={props => {
          return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem label="Logout" onPress={logOut} />
            </DrawerContentScrollView>
          );
        }}>
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{drawerLabel: 'Your Pets'}}
        />
        <Drawer.Screen
          name="AddPet"
          component={AddPet}
          options={{drawerLabel: 'Add a Pet!'}}
        />
        {/* <Drawer.Screen name="Log out" component={LogOutButton} /> */}
      </Drawer.Navigator>
    );
};
