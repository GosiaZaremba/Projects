import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Colors} from '../constants/colors';
import {Button} from './Button';
import {ImagePreview} from './ImagePreview';

export const AppImagePicker = ({getImage, pickedImage}) => {
  return (
    <View styles={styles.outerContainer}>
      {pickedImage ? (
        <ImagePreview pickedImage={pickedImage} getImage={getImage} />
      ) : (
        <Button onPress={getImage}>Add photo</Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 10,
  },
});
