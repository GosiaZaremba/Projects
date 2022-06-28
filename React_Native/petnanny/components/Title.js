import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../constants/colors';

export const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.secondary.light,
  },
});
