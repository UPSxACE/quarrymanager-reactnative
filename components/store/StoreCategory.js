import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import apiconfig from '../../api-config';

function Item({ id, title, price, imageUrl, description }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={page_styles.container}
      onPress={() => {
        navigation.push('Produto', { id, title, price, imageUrl });
      }}
    >
      <View
        style={{
          elevation: 4,
          shadowColor: '#000',
          backgroundColor: '#F8F8F8',
          marginTop: 6,
          marginBottom: 6,
          borderRadius: 4,
          alignItems: 'center',
          width: 160,
          paddingTop: 12,
          paddingBottom: 10,
        }}
      >
        <Image
          alt="Product Picture"
          style={page_styles.productPicture}
          source={{ uri: imageUrl }}
        />

        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode={'tail'}
          style={{
            fontSize: 10,
            paddingLeft: 5,
            paddingRight: 5,
            textAlign: 'center',
          }}
        >
          {description}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          {price + '€/m²'}
        </Text>
      </View>
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
      description={item.descricaoProduto}
    />
  );
}

export default function StoreCategory({ categoryResults, data }) {
  return (
    <View
      style={{
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 12,
      }}
    >
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
          {categoryResults.toUpperCase()}
        </Text>
        <Text style={{ fontSize: 16, marginLeft: 'auto', color: '#a8a29e' }}>
          {data.length + ' / ' + data.length}
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
  },

  innerContainer: {},

  productPicture: {
    width: 144,
    height: 88,
    borderRadius: 4,
    backgroundColor: 'white',
    elevation: 5,
  },
});
