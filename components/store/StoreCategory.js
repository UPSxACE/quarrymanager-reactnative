import { StyleSheet, Text, Image, View, FlatList } from 'react-native';

function Item({ id, title, price, imageUrl, description }) {
  return (
    <View style={page_styles.container}>
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
          source={imageUrl}
        />

        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode={'tail'}
          style={{ fontSize: 10, paddingLeft: 5, paddingRight: 5 }}
        >
          {description}
        </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{price}</Text>
      </View>
    </View>
  );
}

function renderItem({ item }) {
  return (
    <Item
      id={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
      description={item.description}
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
          8-100
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
