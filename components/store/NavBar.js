import { StyleSheet, View, Button } from "react-native";
import { HStack, Center, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import Feather from "@expo/vector-icons/Feather";
import * as React from "react";

export default function NavBar() {
  const navigation = useNavigation();
  return (
    <HStack
      h={"50px"}
      justifyContent={"space-evenly"}
      bg={{
        linearGradient: {
          colors: ["main.C", "main.D"],
          start: [0, 0.5],
        },
      }}
    >
      <Center h={"50px"} w={"50px"}>
        <Pressable>
          <Icon
            size="6"
            color="#fff"
            as={
              <Feather
                name="home"
                onPress={() => navigation.navigate("Home")}
              />
            }
          />
        </Pressable>
      </Center>
      <Center h={"50px"} w={"50px"}>
        <Pressable>
          <Icon
            size="6"
            color="#fff"
            as={
              <Feather
                name="package"
                onPress={() => navigation.navigate("Home")}
              />
            }
          />
        </Pressable>
      </Center>
      <Center h={"50px"} w={"50px"}>
        <Pressable>
          <Icon
            size="6"
            color="#fff"
            as={
              <Feather
                name="user"
                onPress={() => navigation.navigate("Home")}
              />
            }
          />
        </Pressable>
      </Center>
      <Center h={"50px"} w={"50px"}>
        <Pressable>
          <Icon
            size="6"
            color="#fff"
            as={
              <Feather
                name="menu"
                onPress={() => navigation.navigate("Settings")}
              />
            }
          />
        </Pressable>
      </Center>
    </HStack>
  );
}
