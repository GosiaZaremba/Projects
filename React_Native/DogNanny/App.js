import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./constants/colors";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { RecoverPassword } from "./screens/RecoverPassword";
import { AddPet } from "./screens/AddPet";
import { Dashboard } from "./screens/Dashboard";
import { PetPanel } from "./screens/PetPanel";

export default function App() {
  return (
    <LinearGradient
      colors={[Colors.primary.medium, Colors.accent.dark]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/bckg.png")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImge}
      >
        <SafeAreaView style={styles.rootContainer}>
          <StatusBar></StatusBar>
          <AddPet />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  backgroundImge: {
    opacity: 0.3,
  },
});
