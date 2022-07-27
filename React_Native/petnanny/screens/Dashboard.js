import React, {useEffect, useState} from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Title} from '../components/Title';
import {PetList} from '../components/PetList';
import {AddPetButton} from '../components/AddPetButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const Dashboard = ({navigation}) => {
  const [pets, setPets] = useState([]);
  const [photoPath, setPhotoPath] = useState([]);
  const [photoUrls, setPhotoUrls] = useState(null);
  const userId = auth().currentUser.uid;

  useEffect(() => {
    const petData = firestore()
      .collection(`${userId}`)
      .onSnapshot(querySnapshot => {
        console.log(querySnapshot);
        const petData = querySnapshot._docs.map(item => ({
          id: item._ref.id,
          data: item._data,
        }));
        setPets(petData);
      });

    // Stop listening for updates when no longer required
    return () => petData();
  }, []);

  // const getPets = async () => {
  //   const petList = await firestore().collection(`${userId}`).get();
  //   const getPetData = petList._docs.map(item => ({
  //     id: item._ref.id,
  //     data: item._data,
  //   }));

  //   setPets(getPetData);
  //   console.log(pets);
  // };

  // const getUrl = async () => {
  //   const url = await storage()
  //     .ref(`${userId}/${pets[0].id}/petAvatar`)
  //     .getDownloadURL();
  //   setPhotoUrls(url);
  //   console.log(photoUrls);
  // };

  // useEffect(() => {
  //   getPets();
  //   getUrl();
  // }, []);

  onPressAddAPet = () => {
    navigation.navigate('AddPet');
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

// const getUrl = async () => {
// const paths = pets.map(item => item.data.petPhotoPath);
// setPhotoPath([paths]);

// const urls = await storage().ref(photoPath[0]).getDownloadURL();
// setPhotoUrls(urls);
// const storageResult = await storage().ref(`${userId}`).listAll();
// const urls = await storageResult._prefixes.map(storageReference =>
//   storageReference._path.getDownloadURL(),
// );

// setPhotoUrls(urls);
// };
