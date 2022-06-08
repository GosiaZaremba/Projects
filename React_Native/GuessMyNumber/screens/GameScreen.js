import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ttile } from "../components/ui/Title";
import { useState, useEffect } from "react";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Card } from "../components/ui/Card";
import { Instructions } from "../components/ui/Instructions";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import { GuessLogItem } from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
};

let minBoundry = 1;
let maxBoundry = 100;
export const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    const newRandNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRandNumber);
    setGuessRounds((prevGuessRounds) => [newRandNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Ttile>Opponent's guess</Ttile>
      <View>
        <Card>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Instructions style={styles.instructions}>
            Lower or Higher?
          </Instructions>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons
                  name="md-remove-circle-outline"
                  size={24}
                  color={Colors.accent.light}
                />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                <Ionicons
                  name="md-add-circle-outline"
                  size={24}
                  color={Colors.accent.light}
                />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
      {/* {guessRounds.map((guessRound) => (
         <Text key={guessRound}>{guessRound}</Text>
        ))} */}
      <FlatList
        data={guessRounds}
        renderItem={(itemData) => (
          <GuessLogItem
            roundNumber={guessRoundsListLength - itemData.index}
            guess={itemData.item}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 10,
    alignContent: "stretch",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  instructions: {
    margin: 10,
  },
});
