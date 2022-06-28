import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from '../constants/colors';
import {PetPhoto} from './PetPhoto';

export const PetInfo = () => {
  return (
    <View style={styles.petContainer}>
      <PetPhoto photoUrl={require('../assets/7.jpg')} />
      <View style={styles.petData}>
        <Text style={styles.petName}>Goya</Text>
        <Text style={styles.petOtherInfo}>French Bulldog</Text>
        <Text style={styles.petOtherInfo}>29.11.2010</Text>
        <Text style={styles.petOtherInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mollis ac nisi vitae feugiat. Ut non erat vestibulum, dictum nulla ac,
          acc.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  petContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
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
