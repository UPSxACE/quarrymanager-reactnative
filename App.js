import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestPage from "./screens/store/TestPage";
import AboutPage from "./screens/store/AboutPage";
import { NativeBaseProvider } from "native-base";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TestPage} />
          <Stack.Screen name="About" component={AboutPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );

  return (
    <View style={page_styles.container}>
      <StatusBar style="auto" />
      <TestPage />
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    color: "grey",
  },
});
