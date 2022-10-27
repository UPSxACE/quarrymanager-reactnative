import { StyleSheet, Text, View, Button } from "react-native";

import * as React from "react";

import {
  Center,
  HStack,
  Pressable,
  Image,
  VStack,
  ScrollView,
} from "native-base";
import WhiteInput from "../../components/store/WhiteInput";

export default function Profile({ navigation }) {
  return (
    <ScrollView style={page_styles.container}>
      <VStack
        paddingBottom={"12px"}
        borderBottomWidth={"1px"}
        borderColor={"gray.300"}
      >
        <HStack w={"100%"}>
          <Text>Foto de perfil</Text>

          <Pressable onPress={() => navigation.navigate("Home")} ml={"auto"}>
            <Text>Editar</Text>
          </Pressable>
        </HStack>
        <Image
          marginTop={"12px"}
          alignSelf={"center"}
          alt="Profile Picture"
          style={page_styles.userPicture}
          source={{
            uri: "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg",
          }}
        />
      </VStack>
      <HStack w={"100%"} marginTop={"12px"}>
        <Text>Foto de capa</Text>
        <Pressable onPress={() => navigation.navigate("Home")} ml={"auto"}>
          <Text>Editar</Text>
        </Pressable>
      </HStack>
      <Image
        marginTop={"12px"}
        alt="Profile Picture"
        style={page_styles.coverPicture}
        source={{
          uri: "https://www.nit.pt/wp-content/uploads/2022/09/78805a221a988e79ef3f42d7c5bfd418-4.jpg",
        }}
      />
      <HStack w={"100%"} marginTop={"12px"}>
        <Text>Dados de entrega</Text>

        <Pressable onPress={() => navigation.navigate("Home")} ml={"auto"}>
          <Text>Editar</Text>
        </Pressable>
      </HStack>
      <VStack>
        <WhiteInput label={"Primeiro Nome"} marginTop={"12px"} />
        <WhiteInput label={"Último Nome"} marginTop={"12px"} />
        <HStack>
          <WhiteInput
            w={"50%"}
            label={"Data de Nascimento"}
            marginTop={"12px"}
            marginRight={"6px"}
          />
          <WhiteInput w={"50%"} label={"Gênero"} marginTop={"12px"} />
        </HStack>
        <WhiteInput label={"Morada"} marginTop={"12px"} />
        <HStack>
          <WhiteInput
            w={"50%"}
            label={"Código Postal"}
            marginTop={"12px"}
            marginRight={"6px"}
          />
          <WhiteInput
            w={"50%"}
            label={"Região"}
            marginTop={"12px"}
            marginRight={"6px"}
          />
        </HStack>
        <WhiteInput label={"Telefone"} marginTop={"12px"} />
      </VStack>

      <VStack marginTop={"12px"} paddingBottom={"50px"}>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text>Alterar Username</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          marginTop={"12px"}
        >
          <Text>Alterar E-mail</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          marginTop={"12px"}
        >
          <Text>Alterar Palavra-Passe</Text>
        </Pressable>
      </VStack>
    </ScrollView>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },

  text1: {
    color: "grey",
  },

  userPicture: {
    width: 110,
    height: 110,
    borderRadius: 100,
  },

  coverPicture: {
    width: "100%",
    height: 120,
  },
});
