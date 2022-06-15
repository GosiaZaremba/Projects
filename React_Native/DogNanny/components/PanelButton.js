import { Image, Pressable, StyleSheet, View } from "react-native";
import { Colors } from "../constants/colors";

export const PanelButton = ({ buttonType }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: Colors.primary.light }}
      >
        <Image source={buttonType} style={styles.buttonImage}></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: Colors.primary.medium,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 7,
    marginTop: 10,
    height: 50,
    width: 60,
    padding: 5,
  },
  innerContainer: {
    alignItems: "center",
  },
  buttonImage: {
    height: 40,
    width: 50,
    resizeMode: "center",
  },
});
