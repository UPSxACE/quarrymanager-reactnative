import { useNavigation } from '@react-navigation/native';
import {
  Text,
  Image,
  FlatList,
  View,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import apiconfig from '../../api-config';
import { themeColors } from '../../Theme';

export default function HorizontalCategory({ categoryTitle, data }) {
  const navigation = useNavigation();

  //console.log('GG:', data);

  function Item({ id, title, price, imageUrl }) {
    return (
      <Pressable
        style={list_styles.item}
        onPress={() => {
          navigation.push('Produto', { id, title, price, imageUrl });
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
            alt="Product Picture"
            style={page_styles.productPicture}
            source={{ uri: imageUrl }}
          />
        </View>

        <Text style={{ textAlign: 'center' }}>{title}</Text>
        <Text style={{ textAlign: 'center' }}>{price + '€/m²'}</Text>
      </Pressable>
    );
  }

  function renderItem({ item }) {
    return (
      <Item
        id={item.id}
        title={item.tituloArtigo}
        price={item.preco}
        imageUrl={
          'http://' + apiconfig.serverIP + '/uploads/' + item.url_fotografia
        }
      />
    );
  }

  return (
    <View style={list_styles.horizontalList}>
      <Text style={list_styles.text}>{categoryTitle}</Text>
      {data.length !== 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 150,
            width: '100%',
          }}
        >
          <ActivityIndicator size={80} color={themeColors.main.A} />
        </View>
      )}
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
    flex: 1,
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
