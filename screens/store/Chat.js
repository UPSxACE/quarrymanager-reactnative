import { useCallback, useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Text } from 'react-native';

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar:
            'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} testID='main'>
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
