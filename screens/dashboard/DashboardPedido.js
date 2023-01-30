import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import api from "../../api";
import apiconfig from "../../api-config";
import LoteDescription from "../../components/LoteDescription";

export default function DashboardPedido() {
  const params = {
    idUser0: {
      profile: {
        full_name: "Maria",
        morada: "Rua Tal",
        email: "mariabraganca@gmail.com",
        telefone: "912645123",
      },
    },
  };

  const [informacoes_lote, setInformacoesLote] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_lote, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });
      setInformacoesLote(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f5f5f5",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 12,
          paddingTop: 16,
          borderRadius: 4,
          marginHorizontal: 12,
          marginVertical: 12,

          paddingBottom: 0,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 1,
        }}
      >
        <Text style={loteDescriptionStyle.titleStyle}>
          Informações Pessoais
        </Text>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Nome:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idUser0.profile.full_name}
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Morada:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idUser0.profile.morada}
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Email:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idUser0.profile.email}
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Telefone:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idUser0.profile.telefone}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={loteDescriptionStyle.titleStyle}>
          Informações do Pedido
        </Text>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 4,
              marginTop: 8,
            }}
          >
            <Text style={loteDescriptionStyle.titleStyle}>
              Informações do Pedido
            </Text>
          </View>

          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: "row" }}>
              <Text>Material</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: "auto" }}>
              <Text style={loteDescriptionStyle.text2}>{mat}</Text>
            </View>
          </View>
          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: "row" }}>
              <Text>Cor</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: "auto" }}>
              <Text style={loteDescriptionStyle.text2}>{cor}</Text>
            </View>
          </View>
          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: "row" }}>
              <Text>Quantidade</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: "auto" }}>
              <Text style={loteDescriptionStyle.text2}>{quant}m²</Text>
            </View>
          </View>
          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: "row" }}>
              <Text>Local da extração</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: "auto" }}>
              <Text style={loteDescriptionStyle.text2}>{localex}</Text>
            </View>
          </View>
          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: "row" }}>
              <Text>Local de Armazém</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: "auto" }}>
              <Text style={loteDescriptionStyle.text2}>{localar}</Text>
            </View>
          </View>
          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: "row" }}>
              <Text>Data Extração</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: "auto" }}>
              <Text style={loteDescriptionStyle.text2}>{dataex}</Text>
            </View>
          </View>
          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: "row" }}>
              <Text>Hora Extração</Text>
            </View>
            <View style={{ flexDirection: "row", marginLeft: "auto" }}>
              <Text style={loteDescriptionStyle.text2}>{horaex}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const loteDescriptionStyle = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
    fontSize: 21,
  },
  text1: {
    color: "grey",
  },
  text2: {
    color: "#959595",
  },
  borderStyle: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#BAB9B9",
    paddingBottom: 10,
    paddingTop: 10,
    marginEnd: 4,
    marginStart: 4,
  },
});
