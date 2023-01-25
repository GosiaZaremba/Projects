import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../components/buttons/Button';
import { AppImagePicker } from '../components/imagePicker/AppImagePicker';
import { Logo } from '../components/Logo';
import { Colors } from '../constants/colors';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

export const EditPetScreen = ({ navigation, route }) => {
    const userId = auth().currentUser.uid;
    const petId = route.params.petId;
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    const [pickedImageUri, setPickedImageUri] = useState(null);

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

    const getPetData = async () => {
        const petList = await firestore()
            .collection(`${userId}`)
            .doc(`${petId}`)
            .get();
        const petData = petList._data;
        setForm({
            name: petData.name,
            breed: petData.breed,
            dateOfBirth: petData.dateOfBirth,
            description: petData.description,
            feedingHistory: petData.feedingHistory,
            playsHistory: petData.playsHistory,
            walksHistory: petData.walksHistory,
            pillsHistory: petData.pillsHistory,
        });
    };

    useEffect(() => {
        getPetData();
        getPhoto();
    }, []);

    const getPhoto = async () => {
        const url = await storage().ref(`${userId}/${petId}`).getDownloadURL();
        setPickedImageUri(url);
    };

    const onChangeHandler = (name, value) => {
        setForm({
            ...form,
            [name]: value,
            dateOfBirth: moment(date).format('MMMM Do YYYY'),
        });
    };

    const getImage = () => {
        const reference = storage().ref(`${userId}/${petId}`);
        reference.delete();
        ImagePicker.openPicker({
            width: 150,
            height: 150,
            cropping: true,
        })
            .then((image) => {
                setPickedImageUri(image.path);
            })
            .catch((error) => {
                if (error.code === 'E_PICKER_CANCELLED');
                Alert.alert(`You did't pick any photo.`, 'Please, try again.');
            });
    };

    const updatePhoto = async () => {
        const reference = storage().ref(`${userId}/${petId}`);
        const pathToFile = `${pickedImageUri}`;
        await reference.putFile(pathToFile).catch((error) => {
            throw error;
        });
    };

    const onPressHandler = () => {
        firestore().collection(userId).doc(petId).update(form);
        updatePhoto();
        setForm({
            name: '',
            breed: '',
            dateOfBirth: '',
            description: '',
        });
        setPickedImageUri(null);
        navigation.navigate('PetListScreen');
    };
    return (
        <View style={styles.mainContainer}>
            <View style={styles.logoPickerContainer}>
                {pickedImageUri ? null : <Logo />}
                <AppImagePicker
                    getImage={getImage}
                    pickedImage={pickedImageUri}
                />
            </View>
            <View style={styles.form}>
                <KeyboardAwareScrollView>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Name"
                        autoCorrect={false}
                        spellCheck={false}
                        value={form.name}
                        onChangeText={(text) => onChangeHandler('name', text)}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Breed"
                        autoCorrect={false}
                        spellCheck={false}
                        value={form.breed}
                        onChangeText={(text) => onChangeHandler('breed', text)}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder="Date of birth"
                        autoCorrect={false}
                        spellCheck={false}
                        value={form.dateOfBirth}
                        onPressIn={() => setOpen(true)}
                    />
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode={'date'}
                        onConfirm={(date) => {
                            setOpen(false);
                            setDate(date);
                        }}
                        onCancel={() => {
                            setOpen(false);
                        }}
                    />

                    <TextInput
                        style={styles.inputs}
                        placeholder="Description"
                        autoCorrect={false}
                        spellCheck={false}
                        value={form.description}
                        onChangeText={(text) =>
                            onChangeHandler('description', text)
                        }
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
    datePickerStyle: {
        width: 230,
    },
});
