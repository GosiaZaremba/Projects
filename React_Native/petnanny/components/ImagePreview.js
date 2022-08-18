import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/colors';
import {Button} from './Button';

export const ImagePreview = ({pickedImage, getImage}) => {
  return (
    <View styles={styles.outerContainer}>
      <View styles={styles.elements}>
        <Image style={styles.imagePreview} source={{uri: pickedImage}} />
      </View>
      <View styles={styles.elements}>
        <Button onPress={getImage}>Change photo</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imagePreview: {
    width: '50%',
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.secondary.light,
  },
  elements: {
    // flex: 1,
    width: '50%',
    height: 100,
  },
});
