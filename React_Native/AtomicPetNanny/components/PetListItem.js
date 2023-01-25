import React from 'react';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/colors';
import {Card} from './Card';
import {PetPhoto} from './PetPhoto';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const PetListItem = ({onPress, name, photoUrls, petId, userId}) => {
  const getPetImage = () => {
    return photoUrls.find(url => url.uri.includes(petId));
  };

  const deletePet = petId => {
    console.log('petId', petId);
    Alert.alert('Delete pet?', 'Are You sure?', [
      {
        text: 'Yes',
        onPress: () => {
          firestore()
            .collection(`${userId}`)
            .doc(`${petId}`)
            .delete()
            .then(() => {
              console.log('Pet deleted!');
            });
          const reference = storage().ref(`${userId}/${petId}`);
          reference.delete();
        },
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  };
  return (
    <Card>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        android_ripple={{color: Colors.accent.light}}
        onPress={onPress}
        onLongPress={() => deletePet(petId)}>
        <View style={styles.dataContainer}>
          <PetPhoto photoUrl={getPetImage()} />
          <Text style={styles.text}>{name}</Text>
        </View>
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: Colors.accent.medium,
    padding: 10,
    borderRadius: 28,
  },
  pressed: {
    opacity: 0.75,
  },

  dataContainer: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 40,
    color: Colors.secondary.light,
    margin: 5,
  },
});
