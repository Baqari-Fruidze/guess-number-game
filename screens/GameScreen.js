import { Text, StyleSheet, View, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Do not lie", "you know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    // maxBoundary = currentGuess;
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }
  console.log(currentGuess);
  return (
    <View style={styles.screen}>
      <Title>Oponents gues</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          higher or lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.singleButtonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 24,
  },
  instructionText: {
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  singleButtonContainer: {
    flex: 1,
  },
});
export default GameScreen;
