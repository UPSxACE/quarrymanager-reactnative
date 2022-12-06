import { StyleSheet, Text } from "react-native";
import * as React from "react";
import { Pressable, Image, View, ScrollView } from "react-native";
import WhiteInput from "../../components/store/WhiteInput";

export default function Profile({ navigation }) {
  return (
    <ScrollView style={page_styles.container}>
      <View style={page_styles.profilePictureContainer}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text>Foto de perfil</Text>

          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={{ marginLeft: "auto" }}
          >
            <Text>Editar</Text>
          </Pressable>
        </View>
        <Image
          alt="Profile Picture"
          style={page_styles.userPicture}
          source={{
            uri: "https://lighthouse.mq.edu.au/__data/assets/image/0004/917194/women-ceo-tile700x400.jpg",
          }}
        />
      </View>

      <View style={{ flexDirection: "row", width: "100%", marginTop: 12 }}>
        <Text>Dados de entrega</Text>

        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{ marginLeft: "auto" }}
        >
          <Text>Editar</Text>
        </Pressable>
      </View>
      <View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput label={"Primeiro Nome"} />
        </View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput label={"Último Nome"} />
        </View>

        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <View style={{ width: "50%", marginRight: 6 }}>
            <WhiteInput label={"Data de Nascimento"} />
          </View>

          <View style={{ width: "50%" }}>
            <WhiteInput label={"Gênero"} />
          </View>
        </View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput label={"Morada"} />
        </View>

        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <View style={{ width: "50%", marginRight: 6 }}>
            <WhiteInput label={"Código Postal"} />
          </View>

          <View style={{ width: "50%", marginRight: 6 }}>
            <WhiteInput label={"Região"} />
          </View>
        </View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput label={"Telefone"} />
        </View>
      </View>

      <View style={{ paddingBottom: 50 }}>
        <Pressable
          style={{ marginTop: 12 }}
          onPress={() => navigation.navigate("Alterar Username")}
        >
          <Text>Alterar Username</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Alterar Email")}
          style={{ marginTop: 12 }}
        >
          <Text>Alterar E-mail</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Alterar Palavra-Passe")}
          style={{ marginTop: 12 }}
        >
          <Text>Alterar Palavra-Passe</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },

  profilePictureContainer: {
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderColor: "#9FB6D4",
  },

  text1: {
    color: "grey",
  },

  userPicture: {
    width: 110,
    height: 110,
    borderRadius: 100,
    marginTop: 12,
    alignSelf: "center",
  },

  coverPicture: {
    width: "100%",
    height: 120,
  },
});
