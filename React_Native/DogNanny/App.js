import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./constants/colors";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { RecoverPassword } from "./screens/RecoverPassword";
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
        <SafeAreaView>
          <View>
            <RecoverPassword />
          </View>
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
