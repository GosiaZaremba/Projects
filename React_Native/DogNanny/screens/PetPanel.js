import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import { Logo } from "../components/Logo";
import { Card } from "../components/Card";
import { PetPhoto } from "../components/PetPhoto";
import { PanelButton } from "../components/PanelButton";
import { Colors } from "../constants/colors";

export const PetPanel = () => {
  const data = {
    walks: [],
    food: [],
    pills: [],
    play: [],
  };
  const onPressWalk = () => {
    data.walks.push();
  };

  return (
    <ScrollView style={styles.outerContainer}>
      <Logo />
      <Card>
        <PetPhoto photoUrl={require("../assets/7.jpg")} />
        <View style={styles.innerContainer}>
          <PanelButton buttonType={require("../assets/images/feed.png")} />
          <View style={styles.dataView}>
            <Text style={styles.dataText}>Today 9:13</Text>
            <Text style={styles.dataText}>Today 13:29</Text>
            <Text style={styles.dataText}>Today 17:45</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <PanelButton buttonType={require("../assets/images/poop.png")} />
          <View style={styles.dataView}>
            <Text style={styles.dataText}>Today 9:13</Text>
            <Text style={styles.dataText}>Today 13:29</Text>
            <Text style={styles.dataText}>Today 17:45</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <PanelButton buttonType={require("../assets/images/pills.png")} />
          <View style={styles.dataView}>
            <Text style={styles.dataText}>Today 9:13</Text>
            <Text style={styles.dataText}>Today 13:29</Text>
            <Text style={styles.dataText}>Today 17:45</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <PanelButton buttonType={require("../assets/images/play.png")} />
          <View style={styles.dataView}>
            <Text style={styles.dataText}>Today 9:13</Text>
            <Text style={styles.dataText}>Today 13:29</Text>
            <Text style={styles.dataText}>Today 17:45</Text>
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
