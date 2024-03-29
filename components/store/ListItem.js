import React from 'react';
import Badge from '../Badge';
import { Pressable, StyleSheet, Text, Image, View, Icon } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ListItem({
  id,
  newMessage,
  destiny,
  title,
  state,
  imageUrl,
  user_id,
  onPressEvent = () => {},
  orders = false,
}) {
  const navigation = useNavigation();
  const params_obj = destiny[1]
    ? {
        screen: destiny[1],
        params: { id: id, title: title, user_id: user_id },
      }
    : {
        id: id,
        title: title,
        user_id: user_id,
      };
  return (
    <Pressable
      onPress={() => {
        if (!orders) {
          onPressEvent();
        } else {
          onPressEvent(id);
        }

        if (destiny) {
          navigation.push(destiny[0], params_obj);
        }
      }}
    >
      <View style={newMessage ? new_style.container : page_styles.container}>
        <Image
          alt="Product Picture"
          style={page_styles.productPicture}
          source={{ uri: imageUrl }}
        />
        <View style={{ alignItems: 'center', flex: 1 }}>
          {newMessage && <Badge label={'Resposta!'} color="#FFFB94" />}
          <Text
            style={newMessage ? new_style.titleText : page_styles.titleText}
          >
            {title}
          </Text>
          <Text
            style={newMessage ? new_style.processText : page_styles.processText}
          >
            {state}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 12 }}>
          {destiny && (
            <Feather
              size={28}
              color={newMessage ? '#fff' : '#000'}
              name="chevron-right"
            />
          )}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {},
});

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',

    width: '100%',
    borderBottomWidth: 0.5,
    borderColor: '#6E7173',
    alignItems: 'center',
  },

  titleText: {
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 16,
  },

  processText: {
    color: '#6E7173',
    fontStyle: 'italic',
    lineHeight: 16,
  },

  productPicture: {
    width: 130,
    height: 100,
    borderRadius: 4,
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 12,
    alignSelf: 'center',
  },
});

const new_style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#7C9BC2',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#6E7173',
    alignItems: 'center',
  },

  titleText: {
    color: 'white',
    lineHeight: 16,
    fontWeight: 'bold',
  },

  processText: {
    color: 'white',
    fontStyle: 'italic',
    lineHeight: 16,
  },
});
