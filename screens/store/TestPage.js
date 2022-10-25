import { StyleSheet, Text, View, Icon, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchBar from "../../components/store/SearchBar";

export default function TestPage({ navigation }) {
  return (
    <View style={page_styles.container}>
      <Text
        style={page_styles.text1}
        onPress={() => navigation.navigate("About")}
      >
        Testkk
      </Text>
      <Icon size="6" color="#000" as={<Feather name="home" />} />;
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
