import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { Card } from "./Card";

export const PetList = ({ onPress, name, photoUrl }) => {
  return (
    <Card>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        android_ripple={{ color: Colors.accent.light }}
        onPress={onPress}
      >
        <View style={styles.dataContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={photoUrl} />
          </View>

          <Text style={styles.text}>{name}</Text>
        </View>
      </Pressable>
    </Card>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: Colors.accent.medium,
    padding: 10,
  },
  pressed: {
    opacity: 0.75,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.secondary.light,
  },
  dataContainer: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 40,
    color: Colors.secondary.light,
    margin: 5,
  },
});
