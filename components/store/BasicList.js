import { FlatList, View, Text } from 'react-native';
import ListItem from './ListItem';

const DATA = [
  {
    id: 1,
    title: 'Mármore Preto',
    state: 'Em Processamento',
    newMessage: false,
    imageUrl: require('../../assets/Samples/marmore-preto.png'),
  },
  {
    id: 2,
    title: 'Granito Branco',
    state: 'Finalizado',
    newMessage: true,
    imageUrl: require('../../assets/Samples/granito-branco.png'),
  },

  {
    id: 3,
    title: 'Granito Cinza',
    state: 'Finalizado',
    newMessage: false,
    imageUrl: require('../../assets/Samples/granito-cinza.png'),
  },
];

function Item({ id, state, title, newMessage, imageUrl }) {
  return (
    <ListItem
      newMessage={newMessage}
      title={title}
      state={state}
      imageUrl={imageUrl}
      destiny={['HomeStack', 'Chat']}
    ></ListItem>
  );
}

function renderItem({ item }) {
  return (
    <Item
      id={item.id}
      title={item.title}
      newMessage={item.newMessage}
      state={item.state}
      imageUrl={item.imageUrl}
    />
  );
}

export default function BasicList() {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
