import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import BasicLoader from '../../components/BasicLoader';
import BasicList from '../../components/store/BasicList';
import ScrollableTabs from '../../components/store/ScrollableTabs';
import StoreCategory from '../../components/store/StoreCategory';
import * as SplashScreen from 'expo-splash-screen';

export default function Orders() {
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
      <BasicList />
    </View>
  );
}
