import Description from "../../components/store/Description";
import Characteristics from "../../components/store/Characteristics";
import { StyleSheet, View, Button } from "react-native";
import HomeFooter from "../../components/store/HomeFooter";
import WhiteButton from "../../components/store/WhiteButton";
import {
  Box,
  Text,
  HStack,
  VStack,
  Center,
  ScrollView,
  Pressable,
} from "native-base";
import WhiteInput from "../../components/store/WhiteInput";
import { Icon } from "native-base";
import Feather from "@expo/vector-icons/Feather";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchBar from "../../components/store/SearchBar";
import NavBar from "../../components/store/NavBar";
import ArrowButton from "../../components/store/ArrowButton";
import BlueButton from "../../components/store/BlueButton";
import BlueInput from "../../components/store/BlueInput";

export default function TestPage({ navigation }) {
  const [formData, setData] = React.useState({});

  return (
    <ScrollView style={page_styles.container}>
      <NavBar />

      <HStack pl={"12px"} pr={"12px"}>
        <ArrowButton label="Dashboard" />
      </HStack>

      <Text
        style={page_styles.text1}
        onPress={() => navigation.navigate("About")}
      />

      <Description
        preco={"10,99€/m²"}
        descricao={
          "Pode ser utilizado em superfícies de ambientes internos como: cozinhas, banheiros, lavabos, áreas de serviços, pisos, escadas, mesas e muito mais. Para limpeza do material, nós recomendamos que se use um pano com detergente neutro ou esponja scott brite com sapólio em pó."
        }
      />
      <Characteristics resCom={6} resFlex={2} mva={6} maa={3} />

      <WhiteButton />
      <HomeFooter />
      <Box alignItems="center" bg="secondary.500">
        <Text color="white">AAABBCCD</Text>
      </Box>
      <HStack justifyContent="center" bg="secondary.500">
        <Text color="white">AAABBCCD</Text>
      </HStack>
      <Center h="300" w="300" bg="black">
        <Text color="white">Test</Text>
      </Center>
      <Box alignItems="center" bg="main.A">
        <Text color="white">Test new color</Text>
      </Box>
      <VStack paddingLeft="12px" paddingRight="12px" width={"100%"}>
        <WhiteInput
          marginTop="12px"
          label="Nome"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <WhiteInput
          marginTop="12px"
          label="Password"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </VStack>
      <VStack marginTop="12px" bg="white">
        <WhiteButton label="Submit" />
      </VStack>
      <VStack marginTop="12px">
        <BlueButton label="Botão Submit" />
        <BlueInput
          label="Insert Text"
          marginTop="12px"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
      </VStack>
    </ScrollView>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  button1: {
    width: "90%",
    justifyContent: "space-evenly",
  },

  text1: {
    color: "grey",
  },
});
