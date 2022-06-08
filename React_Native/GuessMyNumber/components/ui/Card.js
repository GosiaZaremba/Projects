import { View, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

export const Card = ({ children }) => {
  return <View style={styles.cardView}>{children}</View>;
};

const styles = StyleSheet.create({
  cardView: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 50,
    borderRadius: 6,
    backgroundColor: Colors.secondary.medium,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
