import React from 'react';
import {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import {Button} from '../components/buttons/Button';
import {AppImagePicker} from '../components/imagePicker/AppImagePicker';
import {Logo} from '../components/Logo';
import {Colors} from '../constants/colors';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const AddPetScreen = () => {
  const user = auth().currentUser;

  const [form, setForm] = useState({
    name: '',
    breed: '',
    dateOfBirth: '',
    description: '',
    feedingHistory: [''],
    playsHistory: [''],
    walksHistory: [''],
    pillsHistory: [''],
  });

  const petId = uuid.v4();
  const userId = user.uid;

  const onChangeHandler = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [pickedImageUri, setPickedImageUri] = useState(null);

  const getImage = () => {
    ImagePicker.openPicker({
      width: 150,
      height: 150,
      cropping: true,
    })
      .then(image => {
        setPickedImageUri(image.path);
      })
      .catch(error => {
        if (error.code === 'E_PICKER_CANCELLED');
        Alert.alert(`You did't pick any photo.`, 'Please, try again.');
      });
  };

  const uploadPhoto = async () => {
    const reference = storage().ref(`${userId}/${petId}`);
    const pathToFile = `${pickedImageUri}`;
    await reference.putFile(pathToFile).catch(error => {
      throw error;
    });
    const url = await reference.getDownloadURL().catch(error => {
      throw error;
    });
    console.log(url);
    return url;
  };

  const onPressHandler = () => {
    firestore().collection(userId).doc(petId).set(form);
    uploadPhoto();
    setForm({
      name: '',
      breed: '',
      dateOfBirth: '',
      description: '',
    });
    setPickedImageUri(null);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoPickerContainer}>
        {pickedImageUri ? null : <Logo />}
        <AppImagePicker getImage={getImage} pickedImage={pickedImageUri} />
      </View>
      <View style={styles.form}>
        <KeyboardAwareScrollView>
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
          <Button onPress={onPressHandler}>Submit</Button>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  inputs: {
    backgroundColor: Colors.secondary.light,
    margin: 5,
    padding: 10,
    borderRadius: 25,
    fontSize: 18,
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'stretch',
  },
  logoPickerContainer: {
    width: '100%',
  },
});
