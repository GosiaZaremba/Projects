import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';
import {ImageButton} from '../buttons/ImageButton';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

export const PetPlays = ({petId, userId}) => {
  const [playsHistory, setPlaysHistory] = useState([]);

  const getPetData = () => {
    firestore()
      .collection(`${userId}`)
      .doc(`${petId}`)
      .onSnapshot(documentSnapshot => {
        const petData = documentSnapshot._data;
        setPlaysHistory(petData.playsHistory.slice(0, 3));
      });
  };

  useEffect(() => {
    getPetData();
  }, [petId]);

  const onPressAddPlay = async () => {
    const newDate = moment().format('dddd, HH:mm');
    await firestore()
      .collection(`${userId}`)
      .doc(`${petId}`)
      .update({playsHistory: [newDate, ...playsHistory]});
  };
  return (
    <View style={styles.innerContainer}>
      <ImageButton
        buttonType={require('../../assets/images/play.png')}
        onPress={onPressAddPlay}
      />
      <View style={styles.dataView}>
        {playsHistory.map((food, index) => (
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
