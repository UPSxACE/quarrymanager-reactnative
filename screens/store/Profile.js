import { StyleSheet, Text, View, Button } from "react-native";
import Feather from "@expo/vector-icons";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchBar from "../../components/store/SearchBar";

export default function Profile({ navigation }) {
  return (
    <View style={page_styles.container}>
      <Text>Home!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <View style={page_styles.container}>
        <Text>Perfil</Text>
        <Button
          title="Go to Profile"
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
  },

  text1: {
    color: "grey",
  },
});
