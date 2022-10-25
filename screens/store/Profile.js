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
      <Text>Configurações</Text>
      <Button title="Home Icon" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  text1: {
    color: "grey",
  },
});
