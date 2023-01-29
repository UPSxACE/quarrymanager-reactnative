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

  return (
    <View style={{ flex: 1 }}>
      <ScrollableTabs tabs={TABS_DATA} setSearch={setCategory} />
      <BasicList data={channel_list} user_id={user} />
    </View>
  );
}
