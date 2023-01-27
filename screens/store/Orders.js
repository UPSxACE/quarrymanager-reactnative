import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import BasicLoader from '../../components/BasicLoader';
import BasicList from '../../components/store/BasicList';
import ScrollableTabs from '../../components/store/ScrollableTabs';
import StoreCategory from '../../components/store/StoreCategory';
import * as SplashScreen from 'expo-splash-screen';
import { firebase_db } from '../../firebase';
import {
  limitToLast,
  onValue,
  orderByKey,
  query,
  ref,
  set,
} from 'firebase/database';

export default function Orders() {
  const user = '-NMi-_Mpex6W2O4PMLKf';
  const [channel_list, setChannels] = useState(new Map());

  // get canais de um usuário
  const canais_lista_ref = ref(firebase_db, '/pedidos-canais/' + user);
  const canal_info_ref = (id_canal) =>
    query(ref(firebase_db, '/pedidos-listagem/' + id_canal), limitToLast(25));

  function updateChannels(key, value) {
    // prevenir erro caso channels não seja um map
    if (channel_list) {
      setChannels(new Map(channel_list.set(key, value)));
    }
  }

  useEffect(() => {
    onValue(canais_lista_ref, (snapshot) => {
      try {
        for (const [key, value] of Object.entries(snapshot.val())) {
          // caso o mapa de canais já contenha este canal não executar código
          if (!channel_list.has(key)) {
            //updateChannels(key, {});
            onValue(canal_info_ref(key), (snapshot) => {
              //console.log('Valor canal_info: ', snapshot);
              updateChannels(key, snapshot.val());
            });
          }
        }
      } catch {
        //
      }
    });
  }, []);

  useEffect(() => {}, [channel_list]);

  const [category, setCategory] = useState();
  const TABS_DATA = ['Todos', 'Ativos', 'Finalizados', 'Favoritos'];
  const CATEGORY_DATA = [
    {
      id: 1,
      title: 'Mármore Preto',
      description:
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ',
      price: '202,99',
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
    {
      id: 2,
      title: 'Mármore Preto',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '202,99',
      imageUrl: require('../../assets/Samples/marmore-preto.png'),
    },
  ];

  return (
    <View>
      <ScrollableTabs
        tabs={TABS_DATA}
        setSearch={setCategory}
        style={{ backgroundColor: 'white', elevation: 15, zIndex: 1 }}
      />
      <BasicList data={channel_list} user_id={user} />
    </View>
  );
}
