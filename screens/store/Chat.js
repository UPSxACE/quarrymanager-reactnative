import { useCallback, useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text } from 'react-native';
import {
  limitToLast,
  onValue,
  orderByKey,
  query,
  ref,
} from 'firebase/database';
import { firebase_db } from '../../firebase';

export default function Chat({ route }) {
  const [messages, setMessages] = useState([]);
  const params = route.params;
  const canal_mensagens_ref = (id_canal) =>
    query(
      ref(firebase_db, '/pedidos-mensagens/' + id_canal),
      orderByKey('createdAt'),
      limitToLast(100)
    );
  console.log(params);

  useEffect(() => {
    onValue(canal_mensagens_ref(params.id), (snapshot) => {
      console.log('Mensagens canal ' + params.id + ': ', snapshot.val());
      const result_map = new Map();
      const result = [];
      for (const [key, value] of Object.entries(snapshot.val())) {
        if (!result_map.has(value._id)) {
          result_map.set(value._id, value);
        }
      }
      for (const [key, value] of result_map) {
        result.unshift(value);
      }
      setMessages(result);
    });
    /*
    setMessages([
      {
        _id: 1,
        text: 'Os dados de morada são inválidos.\nPeço que nos envie a morada e código postal corretos.',
        //Enviaremos a sua encomenda o mais rápido possível. Obrigado.
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar:
            'https://lighthouse.mq.edu.au/__data/assets/image/0004/917194/women-ceo-tile700x400.jpg',
        },
      },
    ]);
    */
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} testID="main">
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
}
