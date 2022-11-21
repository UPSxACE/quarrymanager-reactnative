import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Characteristics({ horizontalPadding = 0 }) {
  const data = [
    {
      id: '1',
      pic: {
        uri: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg',
      },
    },
    {
      id: '2',
      pic: {
        uri: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg',
      },
    },
    {
      id: '3',
      pic: {
        uri: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg',
      },
    },
    {
      id: '4',
      pic: {
        uri: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg',
      },
    },
    {
      id: '5',
      pic: {
        uri: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg',
      },
    },
    {
      id: '6',
      pic: {
        uri: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg',
      },
    },
    {
      id: '7',
      pic: {
        uri: 'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg',
      },
    },
  ];
  const Item = ({ item, index }) => {
    if (index > 0 && index <= 4) {
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
          source={item.pic}
        />
      );
    } else if (index == 5) {
      return (
        <View
          style={{
            height:
              (Dimensions.get('window').width - 36 - horizontalPadding) * 0.16,
            width:
              (Dimensions.get('window').width - 36 - horizontalPadding) * 0.16,
            borderRadius: 4,
            marginLeft:
              (Dimensions.get('window').width - 36 - horizontalPadding) * 0.05,
            marginRight:
              (Dimensions.get('window').width - 36 - horizontalPadding) * 0.16,
            backgroundColor: '#394A58',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Feather color="#ffff" size={28} name="chevron-right" />
        </View>
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
          source={data[0].pic}
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
