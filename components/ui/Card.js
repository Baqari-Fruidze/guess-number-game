import { StyleSheet,Dimensions } from "react-native";
import colors from "../../constants/colors";
import { View } from "react-native";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth =  Dimensions.get("window").width
const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: colors.primary800,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // for android
    // below for shadow  efect ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    // end of ios shadow efect
    /// Tanamedrovw gza
    // ...Platform.select({
    //   ios: { backgroundColor: "red" },
    //   android: { backgroundColor: "orange" },
    // }),
  },
});
