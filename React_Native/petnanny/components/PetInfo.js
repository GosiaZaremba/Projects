import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import {PetPhoto} from './PetPhoto';

export const PetInfo = ({pet, photoUris, index}) => {
  const petInfo = pet;
  return (
    <View style={styles.petContainer}>
      <PetPhoto photoUrl={photoUris[index]} />
      <View style={styles.petData}>
        <Text style={styles.petName}>{petInfo.name}</Text>
        <Text style={styles.petOtherInfo}>{petInfo.breed}</Text>
        <Text style={styles.petOtherInfo}>{petInfo.dateOfBirth}</Text>
        <Text style={styles.petOtherInfo}>{petInfo.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  petContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 7,
  },
  petData: {
    flex: 2,
  },
  petName: {
    color: Colors.secondary.light,
    fontSize: 30,
  },
  petOtherInfo: {
    color: Colors.secondary.light,
    fontSize: 14,
  },
});
