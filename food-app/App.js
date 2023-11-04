import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import BottomNavigationTab from "./app/BottomNavigation";

export default function App() {
  const { width, height } = Dimensions.get("screen");
  console.log(width, height);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <BottomNavigationTab />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
