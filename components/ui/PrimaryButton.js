import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import colors from "../../constants/colors";
function PrimaryButton({ children, onPress }) {
  // function foo() {
  //   console.log("pressed");
  // }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{}}
        style={({ pressed }) =>
          pressed
            ? [styles.ButtonInnerContainer, styles.pressed]
            : styles.ButtonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20,

    margin: 4,
    overflow: "hidden",
  },
  ButtonInnerContainer: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
      },
    }),
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.primary500,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
