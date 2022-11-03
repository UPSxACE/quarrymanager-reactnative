import { View, VStack, Text, FlatList } from 'native-base';

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
  'test',
  'test',
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
      <Text>Footer Component</Text>
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
