import { Image, StyleSheet, Text, View } from "react-native";
import { Logo } from "../components/Logo";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { PetPhoto } from "../components/PetPhoto";
import { PanelButton } from "../components/PanelButton";
import { Colors } from "../constants/colors";

export const PetPanel = () => {
  return (
    <View>
      <View>
        <Logo />
      </View>
      <Card>
        <PetPhoto photoUrl={require("../assets/7.jpg")} />
        <View styles={styles.innerContainer}>
          <View style={styles.buttonContainer}>
            <PanelButton buttonType={require("../assets/images/feed.png")} />
            <PanelButton buttonType={require("../assets/images/pills.png")} />
            <PanelButton buttonType={require("../assets/images/play.png")} />
            <PanelButton buttonType={require("../assets/images/poop.png")} />
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.dataView}>
              <Text>Today 9:13</Text>
              <Text>Today 13:29</Text>
              <Text>Today 17:45</Text>
            </View>
            <View style={styles.dataView}>
              <Text>Today 9:13</Text>
              <Text>Today 13:29</Text>
              <Text>Today 17:45</Text>
            </View>
            <View style={styles.dataView}>
              <Text>Today 9:13</Text>
              <Text>Today 13:29</Text>
              <Text>Today 17:45</Text>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    width: "50%",
  },
  innerContainer: {
    flexDirection: "row",
  },
  dataContainer: { width: "50%" },
  dataView: {
    backgroundColor: Colors.primary.medium,
    borderRadius: 15,
    padding: 10,
  },
});
