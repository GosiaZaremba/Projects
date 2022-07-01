import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Title} from '../components/Title';
import {PetList} from '../components/PetList';
import database from '@react-native-firebase/database';
import {AddPetButton} from '../components/AddPetButton';

export const Dashboard = ({user}) => {
  const data = [
    {name: 'Goya', photo: require('../assets/7.jpg')},
    {name: 'Buddy', photo: require('../assets/8.jpg')},
    {name: 'Buddy', photo: require('../assets/8.jpg')},
    {name: 'Buddy', photo: require('../assets/8.jpg')},
  ];

  onPressAddAPet = () => {};
  // const getData = () => {
  //   database()
  //     .ref(`/pets/`)
  //     .once('value')
  //     .then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });
  // };

  return (
    <View style={styles.outerContainer}>
      <View>
        <Logo />
        <View style={styles.titleContainer}>
          <Title>Your Pets:</Title>
          <AddPetButton>Add a Pet!</AddPetButton>
        </View>
      </View>

      {/* {data.map((item) => (
          <PetList
            key={item.name}
            name={item.name}
            photoUrl={item.photo}
          ></PetList>
        ))} */}

      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={itemData => (
          <PetList
            name={itemData.item.name}
            photoUrl={itemData.item.photo}
            keyExtractor={item => item}></PetList>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
  },
  titleContainer: {
    felx: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
