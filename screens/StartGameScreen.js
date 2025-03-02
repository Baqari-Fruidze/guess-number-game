import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Platform,
  Alert,
  Text,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import colors from "../Constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = Number(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number Must Be Between 1 and 99", [
        { text: "ok", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
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
          <View style={styles.singleButtonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  instructionText: {
    color: colors.accent500,
    fontSize: 24,
  },
  numberInput: {
    // height: 80,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  singleButtonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
