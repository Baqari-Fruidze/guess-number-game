import { Text, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  console.log("usenumber", userNumber);
  console.log("curent", currentGuess);
  return (
    <View style={styles.screen}>
      <Title>Oponents gues</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>higher or lower</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 24,
  },
});
export default GameScreen;
