import { Text, StyleSheet, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Oponents gues</Title>

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
