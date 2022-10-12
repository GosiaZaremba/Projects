import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import { CustomButton } from './acomponents/atoms';

const App: React.FC = () => {
    const onPressButton = () => {
        console.log('click');
    };
    return <CustomButton onPressButton={onPressButton} buttonTitle={'Title'} />;
};

export default App;

// import React, { useState, useEffect } from 'react';
// import { ImageBackground, StatusBar, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { Colors } from './constants/colors';
// import auth from '@react-native-firebase/auth';
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { PetScreen } from './screens/PetScreen';
// import { DrawerNav } from './components/DrawerNav';
// import { EditPetScreen } from './screens/EditPetScreen';
// import { CustomButton } from './acomponents/atoms';

//const Stack = createNativeStackNavigator();

// const App = () => {
//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();

//     function onAuthStateChanged(user) {
//         setUser(user);
//         if (initializing) setInitializing(false);
//     }

//     useEffect(() => {
//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

//         return subscriber; // unsubscribe on unmount
//     }, [user]);

//     const navTheme = {
//         ...DefaultTheme,
//         colors: {
//             ...DefaultTheme.colors,
//             background: 'transparent',
//         },
//     };
//     return (
//         <NavigationContainer theme={navTheme}>
//             <LinearGradient
//                 colors={[Colors.primary.medium, Colors.accent.medium]}
//                 style={styles.rootContainer}
//             >
//                 <ImageBackground
//                     source={require('./assets/bckg.png')}
//                     resizeMode="cover"
//                     style={styles.rootContainer}
//                     imageStyle={styles.backgroundImge}
//                 >
//                     <StatusBar></StatusBar>
//                     <Stack.Navigator
//                         screenOptions={{
//                             headerShown: false,
//                         }}
//                     >
//                         <Stack.Screen name="Nav" component={DrawerNav} />
//                         <Stack.Screen name="PetScreen" component={PetScreen} />
//                         <Stack.Screen
//                             name="EditPetScreen"
//                             component={EditPetScreen}
//                         />
//                     </Stack.Navigator>
//                 </ImageBackground>
//             </LinearGradient>
//         </NavigationContainer>
//     );
// };

// const styles = StyleSheet.create({
//     rootContainer: {
//         flex: 1,
//     },

//     backgroundImge: {
//         opacity: 0.3,
//         resizeMode: 'repeat',
//     },
// });
