import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { Card } from "../components/ui/Card";
import { Instructions } from "../components/ui/Instructions";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Ttile } from "../components/ui/Title";
import { Colors } from "../constants/colors";

export const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputNumber = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
    resetInputHandler();
  };

  return (
    <View style={styles.rootContainer}>
      <Ttile>Guess My Number!</Ttile>
      <Card>
        <Instructions>Enter number between 1 and 99</Instructions>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 10,
    alignItems: "stretch",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent.light,
    borderBottomWidth: 2,
    color: Colors.accent.light,
    marginVertical: 8,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
