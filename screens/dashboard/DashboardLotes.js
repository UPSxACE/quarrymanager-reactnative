import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { useEffect } from "react";
import { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import PagerView from "react-native-pager-view";
import api from "../../api";
import apiconfig from "../../api-config";
import BatchPictures from "../../components/dashboard/BatchPictures";
import LoteDescription from "../../components/LoteDescription";
import { themeColors } from "../../Theme";

export default function DashboardLotes() {
  const [position, setPosition] = useState(0);
  const PagerViewRef = useRef(PagerView);

  const data = [
    {
      mat: "Mármore",
      cor: "Laranja",
      quant: "425m^2",
      localex: "Moca",
      localar: "Areeiro da Serra",
      dataex: "2022-04-22",
      horaex: "23:19:01",
    },
    {
      mat: "Granito",
      cor: "Preto",
      quant: "300m^2",
      localex: "Moca",
      localar: "Areeiro da Serra",
      dataex: "2022-04-22",
      horaex: "23:19:01",
    },
    {
      mat: "Mármore",
      cor: "Laranja",
      quant: "500m^2",
      localex: "Moca",
      localar: "Areeiro da Serra",
      dataex: "2022-04-22",
      horaex: "23:19:01",
    },
    {
      mat: "Mármore",
      cor: "Brancp",
      quant: "235m^2",
      localex: "Moca",
      localar: "Areeiro da Serra",
      dataex: "2022-04-22",
      horaex: "23:19:01",
    },
  ];

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
        backgroundColor: themeColors.main.dashboardBackground,
      }}
    >
      <PagerView
        style={styles.viewPager}
        initialPage={0}
        onPageSelected={(pageSelected) => {
          //console.log(pageSelected.nativeEvent.position);
          setPosition(pageSelected.nativeEvent.position);
        }}
        ref={PagerViewRef}
      >
        {informacoes_lote.map((obj, index) => {
          return (
            <View
              style={{
                padding: 16,
                paddingBottom: 8,
                flex: 1,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 4,
              }}
              key={index + 1}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 12,
                  paddingTop: 16,
                  borderRadius: 4,
                  flex: 1,
                  overflow: "scroll",
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
                <BatchPictures horizontalPadding={32} />

                <ScrollView>
                  <LoteDescription
                    mat={obj.idProduto0.idMaterial0.nome}
                    cor={obj.idProduto0.idCor0.nome}
                    quant={obj.quantidade}
                    localex={obj.idLocalExtracao0.nome}
                    localar={obj.idLocalArmazem0.nome}
                    dataex={obj.dataHora}
                    horaex={obj.dataHora}
                    codLote={obj.codigo_lote}
                  />
                </ScrollView>

                <Text>{obj.text}</Text>
              </View>
            </View>
          );
        })}
      </PagerView>
      <View
        style={{
          padding: 16,
          paddingTop: 8,
          borderRadius: 4,
          height: 80,
          overflow: "scroll",
        }}
      >
        <View
          style={{
            flex: 1,
            paddingVertical: 12,
            borderRadius: 4,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              height: 54,
              backgroundColor: "white",
              justifyContent: "center",
              marginRight: "auto",
              backgroundColor: "white",
              paddingHorizontal: 12,
            }}
            onPress={() => {
              PagerViewRef.current.setPage(position - 1);
            }}
          >
            <Feather size={28} name="chevron-left" />
          </Pressable>
          <Text style={{ fontSize: 20, lineHeight: 24 }}>
            {position + 1}/{informacoes_lote.length}
          </Text>
          <Pressable
            style={{
              height: 54,
              backgroundColor: "white",
              justifyContent: "center",
              marginLeft: "auto",
              backgroundColor: "white",
              paddingHorizontal: 12,
            }}
            onPress={() => {
              PagerViewRef.current.setPage(position + 1);
            }}
          >
            <Feather size={28} name="chevron-right" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    padding: 12,
  },

  titleStyle: {
    fontWeight: "bold",
    fontSize: 21,
  },
});
