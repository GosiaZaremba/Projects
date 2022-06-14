import { Image, StyleSheet, Text, View } from "react-native";
import { Logo } from "../components/Logo";
import { Card } from "../components/Card";

export const PetPanel = () => {
  return (
    <View>
      <Logo />
      <Card>
        <Image
          style={styles.petImage}
          source={require("../assets/7.jpg")}
        ></Image>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  petImage: {
    width: 100,
    height: 100,
  },
});
