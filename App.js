import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestPage from "./screens/store/TestPage";
import AboutPage from "./screens/store/AboutPage";
import {
  NativeBaseProvider,
  extendTheme,
  View,
  Box,
  HStack,
} from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import Profile from "./screens/store/Profile";
import SettingsPage from "./screens/store/SettingsPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        // 50: '#E3F2F9',
        // 100: '#C5E4F3',
        // ...
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        // 400: '#d97706',
      },
      main: {
        A: "#576F89",
        B: "#9FB6D4",
        greyComponentBg: "#F5F5F5",
        greyComponentText: "#6C6B6B",
        C: "#82A2CC",
        D: "#394A58",
        blueComponentBorder: "#7F9EC6",
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "About") {
                iconName = focused ? "package" : "package";
              } else if (route.name === "Profile") {
                iconName = focused ? "user" : "user";
              } else if (route.name === "Settings") {
                iconName = focused ? "menu" : "menu";
              }

              // You can return any component that you like here!
              return <Feather name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "white",

            tabBarBackground: () => (
              <View style={{ flex: 1 }}>
                <HStack
                  h={"50px"}
                  w={"100%"}
                  justifyContent={"space-evenly"}
                  bg={{
                    linearGradient: {
                      colors: ["main.C", "main.D"],
                      start: [0, 0.5],
                    },
                  }}
                ></HStack>
              </View>
            ),
          })}
        >
          <Tab.Screen name="Home" component={TestPage} />
          <Tab.Screen name="About" component={AboutPage} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={TestPage} />
          <Stack.Screen name="About" component={AboutPage} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={SettingsPage} />
        </Stack.Navigator> */}
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

const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};
