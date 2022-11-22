import { useNavigation } from '@react-navigation/native';
import {
  Text,
  Image,
  FlatList,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function HorizontalCategory({ categoryTitle, data }) {
  const navigation = useNavigation();

  function Item({ id, title, price, imageUrl }) {
    return (
      <Pressable
        style={list_styles.item}
        onPress={() => {
          navigation.navigate('Encomendar Produto');
        }}
      >
        <View
          style={{
            elevation: 4,
            shadowColor: '#000',
            backgroundColor: 'white',
            marginTop: 12,
            borderRadius: 4,
          }}
        >
          <Image
            alt='Product Picture'
            style={page_styles.productPicture}
            source={imageUrl}
          />
        </View>

        <Text style={{ textAlign: 'center' }}>{title}</Text>
        <Text style={{ textAlign: 'center' }}>{price}</Text>
      </Pressable>
    );
  }

  function renderItem({ item }) {
    return (
      <Item
        id={item.id}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
      />
    );
  }

  return (
    <View style={list_styles.horizontalList}>
      <Text style={list_styles.text}>{categoryTitle}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const page_styles = StyleSheet.create({
  productPicture: {
    width: 130,
    height: 100,
    borderRadius: 4,
    backgroundColor: 'white',
    elevation: 10,
    alignSelf: 'center',
  },
});

const list_styles = StyleSheet.create({
  horizontalList: {
    paddingLeft: 12,
    paddingTop: 6,
    paddingBottom: 12,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  item: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 12,
  },
});
