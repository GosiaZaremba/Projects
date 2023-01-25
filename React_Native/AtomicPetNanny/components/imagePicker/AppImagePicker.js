import React from 'react';
import {View} from 'react-native';
import {Button} from '../buttons/Button';
import {ImagePreview} from './ImagePreview';

export const AppImagePicker = ({getImage, pickedImage}) => {
  return (
    <View>
      {pickedImage ? (
        <ImagePreview pickedImage={pickedImage} getImage={getImage} />
      ) : (
        <Button onPress={getImage}>Add photo</Button>
      )}
    </View>
  );
};
