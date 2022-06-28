import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../components/Logo';
import {Card} from '../components/Card';
import {PanelButton} from '../components/PanelButton';
import {Colors} from '../constants/colors';
import {useState} from 'react';
import moment from 'moment';
import {PetInfo} from '../components/PetInfo';

export const PetPanel = () => {
  const [walksHistory, setWalksHistory] = useState([]);
  const [feedingHistory, setFeedingHistory] = useState([]);
  const [pillsHistory, setPillsHistory] = useState([]);
  const [playHistory, setPlaysHistory] = useState([]);

  const onPressFood = () => {
    let date = new Date();
    const newFeed = moment(date).format('dddd, HH:mm');
    const newFoods = [...feedingHistory];
    newFoods.unshift(newFeed);
    if (newFoods.length > 3) newFoods.pop();
    setFeedingHistory([...newFoods]);
    console.log(newFoods);
  };

  const onPressWalk = () => {
    let date = new Date();
    const newWalk = moment(date).format('dddd, HH:MM');
    const newWalks = [...walksHistory];
    newWalks.unshift(newWalk);
    if (newWalks.length > 3) newWalks.pop();
    setWalksHistory([...newWalks]);

    console.log('walks', walksHistory);
  };

  const onPressPills = () => {
    let date = new Date();
    const newPill = moment(date).format('dddd, HH:MM');
    const newPills = [...pillsHistory];
    newPills.unshift(newPill);
    if (newPills.length > 3) newPills.pop();
    setPillsHistory([...newPills]);
    console.log('pills', pillsHistory);
  };
  const onPressPlays = () => {
    let date = new Date();
    const newPlay = moment(date).format('dddd, HH:MM');
    const newPlays = [...playHistory];
    newPlays.unshift(newPlay);
    if (newPlays.length > 3) newPlays.pop();
    setPlaysHistory([...newPlays]);
    console.log('plays', playHistory);
  };
  return (
    <View style={styles.outerContainer}>
      <Logo />
      <Card>
        <PetInfo />

        <View style={styles.innerContainer}>
          <PanelButton
            buttonType={require('../assets/images/feed.png')}
            onPress={onPressFood}
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
          <PanelButton
            buttonType={require('../assets/images/poop.png')}
            onPress={onPressWalk}
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
          <PanelButton
            buttonType={require('../assets/images/pills.png')}
            onPress={onPressPills}
          />
          <View style={styles.dataView}>
            {pillsHistory.map((pill, index) => (
              <Text key={index} style={styles.dataText}>
                {pill}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.innerContainer}>
          <PanelButton
            buttonType={require('../assets/images/play.png')}
            onPress={onPressPlays}
          />
          <View style={styles.dataView}>
            {playHistory.map((play, index) => (
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
