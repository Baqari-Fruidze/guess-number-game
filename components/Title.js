import { StyleSheet, Text } from "react-native";
import colors from "../Constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: 12,
  },
});
export default Title;
