import HorizontalCategory from '../../components/store/HorizontalCategory';
import { View } from 'react-native';
import HorizontalList from '../../components/dashboard/HorizontalList';
import BasicList from '../../components/store/BasicList';
import ScrollableTabs from '../../components/store/ScrollableTabs';

const TABS_DATA = [
  'Mármores',
  'Granitos',
  'Esmeraldas',
  'Diamantes',
  'Porcelana',
  'Pedras',
  'Rochas',
  'Favoritos',
];

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

const CATEGORY_DATA = [
  {
    id: 1,
    title: 'Mármore Preto',
    price: '10.99€/m²',
    imageUrl: require('../../assets/Samples/marmore-preto.png'),
  },
  {
    id: 2,
    title: 'Mármore Branco',
    price: '10.99€/m²',
    imageUrl: require('../../assets/Samples/marmore-branco.png'),
  },
  {
    id: 3,
    title: 'Mármore Cinza',
    price: '10.99€/m²',
    imageUrl: require('../../assets/Samples/granito-cinza.png'),
  },
];

export default function TestPage2({ navigation }) {
  return (
    <View>
      <ScrollableTabs tabs={TABS_DATA} />
      <BasicList />
      <HorizontalCategory categoryTitle={'Mármores'} data={CATEGORY_DATA} />
      <View style={{ paddingLeft: 20 }}>
        <HorizontalList
          title="Pedidos"
          data={HLDATA}
          mainText="customer"
          date="date"
        />
      </View>
    </View>
  );
}
