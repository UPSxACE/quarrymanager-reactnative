import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import api from "../../api";
import apiconfig from "../../api-config";
import DashboardCard from "../../components/dashboard/DashboardCard";
import HorizontalList from "../../components/dashboard/HorizontalList";

const HLDATA = [
  {
    product: "Mármore Preto",
    customer: "Eduardo Botelho",
    address: "Rua de Bragança",
    date: "17 Dez 2022 | 09:05 PM",
  },
  {
    product: "Mármore Preto",
    customer: "Monique dos Santos",
    address: "Rua Av. das Azeitonas",
    date: "17 Dez 2022 | 08:17 PM",
  },
  {
    product: "Mármore Branco",
    customer: "Eduardo Botelho",
    address: "Rua de Bragança",
    date: "17 Dez 2022 | 06:09 PM",
  },
];

export default function DashboardHome() {
  /*return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      //onLayout={onLayoutRootView}
    >
      <Text>Loading...</Text>
      <ActivityIndicator size={'large'} />
    </View>
  );*/

  const [info_status, setInfoStatus] = useState({});

  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_status, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });
      console.log(info_status);
      setInfoStatus(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: 16,
        }}
      >
        <View style={{ width: "50%", paddingRight: 8, marginBottom: 16 }}>
          <DashboardCard
            pedidos={info_status.pendentes}
            label="Pendentes"
            cardColor="#F69624"
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 8 }}>
          <DashboardCard
            style={{ marginLeft: "auto" }}
            pedidos={info_status.confirmados}
            label="Confirmados"
            cardColor="#3468ED"
          />
        </View>
        <View style={{ width: "50%", paddingRight: 8, marginBottom: 16 }}>
          <DashboardCard pedidos="938" label="Cancelados" cardColor="#EB3E26" />
        </View>
        <View style={{ width: "50%", paddingLeft: 8 }}>
          <DashboardCard
            style={{ marginLeft: "auto" }}
            pedidos="10 mil"
            label="Finalizados"
            cardColor="#2CA739"
          />
        </View>
      </View>

      <View>
        <View>
          <HorizontalList
            title="Pedidos"
            data={HLDATA}
            mainText="customer"
            subText="address"
            date="date"
            tag="product"
          />
        </View>
        <View style={{ marginTop: 12 }}>
          <HorizontalList
            title="Transportadoras"
            data={HLDATA}
            mainText="customer"
          />
        </View>
        <View style={{ marginTop: 12 }}>
          <HorizontalList title="Produtos" data={HLDATA} mainText="customer" />
        </View>
      </View>
    </View>
  );
}
