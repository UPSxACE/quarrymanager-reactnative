import { Feather } from "@expo/vector-icons";
import { Text, HStack, Button, Icon, Center } from "native-base";
import { Pressable } from "react-native";

export default function ArrowButton({ label }) {
  return (
    <Pressable width={"100%"}>
      <HStack
        w={"100%"}
        h={"40px"}
        bg={"#f5f5f5"}
        borderRadius={"4"}
        borderColor={"main.blueComponentBorder"}
        borderWidth={"1"}
      >
        <Center h={"40px"} pl={"12px"}>
          <Text color={"#000"}>Dashboard</Text>
        </Center>
        <Center h={"40px"} ml={"auto"} pr={"6px"}>
          <Icon size="6" color="#000" as={<Feather name="chevron-right" />} />
        </Center>
      </HStack>
    </Pressable>
  );
}
