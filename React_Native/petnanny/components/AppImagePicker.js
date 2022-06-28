import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors} from '../constants/colors';
import {Button} from './Button';

export const AppImagePicker = ({getImage, pickedImage}) => {
  return (
    <View styles={styles.outerContainer}>
      {pickedImage ? (
        <View styles={styles.imageContainer}>
          <Image style={styles.imagePreview} source={{uri: pickedImage}} />
          <Button onPress={getImage}>Change photo</Button>
        </View>
      ) : (
        <Button onPress={getImage}>Add photo</Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    padding: 15,
  },
  imageContainer: {
    flex: 1,
    width: 100,
    height: 100,
    elevation: 5,
  },
  imagePreview: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.secondary.light,
    marginTop: 15,
  },
});
