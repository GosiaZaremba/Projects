import { Image, StyleSheet, View } from "react-native";

export const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/splash.png")}
        style={styles.logo}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 30,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "stretch",
  },
});
