import { useCallback, useEffect, useState } from 'react';
import { GiftedChat, MessageImage } from 'react-native-gifted-chat';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {
  child,
  limitToLast,
  onValue,
  orderByKey,
  push,
  query,
  ref,
  set,
  update,
} from 'firebase/database';
import { firebase_db } from '../../firebase';
import api from '../../api';
import apiconfig from '../../api-config';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';

export default function Chat({ route }) {
  const isFocused = useIsFocused();
  const [messages, setMessages] = useState([]);
  const params = route.params;
  const canal_mensagens_ref = (id_canal) =>
    query(
      ref(firebase_db, '/pedidos-mensagens/' + id_canal),
      orderByKey('createdAt'),
      limitToLast(100)
    );
  const ultima_lida_ref = (id_canal) =>
    ref(
      firebase_db,
      '/pedidos-listagem/' + id_canal + '/ultima-lida/' + params.user_id
    );

  useEffect(() => {
    onValue(canal_mensagens_ref(params.id), (snapshot) => {
      const result_map = new Map();
      const result = [];
      if (isFocused) {
        set(ultima_lida_ref(params.id), Date.now());
      }
      try {
        for (const [key, value] of Object.entries(snapshot.val())) {
          if (!result_map.has(value._id)) {
            result_map.set(value._id, value);
          }
        }
        for (const [key, value] of result_map) {
          if (value.anexos) {
            let string_result = '';
            value.anexos.map((img_link, index) => {
              if (index !== 0) {
                string_result +=
                  ',' + 'http://' + apiconfig.serverIP + '/uploads/' + img_link;
                return;
              }
              string_result +=
                'http://' + apiconfig.serverIP + '/uploads/' + img_link;
              return;
            });
            value.image = string_result;
            /*
            value.image =
              'http://' + apiconfig.serverIP + '/uploads/' + value.anexos[0];*/
          }
          result.unshift(value);
        }
        setMessages(result);
      } catch {
        //
      }
    });
  }, []);

  async function notificar(titulo, mensagem) {
    result = await axios.post(
      api.notificar_gestores,
      {
        titulo,
        mensagem,
        pessoas_a_notificar: [1],
      },
      { headers: await api.gerar_auth_header() }
    );

    return result;
  }

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
    await update(ref(firebase_db), updates);
    notificar(params.title, newMessages[0].text).catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }, []);

  const customMessageImages = (props) => {
    const getRadius = (index) => {
      const amount_of_radius = 8;
      switch (index) {
        case 0:
          return { borderTopLeftRadius: amount_of_radius };
        case 1:
          return { borderTopRightRadius: amount_of_radius };
        case 2:
          return { borderBottomLeftRadius: amount_of_radius };
        case 3:
          return { borderBottomRightRadius: amount_of_radius };
      }
    };

    if (props.currentMessage.image) {
      const imgs = props.currentMessage.image.split(',');
      return (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            minWidth: 200,
          }}
        >
          {imgs.map((img, index) => (
            <MessageImage
              key={index}
              containerStyle={{
                minHeight: 93.5,
                minWidth: 93.5,
                width: '50%',
                padding: 2,
              }}
              lightboxProps={{
                style: {
                  minHeight: 93.5,
                  minWidth: 93.5,
                  width: '50%',
                },
              }}
              imageStyle={{
                minHeight: 93.5,
                minWidth: 93.5,
                flex: 1,
                borderRadius: 0,
                ...getRadius(index),
              }}
              imageProps={{
                style: {
                  minHeight: 93.5,
                  minWidth: 93.5,
                  width: '50%',
                },
              }}
              currentMessage={{
                image: img,
              }}
            />
          ))}
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1 }} testID="main">
      <GiftedChat
        renderMessageImage={(props) => {
          return customMessageImages(props);
        }}
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
