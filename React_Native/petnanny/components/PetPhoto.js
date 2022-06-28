import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors} from '../constants/colors';

export const PetPhoto = ({photoUrl, pickedImage}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={pickedImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    elevation: 5,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.secondary.light,
  },
});
