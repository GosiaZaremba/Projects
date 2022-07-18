import React, {useEffect, useState} from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Title} from '../components/Title';
import {PetList} from '../components/PetList';
import database from '@react-native-firebase/database';
import {AddPetButton} from '../components/AddPetButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const Dashboard = ({navigation}) => {
  const [pets, setPets] = useState([]);
  const user = auth().currentUser;
  const userId = user.uid;

  const data = [
    {name: 'Goya', photo: require('../assets/7.jpg')},
    {name: 'Buddy', photo: require('../assets/8.jpg')},
    {name: 'Buddy', photo: require('../assets/8.jpg')},
    {name: 'Buddy', photo: require('../assets/8.jpg')},
  ];

  const getPets = async () => {
    const petList = await firestore().collection(`${userId}`).get();
    const getPetData = petList._docs.map(item => ({
      id: item._ref.id,
      data: item._data,
    }));

    setPets(getPetData);
  };

  useEffect(() => {
    getPets();
  }, []);
  onPressAddAPet = () => {
    navigation.navigate('AddPet');
    console.log(pets);
  };

  return (
    <View style={styles.outerContainer}>
      <View>
        <Logo />
        <View style={styles.titleContainer}>
          <Title>Your Pets:</Title>
          <AddPetButton onPress={onPressAddAPet}>Add a Pet!</AddPetButton>
        </View>
      </View>
      {/* 
      {data.map(item => (
        <PetList
          key={item.name}
          name={item.name}
          photoUrl={item.photo}></PetList>
      ))} */}

      <FlatList
        style={styles.listContainer}
        data={pets}
        renderItem={itemData => (
          <PetList
            name={itemData.item.data.name}
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

// setPets([
//   {
//     id: petList._docs[0]._ref.id,
//     name: petList._docs[0]._data.name,
//     breed: petList._docs[0]._data.breed,
//     dateOfBirth: petList._docs[0]._data.dateOfBirth,
//     description: petList._docs[0]._data.description,
//   },
// ]);
