import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { Logo } from "../components/Logo";
import { Card } from "../components/Card";
import { PetPhoto } from "../components/PetPhoto";
import { PanelButton } from "../components/PanelButton";
import { Colors } from "../constants/colors";
import { useState } from "react";

export const PetPanel = () => {
  const [walksHistory, setWalksHistory] = useState([]);
  const [feedingHistory, setFeedingHistory] = useState([]);
  const [pillsHistory, setPillsHistory] = useState([]);
  const [playsHistory, setPlaysHistory] = useState([]);

  const onPressWalk = () => {
    setWalksHistory([new Date().toLocaleTimeString(), ...walksHistory]);
    if (walksHistory.length >= 3) {
      setWalksHistory([new Date().toLocaleTimeString(), ...walksHistory]);
      setWalksHistory([walksHistory.pop()]);
    }
    console.log("walks", walksHistory);
  };

  const onPressFood = () => {
    setFeedingHistory([new Date().toLocaleTimeString(), ...feedingHistory]);
    if (feedingHistory.length >= 3) {
      setFeedingHistory([new Date().toLocaleTimeString(), ...feedingHistory]);
      setFeedingHistory([feedingHistory.pop()]);
    }
    console.log("food", feedingHistory);
  };
  const onPressPills = () => {
    setPillsHistory([new Date().toLocaleTimeString(), ...pillsHistory]);
    if (pillsHistory.length >= 3) {
      setPillsHistory([new Date().toLocaleTimeString(), ...pillsHistory]);
      setPillsHistory([pillsHistory.pop()]);
    }
    console.log("pills", pillsHistory);
  };
  const onPressPlays = () => {
    setPlaysHistory([new Date().toLocaleTimeString(), ...playsHistory]);
    if (playsHistory.length >= 3) {
      setPlaysHistory([new Date().toLocaleTimeString(), ...playsHistory]);
      setPlaysHistory([playsHistory.pop()]);
    }
    console.log("plays", playsHistory);
  };
  return (
    <ScrollView style={styles.outerContainer}>
      <Logo />
      <Card>
        <PetPhoto photoUrl={require("../assets/7.jpg")} />
        <View style={styles.innerContainer}>
          <PanelButton
            buttonType={require("../assets/images/feed.png")}
            onPress={onPressFood}
          />
          <View style={styles.dataView}>
            {feedingHistory.map((food) => (
              <Text key={food} style={styles.dataText}>
                {food}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.innerContainer}>
          <PanelButton
            buttonType={require("../assets/images/poop.png")}
            onPress={onPressWalk}
          />
          <View style={styles.dataView}>
            {walksHistory.map((walk) => (
              <Text key={walk} style={styles.dataText}>
                {walk}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.innerContainer}>
          <PanelButton
            buttonType={require("../assets/images/pills.png")}
            onPress={onPressPills}
          />
          <View style={styles.dataView}>
            {pillsHistory.map((pill) => (
              <Text key={pill} style={styles.dataText}>
                {pill}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.innerContainer}>
          <PanelButton
            buttonType={require("../assets/images/play.png")}
            onPress={onPressPlays}
          />
          <View style={styles.dataView}>
            {playsHistory.map((play) => (
              <Text key={play} style={styles.dataText}>
                {play}
              </Text>
            ))}
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
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
  },
});
