import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Colors} from '../constants/colors';

export const PanelButton = ({buttonType, onPress}) => {
  return (
    <View>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{color: Colors.primary.light}}
        onPress={onPress}>
        <Image
          source={buttonType}
          style={styles.buttonImage}
          resizeMode="contain"></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary.medium,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 7,
    padding: 12,
    margin: 5,
  },
  buttonImage: {
    height: 50,
    width: 60,
  },
});
