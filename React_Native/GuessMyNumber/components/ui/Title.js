import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

export const Ttile = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    color: Colors.accent.light,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent.light,
    padding: 12,
    borderRadius: 6,
  },
});
