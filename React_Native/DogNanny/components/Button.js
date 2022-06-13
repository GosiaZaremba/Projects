import { Pressable, Text, View, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export const Button = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary.medium }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    marginTop: 10,
    overflow: "hidden",
    elevation: 7,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary.dark,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.secondary.light,
  },
  pressed: {
    opacity: 0.75,
  },
});
