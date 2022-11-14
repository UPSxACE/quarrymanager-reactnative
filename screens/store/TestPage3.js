import { View, Text, FlatList } from 'react-native';
import HorizontalList from '../../components/dashboard/HorizontalList';

const DATA = [
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
  'test',
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

function Header() {
  return (
    <View>
      <Text>Header Component</Text>
    </View>
  );
}

function Footer() {
  return (
    <View>
      <HorizontalList
        title="Pedidos"
        data={HLDATA}
        mainText="customer"
        subText="address"
        date="date"
        tag="product"
      />
      <HorizontalList
        title="Pedidos"
        data={HLDATA}
        mainText="customer"
        date="date"
      />
      <HorizontalList title="Pedidos" data={HLDATA} mainText="customer" />
    </View>
  );
}

function renderItem({ item }) {
  return (
    <View>
      <Text>{item}</Text>
    </View>
  );
}

export default function TestPage3({ navigation }) {
  return (
    <View height="100%">
      <Text>Conteúdo em cima</Text>
      <FlatList
        ListHeaderComponent={<Header />}
        ListFooterComponent={<Footer />}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        data={DATA}
      ></FlatList>
      <Text>Conteúdo em baixo</Text>
    </View>
  );
}
