import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

export const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
    margin: 10,
    overflow: "hidden",
    elevation: 7,
    backgroundColor: Colors.accent.medium,
  },
});
