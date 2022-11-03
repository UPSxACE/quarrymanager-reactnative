import { View, VStack } from 'native-base';
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

export default function TestPage2({ navigation }) {
  return (
    <View>
      <ScrollableTabs tabs={TABS_DATA} />

      <BasicList />
      <VStack pl="20px">
        <HorizontalList title="Pedidos" data={HLDATA} />
      </VStack>
    </View>
  );
}
