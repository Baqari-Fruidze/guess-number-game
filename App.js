import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
      // source={require("../my-app/assets/images/dice.jpg")}
      // resizeMode="cover"
      // style={styles.rootScreen}
      // imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
  backgroundImage: { opacity: 0.01 },
});

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, ImageBackground } from "react-native";
// import StartGameScreen from "./screens/StartGameScreen";
// import { LinearGradient } from "expo-linear-gradient";

// export default function App() {
//   return (
//     <ImageBackground
//       source={require("./assets/images/dice.jpg")} // Adjust the path
//       resizeMode="cover"
//       style={styles.rootScreen}
//       imageStyle={styles.backgroundImage}
//     >
//       <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
//         <StartGameScreen />
//       </LinearGradient>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   rootScreen: {
//     flex: 1,
//   },
//   backgroundImage: {
//     opacity: 0.2, // Adjust opacity to blend with gradient
//   },
// });
