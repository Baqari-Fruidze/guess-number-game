import { Button, TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.InputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
const styles = StyleSheet.create({
  InputContainer: {
    flex: 1,
    padding: 16,
    marginTop: 100,
  },
});
export default StartGameScreen;
