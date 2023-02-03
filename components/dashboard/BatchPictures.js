import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import apiconfig from '../../api-config';
import { useState } from 'react';

export default function Characteristics({ horizontalPadding = 0, data }) {
  const [mode, setMode] = useState(0);

  const data2 = [
    {
      id: '1',
      pic: require('../../assets/Samples/ceramica-azul.png'),
    },
    {
      id: '2',
      pic: require('../../assets/Samples/ceramica-bege.png'),
    },
    {
      id: '3',
      pic: require('../../assets/Samples/ceramica-branca.png'),
    },
    {
      id: '4',
      pic: require('../../assets/Samples/ceramica-preta.png'),
    },
    {
      id: '5',
      pic: require('../../assets/Samples/ceramica-verde.png'),
    },
    {
      id: '6',
      pic: require('../../assets/Samples/granito-branco.png'),
    },
    {
      id: '7',
      pic: require('../../assets/Samples/granito-laranja-cinza.png'),
    },
  ];
  const Item = ({ item, index }) => {
    if ((index > 0 && index <= 4 && mode === 0) || (index > 4 && mode === 1)) {
      return (
        <Image
          style={{
            borderRadius: 4,
            marginLeft:
              index == 1
                ? 0
                : (Dimensions.get('window').width - 36 - horizontalPadding) *
                  0.05,
            height:
              (Dimensions.get('window').width - 36 - horizontalPadding) * 0.16,
            width:
              (Dimensions.get('window').width - 36 - horizontalPadding) * 0.16,
          }}
          alt="Batch picture"
          source={{
            uri:
              'http://' +
              apiconfig.serverIP +
              '/uploads/' +
              item.idFotografia0.link,
          }}
        />
      );
    } else if ((index == 5 && mode === 0) || (index == 0 && mode === 1)) {
      return (
        <Pressable
          onPress={() => {
            mode === 0 ? setMode(1) : setMode(0);
          }}
          style={{
            height:
              (Dimensions.get('window').width - 36 - horizontalPadding) * 0.16,
            width:
              (Dimensions.get('window').width - 36 - horizontalPadding) * 0.16,
            borderRadius: 4,
            marginLeft:
              (Dimensions.get('window').width - 36 - horizontalPadding) *
              (mode === 0 ? 0.05 : 0),
            marginRight:
              (Dimensions.get('window').width - 36 - horizontalPadding) *
              (mode === 0 ? 0.16 : 0),
            backgroundColor: '#394A58',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Feather
            color="#ffff"
            size={28}
            name={mode === 0 ? 'chevron-right' : 'chevron-left'}
          />
        </Pressable>
      );
    }
  };
  const renderItem = ({ item, index }) => {
    return <Item index={index} item={item}></Item>;
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <View>
        <Image
          style={{
            width: Dimensions.get('window').width - 36 - horizontalPadding,
            height: 175,
            borderRadius: 4,
          }}
          alt="Batch picture"
          source={{
            uri:
              'http://' +
              apiconfig.serverIP +
              '/uploads/' +
              data[0].idFotografia0.link,
          }}
        />
      </View>

      <FlatList
        style={{ paddingTop: 16 }}
        contentContainerStyle={{
          flexDirection: 'row',
          width: Dimensions.get('window').width - 36 - horizontalPadding,
        }}
        scrollEnabled={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
      />
    </View>
  );
}

const characteristicsStyles = StyleSheet.create({});
