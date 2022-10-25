import { StyleSheet, View, Button } from "react-native";
import HomeFooter from "../../components/store/HomeFooter";
import WhiteButton from "../../components/store/WhiteButton";
import { Box, Text, HStack, VStack, Center } from "native-base";
import WhiteInput from "../../components/store/WhiteInput";
import { Icon } from "native-base";
import Feather from "@expo/vector-icons/Feather";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchBar from "../../components/store/SearchBar";

export default function TestPage({ navigation }) {
  const [formData, setData] = React.useState({});

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
      <Text
        style={page_styles.text1}
        onPress={() => navigation.navigate("About")}
      >
        Teste
      </Text>
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
