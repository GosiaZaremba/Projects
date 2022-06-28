import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Colors} from '../constants/colors';

export const Card = ({children}) => {
  return <ScrollView style={styles.card}>{children}</ScrollView>;
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 28,
    margin: 10,
    overflow: 'hidden',
    elevation: 7,
    backgroundColor: Colors.accent.medium,
    padding: 10,
  },
});
