import { useCallback, useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text } from 'react-native';
import {
  child,
  limitToLast,
  onValue,
  orderByKey,
  push,
  query,
  ref,
  update,
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
  const canal_nova_mensagem_ref = (id_canal) =>
    ref(firebase_db, '/pedidos-mensagens/' + id_canal);
  const ultima_mensagem_ref = (id_canal) =>
    ref(firebase_db, '/pedidos-listagem/' + id_canal + '/ultima-mensagem');
  const ultima_lida_ref = (id_canal) =>
    ref(
      firebase_db,
      '/pedidos-listagem/' + id_canal + '/ultima-mensagem/' + params.user_id
    );

  useEffect(() => {
    onValue(canal_mensagens_ref(params.id), (snapshot) => {
      //console.log('Mensagens canal ' + params.id + ': ', snapshot.val());
      const result_map = new Map();
      const result = [];
      try {
        for (const [key, value] of Object.entries(snapshot.val())) {
          if (!result_map.has(value._id)) {
            result_map.set(value._id, value);
          }
        }
        for (const [key, value] of result_map) {
          result.unshift(value);
        }
        setMessages(result);
      } catch {
        //
      }
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

    // Obter uma nova chave para a mensagem.
    const newPostKey = push(
      child(ref(firebase_db), 'pedidos-mensagens/' + params.id)
    ).key;

    const updates = {};
    updates['/pedidos-mensagens/' + params.id + '/' + newPostKey] = {
      ...newMessages[0],
      createdAt_Local: new Date().getTime(),
    };
    updates['/pedidos-listagem/' + params.id + '/ultima-mensagem/'] = {
      '.sv': 'timestamp',
    };
    updates[
      '/pedidos-listagem/' + params.id + '/ultima-lida/' + params.user_id
    ] = { '.sv': 'timestamp' };

    update(ref(firebase_db), updates);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} testID="main">
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: params.user_id,
          name: 'User',
          avatar:
            'https://lighthouse.mq.edu.au/__data/assets/image/0004/917194/women-ceo-tile700x400.jpg',
        }}
      />
    </View>
  );
}
