import { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import apiconfig from '../../api-config';
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

export default function BasicList({
  data,
  user_id,
  onPressEvent,
  orders = false,
}) {
  const [channels, setChannels] = useState([]);

  function Item({ id, state, title, newMessage, imageUrl }) {
    return (
      <ListItem
        id={id}
        newMessage={newMessage}
        title={title}
        state={state}
        imageUrl={imageUrl}
        destiny={['Chat', '']}
        user_id={user_id}
        onPressEvent={onPressEvent}
        orders={orders}
      ></ListItem>
    );
  }

  function renderItem({ item }) {
    return (
      <Item
        id={item.id}
        title={item.titulo}
        newMessage={
          item['ultima-mensagem'] > item['ultima-lida'][user_id] ? true : false
        }
        state={item.estado}
        imageUrl={'http://' + apiconfig.serverIP + '/uploads/' + item.pic}
      />
    );
  }

  useEffect(() => {
    const result = [];
    for (let [key, value] of data) {
      result.unshift({ ...value, id: key });
    }
    setChannels(result);
  }, [data]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={channels}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
