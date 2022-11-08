import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TestPage from "./screens/store/TestPage";
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
import TestPage2 from "./screens/store/TestPage2";
import TestPage3 from "./screens/store/TestPage3";
import Orders from "./screens/store/Orders";
import Store from "./screens/store/Store";

const HomeStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const stackOptions = {
  headerTintColor: "white",
  headerBackground: () => (
    <View style={{ flex: 1 }}>
      <HStack
        h={"100%"}
        w={"100%"}
        justifyContent={"space-evenly"}
        bg={{
          linearGradient: {
            colors: ["main.D", "main.C"],
            start: [0, 0.5],
          },
        }}
      ></HStack>
    </View>
  ),
};

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
        dashboardComponentColor1: "#0369A1",
        mainTextColor: "#464748",
        secondaryTextColor: "#6E7173",
        weakGrey: "#959595",
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme} config={config}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "BtHome") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "BtOrders") {
                iconName = focused ? "package" : "package";
              } else if (route.name === "BtProfile") {
                iconName = focused ? "user" : "user";
              } else if (route.name === "BtSettings") {
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
                  h={"100%"}
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
          <Tab.Screen name="BtHome">
            {() => (
              <ProfileStack.Navigator>
                <ProfileStack.Screen
                  name="Store"
                  component={Store}
                  options={stackOptions}
                ></ProfileStack.Screen>
                <ProfileStack.Screen
                  name="Tests2"
                  component={TestPage2}
                  options={stackOptions}
                ></ProfileStack.Screen>
                <ProfileStack.Screen
                  name="Tests3"
                  component={TestPage3}
                  options={stackOptions}
                ></ProfileStack.Screen>
              </ProfileStack.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen name="BtOrders">
            {() => (
              <ProfileStack.Navigator>
                <ProfileStack.Screen
                  name="Orders"
                  component={Orders}
                  options={stackOptions}
                ></ProfileStack.Screen>
              </ProfileStack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="BtProfile">
            {() => (
              <ProfileStack.Navigator>
                <ProfileStack.Screen
                  name="Profile"
                  component={Profile}
                  options={stackOptions}
                ></ProfileStack.Screen>
              </ProfileStack.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen name="BtSettings">
            {() => (
              <ProfileStack.Navigator>
                <ProfileStack.Screen
                  name="Settings"
                  component={SettingsPage}
                  options={stackOptions}
                ></ProfileStack.Screen>
              </ProfileStack.Navigator>
            )}
          </Tab.Screen>
        </Tab.Navigator>
        {/*<Stack.Navigator>
            <Stack.Screen name="Home" component={TestPage} />
            <Stack.Screen name="About" component={AboutPage} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={SettingsPage} />
          </Stack.Navigator>*/}
      </NavigationContainer>
      <StatusBar style="light" />
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
