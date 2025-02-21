import { Text, StyleSheet, View } from "react-native";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>oponents guess</Text>

      <View>
        <Text>higher or lower</Text>
      </View>
      {/* <View>log rounds</View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});
export default GameScreen;
