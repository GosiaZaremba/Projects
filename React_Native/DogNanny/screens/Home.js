import { Image, View, StyleSheet } from "react-native";
import { Button } from "../components/Button";

export const Home = () => {
  return (
    <View style={styles.outerContainer}>
      <View>
        <Image
          source={require("../assets/splash.png")}
          style={styles.logo}
        ></Image>
      </View>

      <View style={styles.innerContainer}>
        <Button>LogIn</Button>
        <Button>Register</Button>
        <Button>Reset password</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
    alignItems: "stretch",
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
});
