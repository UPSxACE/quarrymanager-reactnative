import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../api';
import apiconfig from '../../api-config';
import DashboardCard from '../../components/dashboard/DashboardCard';
import HorizontalList from '../../components/dashboard/HorizontalList';

const HLDATA = [
  {
    product: 'Mármore Preto',
    customer: 'Eduardo Botelho',
    address: 'Rua de Bragança',
    date: '17 Dez 2022 | 09:05 PM',
  },
  {
    product: 'Mármore Preto',
    customer: 'Monique dos Santos',
    address: 'Rua Av. das Azeitonas',
    date: '17 Dez 2022 | 08:17 PM',
  },
  {
    product: 'Mármore Branco',
    customer: 'Eduardo Botelho',
    address: 'Rua de Bragança',
    date: '17 Dez 2022 | 06:09 PM',
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
  const [info_transportadora, setInfoTransportadora] = useState([]);
  const [info_produto, setInfoProduto] = useState([]);
  const [info_pedido, setInfoPedido] = useState(false);

  // LISTAR STATUS (CARDS)
  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_status, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setInfoStatus(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  // LISTAR TRANSPORTADORAS
  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_transportadora, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setInfoTransportadora(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  // LISTAR PRODUTOS
  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_produto, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setInfoProduto(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  // LISTAR PEDIDOS
  useEffect(() => {
    const sendRequest = async () => {
      const result = await axios.get(api.listar_pedido, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setInfoPedido(result.data);
    };

    sendRequest().catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <FlatList
      ListHeaderComponent={() => (
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 16,
            }}
          >
            <View style={{ width: '50%', paddingRight: 8, marginBottom: 16 }}>
              <DashboardCard
                pedidos={info_status.pendentes}
                label="Pendentes"
                cardColor="#F69624"
              />
            </View>
            <View style={{ width: '50%', paddingLeft: 8 }}>
              <DashboardCard
                style={{ marginLeft: 'auto' }}
                pedidos={info_status.confirmados}
                label="Confirmados"
                cardColor="#3468ED"
              />
            </View>
            <View style={{ width: '50%', paddingRight: 8, marginBottom: 16 }}>
              <DashboardCard
                pedidos={info_status.cancelados}
                label="Cancelados"
                cardColor="#EB3E26"
              />
            </View>
            <View style={{ width: '50%', paddingLeft: 8 }}>
              <DashboardCard
                style={{ marginLeft: 'auto' }}
                pedidos={info_status.finalizados}
                label="Finalizados"
                cardColor="#2CA739"
              />
            </View>
          </View>

          <View>
            <HorizontalList
              title="Pedidos"
              data={info_pedido ? info_pedido : []}
              mainText="full_name"
              subText="morada"
              date="dataEstado"
              tag="tituloArtigo"
              subTextPedido
              mainTextPedido
              tagPedido
            />
          </View>
          <View style={{ marginTop: 12 }}>
            <HorizontalList
              title="Transportadoras"
              data={info_transportadora}
              mainText="nome"
            />
          </View>
          <View style={{ marginTop: 12 }}>
            <HorizontalList
              title="Produtos"
              data={info_produto}
              mainText="tituloArtigo"
            />
          </View>
        </View>
      )}
    />
  );
}
