import { Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export const Instructions = ({ children, style }) => {
  return <Text style={[styles.instructions, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructions: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: Colors.accent.light,
  },
});
