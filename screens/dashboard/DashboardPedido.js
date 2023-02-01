import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import api from "../../api";
import apiconfig from "../../api-config";

export default function DashboardPedido({ route }) {
  console.log("herree: ", JSON.stringify(route.params, null, 4));
  const params = route.params.full_data;

  /* const params = {
    idUser0: {
      profile: {
        full_name: "maria",
        morada: "Rua Tal",
        codPostal: "5300-304",
        email: "mariabraganca@gmail.com",
        telefone: "912645123",
      },
    },
    idProduto0: {
      tituloArtigo: "Pedra Branca",

      preco: "20",
      quantidade_vendida: "25",
      ultima_atualizacao: "23:10",
      ultimo_estado: "Recebido",
      idCor0: { nome: "Branco" },
    },
    codigo_desconto: "here",
  };

  */

  return (
    <ScrollView
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
          marginTop: 12,

          paddingBottom: 12,
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
              {params.idPedido0.idUser0.profile.full_name}
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Morada:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.idUser0.profile.morada}
            </Text>
          </View>
        </View>

        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Código Postal:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.idUser0.profile.codPostal}
            </Text>
          </View>
        </View>

        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Email:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.idUser0.profile.email}
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Telefone:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.idUser0.profile.telefone}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 12,
          paddingTop: 16,
          borderRadius: 4,
          marginHorizontal: 12,
          marginTop: 12,

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
          Informações do Pedido
        </Text>

        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Material</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.idProduto0.tituloArtigo}
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Cor</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.idProduto0.idCor0.nome}
            </Text>
          </View>
        </View>

        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Quantidade:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.idProduto0.quantidade_vendida}m²
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Código de Desconto:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.codigo_desconto
                ? params.idPedido0.codigo_desconto
                : ""}
            </Text>
          </View>
        </View>

        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Preço Inicial:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.idProduto0.preco}€
            </Text>
          </View>
        </View>

        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Preço Final:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.idProduto0.preco}€
            </Text>
          </View>
        </View>

        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Data e Hora Extração:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.ultima_atualizacao}
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: "row" }}>
            <Text>Último Estado:</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: "auto" }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.idPedido0.ultimo_estado}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
