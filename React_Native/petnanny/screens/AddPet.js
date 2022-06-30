import React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button} from '../components/Button';
import {AppImagePicker} from '../components/AppImagePicker';
import {Logo} from '../components/Logo';
import {Title} from '../components/Title';
import {Colors} from '../constants/colors';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import storage from '@react-native-firebase/storage';

export const AddPet = () => {
  const [form, setForm] = useState({
    name: '',
    breed: '',
    dateOfBirth: '',
    description: '',
  });

  const petId = uuid.v4();

  const onChangeHandler = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [pickedImageUri, setPickedImageUri] = useState();
  const [pickedImageName, setPickedImageName] = useState('');

  const getImage = () => {
    ImagePicker.openPicker({
      width: 150,
      height: 150,
      cropping: true,
    }).then(image => {
      setPickedImageUri(image.path);
      setPickedImageName(image.path.substring(image.path.lastIndexOf('/') + 1));
    });
  };

  const uploadPhoto = async () => {
    const reference = storage().ref(`${petId}/${pickedImageName}`);
    const pathToFile = `${pickedImageUri}`;
    await reference.putFile(pathToFile);
  };

  const onPressHandler = () => {
    firestore().collection('pets').doc(petId).set(form);
    uploadPhoto();
    setForm({
      name: '',
      breed: '',
      dateOfBirth: '',
      description: '',
    });
  };

  return (
    <View style={styles.mainContainer}>
      <Logo />
      <View>
        <Title>Add a pet!</Title>
      </View>
      <View style={styles.form}>
        <AppImagePicker getImage={getImage} pickedImage={pickedImageUri} />
        <TextInput
          style={styles.inputs}
          placeholder="Name"
          autoCorrect={false}
          spellCheck={false}
          value={form.name}
          onChangeText={text => onChangeHandler('name', text)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Breed"
          autoCorrect={false}
          spellCheck={false}
          value={form.breed}
          onChangeText={text => onChangeHandler('breed', text)}
        />
        <TextInput
          keyboardType="number-pad"
          style={styles.inputs}
          placeholder="Date of birth"
          autoCorrect={false}
          spellCheck={false}
          value={form.dateOfBirth}
          onChangeText={text => onChangeHandler('dateOfBirth', text)}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Description"
          autoCorrect={false}
          spellCheck={false}
          value={form.description}
          onChangeText={text => onChangeHandler('description', text)}
          autoCapitalize="sentences"
          maxLength={140}
          multiline={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPressHandler}>Submit</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  inputs: {
    backgroundColor: Colors.secondary.light,
    marginTop: 10,
    padding: 8,
    borderRadius: 25,
  },
  form: {
    width: '100%',
    alignItems: 'stretch',
  },
  buttonContainer: {
    width: '100%',
  },
});
