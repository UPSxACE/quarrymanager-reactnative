import { StyleSheet, View, Button } from "react-native";
import { HStack, Center, Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";
import Feather from "@expo/vector-icons/Feather";
import * as React from "react";

export default function NavBar() {
  const navigation = useNavigation();
  return (
    <HStack h={"40px"} justifyContent={"space-evenly"}>
      <Center h={"40px"} w={"40px"}>
        <Pressable>
          <Icon
            size="30px"
            color="#000"
            as={
              <Feather
                name="home"
                onPress={() => navigation.navigate("Home")}
              />
            }
          />
        </Pressable>
      </Center>
      <Center h={"40px"} w={"40px"}>
        <Pressable>
          <Icon
            size="6"
            color="#000"
            as={
              <Feather
                name="package"
                onPress={() => navigation.navigate("Home")}
              />
            }
          />
        </Pressable>
      </Center>
      <Center h={"40px"} w={"40px"}>
        <Pressable>
          <Icon
            size="6"
            color="#000"
            as={
              <Feather
                name="user"
                onPress={() => navigation.navigate("Home")}
              />
            }
          />
        </Pressable>
      </Center>
      <Center h={"40px"} w={"40px"}>
        <Pressable>
          <Icon
            size="6"
            color="#000"
            as={
              <Feather
                name="menu"
                onPress={() => navigation.navigate("Home")}
              />
            }
          />
        </Pressable>
      </Center>
    </HStack>
  );
}
