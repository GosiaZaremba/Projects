import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Card} from '../components/Card';
import {Colors} from '../constants/colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {PetFeeding} from '../components/PetScreenComponents/PetFeeding';
import {PetWalks} from '../components/PetScreenComponents/PetWalks';
import {PetPlays} from '../components/PetScreenComponents/PetPlays';
import {PetPills} from '../components/PetScreenComponents/PetPills';
import {PetInfo} from '../components/PetScreenComponents/PetInfo';

export const PetScreen = ({route}) => {
  const [singlePet, setSinglePet] = useState({
    feedingHistory: [],
    playHistory: [],
    walksHistory: [],
    pillsHistory: [],
    name: '',
    breed: '',
    description: '',
    dateOfBirth: '',
  });
  const userId = auth().currentUser.uid;
  const {petId, photoUris, index} = route.params;

  const getPetData = () => {
    firestore()
      .collection(`${userId}`)
      .doc(`${petId}`)
      .onSnapshot(documentSnapshot => {
        const petData = documentSnapshot._data;
        setSinglePet(petData);
      });
  };

  useEffect(() => {
    getPetData();
  }, [petId]);

  return (
    <View style={styles.outerContainer}>
      <Logo />
      <Card>
        <PetInfo
          pet={singlePet}
          photoUris={photoUris}
          index={index}
          petId={petId}
        />
        <PetFeeding userId={userId} petId={petId} />
        <PetWalks userId={userId} petId={petId} />
        <PetPlays userId={userId} petId={petId} />
        <PetPills userId={userId} petId={petId} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    minHeight: 110,
    paddingBottom: 12,
  },
  dataView: {
    flex: 2,
    backgroundColor: Colors.primary.medium,
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
  dataText: {
    color: Colors.secondary.light,
    marginLeft: 15,
    fontSize: 16,
  },
});
