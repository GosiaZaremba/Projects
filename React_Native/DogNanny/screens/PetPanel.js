import { StyleSheet, Text, View } from "react-native";
import { Logo } from "../components/Logo";
import { Card } from "../components/Card";
import { PetPhoto } from "../components/PetPhoto";
import { PanelButton } from "../components/PanelButton";
import { Colors } from "../constants/colors";

export const PetPanel = () => {
  return (
    <View style={styles.outerContainer}>
      <Logo />
      <Card>
        <PetPhoto photoUrl={require("../assets/7.jpg")} />
        <View style={styles.innerContainer}>
          <PanelButton buttonType={require("../assets/images/feed.png")} />
          <View style={styles.dataView}>
            <Text>Today 9:13</Text>
            <Text>Today 13:29</Text>
            <Text>Today 17:45</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <PanelButton buttonType={require("../assets/images/poop.png")} />
          <View style={styles.dataView}>
            <Text>Today 9:13</Text>
            <Text>Today 13:29</Text>
            <Text>Today 17:45</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <PanelButton buttonType={require("../assets/images/pills.png")} />
          <View style={styles.dataView}>
            <Text>Today 9:13</Text>
            <Text>Today 13:29</Text>
            <Text>Today 17:45</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <PanelButton buttonType={require("../assets/images/play.png")} />
          <View style={styles.dataView}>
            <Text>Today 9:13</Text>
            <Text>Today 13:29</Text>
            <Text>Today 17:45</Text>
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
  },
});
