import React, {useEffect, useState} from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Title} from '../components/Title';
import {PetList} from '../components/PetList';
import {AddPetButton} from '../components/AddPetButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Header} from '../components/Header';

export const Dashboard = ({navigation}) => {
  const [pets, setPets] = useState([]);
  const [photoUris, setPhotoUris] = useState({uri: null});
  // const [userId, setUserId] = useState('');
  // useEffect(() => {
  //   setUserId(auth().currentUser.uid);
  // }, [userId]);
  const userId = auth().currentUser.uid;

  const petData = async () => {
    const petList = await firestore().collection(`${userId}`).get();
    const getPetData = petList._docs.map(item => ({
      id: item._ref.id,
      data: item._data,
    }));

    setPets(getPetData);
  };

  useEffect(() => {
    petData();
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
    navigation.navigate('AddPet');
  };
  return (
    <View style={styles.outerContainer}>
      <View>
        <Logo />
        <View style={styles.titleContainer}>
          <Title>Your Pets:</Title>
          <AddPetButton onPress={onPressAddAPet}>Add a Pet!</AddPetButton>
        </View>
      </View>
      <FlatList
        style={styles.listContainer}
        data={pets}
        renderItem={({item, index}) => (
          <PetList
            onPress={() => {
              navigation.navigate(
                'PetPanel',
                {
                  itemId: item.id,
                  photoUris: photoUris,
                  index: index,
                },
                petData(),
              );
            }}
            id={item.id}
            name={item.data.name}
            keyExtractor={item => item}
            photoUrls={photoUris}
            index={index}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
  },
  titleContainer: {
    felx: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
