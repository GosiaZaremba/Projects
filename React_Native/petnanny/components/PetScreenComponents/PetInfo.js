import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../../constants/colors';
import {PetPhoto} from '../PetPhoto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export const PetInfo = ({pet, photoUris, index, petId}) => {
  const petInfo = pet;
  const navigation = useNavigation();
  onPressEdit = () => {
    navigation.navigate('EditPetScreen', {petId});
  };

  return (
    <View style={styles.petContainer}>
      <PetPhoto photoUrl={photoUris[index]} />
      <View style={styles.petData}>
        <Text style={styles.petName}>{petInfo.name}</Text>
        <Text style={styles.petOtherInfo}>{petInfo.breed}</Text>
        <Text style={styles.petOtherInfo}>{petInfo.dateOfBirth}</Text>
        <Text style={styles.petOtherInfo}>{petInfo.description}</Text>
      </View>
      <View style={styles.editIcon}>
        <Pressable
          onPress={onPressEdit}
          android_ripple={{color: Colors.secondary.light}}>
          <Icon name={'square-edit-outline'} size={40} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  petContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 7,
  },
  petData: {
    flex: 2,
  },
  petName: {
    color: Colors.secondary.light,
    fontSize: 30,
  },
  petOtherInfo: {
    color: Colors.secondary.light,
    fontSize: 14,
  },
  editIcon: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.primary.dark,
    backgroundColor: Colors.primary.medium,
    marginRight: 20,
  },
});
