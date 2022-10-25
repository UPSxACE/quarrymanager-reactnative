import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { Icon } from "native-base";
import Feather from "@expo/vector-icons/Feather";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchBar from "../../components/store/SearchBar";

export default function TestPage({ navigation }) {
  return (
    <View style={page_styles.container}>
      <Icon size="6" color="#ffffff" as={<Feather name="eye" />} />;
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <View style={page_styles.container}>
        <Button
          style={{
            width: "90%",
            justifyContent: "space-evenly",
            backgroundColor: "000",
          }}
          title="Profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  button1: {
    width: "90%",
    justifyContent: "space-evenly",
  },

  text1: {
    color: "grey",
  },
});
