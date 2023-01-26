import { StyleSheet, Text } from "react-native";
import * as React from "react";
import { Pressable, Image, View, ScrollView } from "react-native";
import WhiteInput from "../../components/store/WhiteInput";
import { useEffect } from "react";
import axios from "axios";
import api from "../../api";
import { useState } from "react";
import apiconfig from "../../api-config";

export default function Profile({ navigation }) {
  const [informacoes_profile, setInformacoesProfile] = useState({});

  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_profile, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setInformacoesProfile(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <ScrollView style={page_styles.container}>
      <View style={page_styles.profilePictureContainer}>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text>Foto de perfil</Text>

          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={{ marginLeft: "auto" }}
          >
            <Text style={{ color: "#0050A7" }}>Editar</Text>
          </Pressable>
        </View>
        <Image
          alt="Profile Picture"
          style={page_styles.userPicture}
          source={{
            uri:
              "http://" +
              apiconfig.serverIP +
              "/uploads/" +
              informacoes_profile.profilePic,
          }}
        />
      </View>

      <View style={{ flexDirection: "row", width: "100%", marginTop: 12 }}>
        <Text>Dados de entrega</Text>

        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{ marginLeft: "auto" }}
        >
          <Text style={{ color: "#0050A7" }}>Editar</Text>
        </Pressable>
      </View>
      <View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput
            editable={false}
            label={"Nome Completo"}
            value={
              informacoes_profile.full_name ? informacoes_profile.full_name : ""
            }
          />
        </View>

        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <View style={{ width: "50%", marginRight: 6 }}>
            <WhiteInput
              editable={false}
              label={"Data de Nascimento"}
              value={
                informacoes_profile.dataNascimento
                  ? informacoes_profile.dataNascimento
                  : ""
              }
            />
          </View>

          <View style={{ width: "50%" }}>
            <WhiteInput
              editable={false}
              label={"Gênero"}
              value={
                informacoes_profile.genero ? informacoes_profile.genero : ""
              }
            />
          </View>
        </View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput
            editable={false}
            label={"Morada"}
            value={informacoes_profile.morada ? informacoes_profile.morada : ""}
          />
        </View>

        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <View style={{ width: "50%", marginRight: 6 }}>
            <WhiteInput
              editable={false}
              label={"Código Postal"}
              value={
                informacoes_profile.codPostal
                  ? informacoes_profile.codPostal
                  : ""
              }
            />
          </View>

          <View style={{ width: "50%", marginRight: 6 }}>
            <WhiteInput
              editable={false}
              label={"Localidade"}
              value={
                informacoes_profile.localidade
                  ? informacoes_profile.localidade
                  : ""
              }
            />
          </View>
        </View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput
            editable={false}
            label={"Telefone"}
            value={
              informacoes_profile.telefone ? informacoes_profile.telefone : ""
            }
          />
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
