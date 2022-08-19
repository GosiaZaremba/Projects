import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors} from '../constants/colors';
import {Button} from './Button';

export const ImagePreview = ({pickedImage, getImage}) => {
  return (
    <View>
      <Image style={styles.imagePreview} source={{uri: pickedImage}} />
      <Button onPress={getImage}>Change photo</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.secondary.light,
    alignSelf: 'center',
  },
});
