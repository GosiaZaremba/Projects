import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

export const Button = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{color: Colors.primary.light}}
        onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderWidth: 2,
    borderColor: Colors.primary.dark,
    borderRadius: 28,
    marginTop: 10,
    overflow: 'hidden',
    elevation: 7,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary.medium,
    padding: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.secondary.light,
    fontSize: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});
