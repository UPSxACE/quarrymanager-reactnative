import { Feather } from "@expo/vector-icons";
import { Text, HStack, Button, Icon, Center } from "native-base";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ArrowButton({ label, destiny }) {
  const navigation = useNavigation();
  return (
    <Pressable width={"100%"} onPress={() => navigation.navigate(destiny)}>
      <HStack
        w={"100%"}
        h={"40px"}
        bg={"#fff"}
        borderRadius={"4"}
        borderColor={"main.blueComponentBorder"}
        borderWidth={"1"}
      >
        <Center h={"40px"} pl={"12px"}>
          <Text color={"#000"}>{label}</Text>
        </Center>
        <Center h={"40px"} ml={"auto"} pr={"6px"}>
          <Icon size="6" color="#000" as={<Feather name="chevron-right" />} />
        </Center>
      </HStack>
    </Pressable>
  );
}
