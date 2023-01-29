import { useCallback, useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
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
import api from '../../api';
import apiconfig from '../../api-config';

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
          if (value.anexos) {
            value.image =
              'http://' + apiconfig.serverIP + '/uploads/' + value.anexos[0];
          }
          result.unshift(value);
        }
        setMessages(result);
      } catch {
        //
      }
    });
  }, []);

  const onSend = useCallback(async (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    // Obter uma nova chave para a mensagem.
    const newPostKey = push(
      child(ref(firebase_db), 'pedidos-mensagens/' + params.id)
    ).key;

    let updates = {};
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

    await update(ref(firebase_db), updates);
    updates = {};
    updates[
      '/pedidos-mensagens/' + params.id + '/' + newPostKey + '/sent'
    ] = true;
    update(ref(firebase_db), updates);
  }, []);

  return (
    <View style={{ flex: 1 }} testID="main">
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: params.user_id,
          name: 'User',
          avatar:
            'https://lighthouse.mq.edu.au/__data/assets/image/0004/917194/women-ceo-tile700x400.jpg',
        }}
        messagesContainerStyle={
          Platform.OS === 'android'
            ? {
                marginTop: -30,
              }
            : false
        }
        listViewProps={
          Platform.OS === 'android'
            ? {
                style: { flex: 1, marginBottom: -30, backgroundColor: 'white' },
              }
            : false
        }
      />
    </View>
  );
}
