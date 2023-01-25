import React, {useEffect, useState} from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo';
import {PetListItem} from '../components/PetListItem';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Button} from '../components/buttons/Button';

export const PetListScreen = ({navigation}) => {
  const [pets, setPets] = useState([]);
  const [photoUris, setPhotoUris] = useState([]);

  const userId = auth().currentUser.uid;

  const getPetData = async () => {
    const petList = await firestore().collection(`${userId}`).get();
    const petData = petList._docs.map(item => ({
      id: item._ref.id,
      data: item._data,
    }));

    setPets(petData);
  };

  useEffect(() => {
    getPetData();
  }, []);

  const getPhotos = async () => {
    const imageRefs = await storage().ref(`${userId}`).listAll();
    const urls = await Promise.all(
      imageRefs.items.map(ref => ref.getDownloadURL()),
    );
    const uris = urls.map(url => ({
      uri: url,
    }));
    setPhotoUris(uris);
  };

  useEffect(() => {
    getPhotos();
  }, [pets]);

  const onPressAddAPet = () => {
    navigation.navigate('AddPetScreen');
  };

  return (
    <View style={styles.outerContainer}>
      <View>
        <Logo />
        <View style={styles.buttonContainer}>
          <Button onPress={onPressAddAPet}>Add a Pet!</Button>
        </View>
      </View>
      <FlatList
        refreshing={false}
        onRefresh={() => getPetData()}
        style={styles.listContainer}
        data={pets}
        renderItem={({item, index}) => (
          <PetListItem
            onPress={() => {
              navigation.navigate('PetScreen', {
                petId: item.id,
                photoUris: photoUris,
                index: index,
              });
            }}
            petId={item.id}
            name={item.data.name}
            keyExtractor={item => item}
            photoUrls={photoUris}
            userId={userId}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
  },
  buttonContainer: {
    felx: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
  },
});
