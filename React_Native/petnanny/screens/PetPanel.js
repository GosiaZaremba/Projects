import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Card} from '../components/Card';
import {ImageButton, PanelButton} from '../components/ImageButton';
import {Colors} from '../constants/colors';
import {useState} from 'react';
import moment from 'moment';
import {PetInfo} from '../components/PetInfo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const PetPanel = ({route, navigation}) => {
  const [walksHistory, setWalksHistory] = useState([]);
  const [feedingHistory, setFeedingHistory] = useState([]);
  const [pillsHistory, setPillsHistory] = useState([]);
  const [playHistory, setPlayHistory] = useState([]);
  const [singlePet, setSinglePet] = useState({
    feedingHistory: [],
    playHistory: [],
    walksHistory: [],
    pillsHistory: [],
    name: '',
    breed: '',
    description: '',
    dateOfBirth: '',
  });
  const userId = auth().currentUser.uid;
  const {itemId, photoUris, index} = route.params;

  const getPetData = () => {
    firestore()
      .collection(`${userId}`)
      .doc(`${itemId}`)
      .onSnapshot(documentSnapshot => {
        const petData = documentSnapshot._data;
        setSinglePet(petData);
        setFeedingHistory(petData.feedingHistory.slice(0, 3));
        setWalksHistory(petData.walksHistory.slice(0, 3));
        setPillsHistory(petData.pillsHistory.slice(0, 3));
        setPlayHistory(petData.playHistory.slice(0, 3));
      });
  };

  useEffect(() => {
    getPetData();
  }, [itemId]);

  const onPressAddFood = async () => {
    const newDate = moment().format('dddd, HH:mm:ss');
    await firestore()
      .collection(`${userId}`)
      .doc(`${itemId}`)
      .update({feedingHistory: [newDate, ...feedingHistory]});
  };

  const onPressAddWalk = async () => {
    const newDate = moment().format('dddd, HH:mm');
    await firestore()
      .collection(`${userId}`)
      .doc(`${itemId}`)
      .update({walksHistory: [newDate, ...walksHistory]});
  };

  const onPressAddPlay = async () => {
    const newDate = moment().format('dddd, HH:mm');
    await firestore()
      .collection(`${userId}`)
      .doc(`${itemId}`)
      .update({playHistory: [newDate, ...playHistory]});
  };

  const onPressAddPill = async () => {
    const newDate = moment().format('dddd, HH:mm');
    await firestore()
      .collection(`${userId}`)
      .doc(`${itemId}`)
      .update({pillsHistory: [newDate, ...pillsHistory]});
  };

  return (
    <View style={styles.outerContainer}>
      <Logo />
      <Card>
        <PetInfo pet={singlePet} photoUris={photoUris} index={index} />
        <View style={styles.innerContainer}>
          <ImageButton
            buttonType={require('../assets/images/feed.png')}
            onPress={onPressAddFood}
          />
          <View style={styles.dataView}>
            {feedingHistory.map((food, index) => (
              <Text key={index} style={styles.dataText}>
                {food}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.innerContainer}>
          <ImageButton
            buttonType={require('../assets/images/poop.png')}
            onPress={onPressAddWalk}
          />
          <View style={styles.dataView}>
            {walksHistory.map((walk, index) => (
              <Text key={index} style={styles.dataText}>
                {walk}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.innerContainer}>
          <ImageButton
            buttonType={require('../assets/images/play.png')}
            onPress={onPressAddPlay}
          />
          <View style={styles.dataView}>
            {playHistory.map((pill, index) => (
              <Text key={index} style={styles.dataText}>
                {pill}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.innerContainer}>
          <ImageButton
            buttonType={require('../assets/images/pills.png')}
            onPress={onPressAddPill}
          />
          <View style={styles.dataView}>
            {pillsHistory.map((play, index) => (
              <Text key={index} style={styles.dataText}>
                {play}
              </Text>
            ))}
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
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

// const petData = documentSnapshot._docs.map(item => ({
//   id: item._ref.id,
//   data: item._data,
// }));
// setPets(petData);
