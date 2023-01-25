import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';
import {ImageButton} from '../buttons/ImageButton';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

export const PetWalks = ({petId, userId}) => {
  const [walksHistory, setWalksHistory] = useState([]);

  const getPetData = () => {
    firestore()
      .collection(`${userId}`)
      .doc(`${petId}`)
      .onSnapshot(documentSnapshot => {
        const petData = documentSnapshot._data;
        setWalksHistory(petData.walksHistory.slice(0, 3));
      });
  };

  useEffect(() => {
    getPetData();
  }, [petId]);

  const onPressAddWalk = async () => {
    const newDate = moment().format('dddd, HH:mm');
    await firestore()
      .collection(`${userId}`)
      .doc(`${petId}`)
      .update({walksHistory: [newDate, ...walksHistory]});
  };
  return (
    <View style={styles.innerContainer}>
      <ImageButton
        buttonType={require('../../assets/images/poop.png')}
        onPress={onPressAddWalk}
      />
      <View style={styles.dataView}>
        {walksHistory.map((food, index) => (
          <Text key={index} style={styles.dataText}>
            {food}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    minHeight: 110,
    paddingBottom: 12,
  },
  dataView: {
    flex: 2,
    backgroundColor: Colors.primary.medium,
    borderRadius: 15,
    padding: 10,
    margin: 5,
  },
  dataText: {
    color: Colors.secondary.light,
    marginLeft: 15,
    fontSize: 16,
  },
});
