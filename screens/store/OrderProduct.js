import { View, VStack, Text, FlatList } from "native-base";
import HorizontalList from "../../components/dashboard/HorizontalList";
import BasicList from "../../components/store/BasicList";

const DATA = ["test"];

const ORDER_DATA = [
  {
    product: "Mármore Preto",
    customer: "Eduardo Botelho",
    address: "Rua de Bragança",
    date: "17 Dez 2022 | 09:05 PM",
  },
];

function Item({ id, quantity, price, discount, total }) {
  return (
    <View style={page_styles.container}>
      <View
        style={{
          elevation: 4,
          shadowColor: "#000",
          backgroundColor: "#F8F8F8",
          marginTop: 6,
          marginBottom: 6,
          borderRadius: 4,
          alignItems: "center",
          width: 160,
          paddingTop: 12,
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
        <Text
          numberOfLines={2}
          ellipsizeMode={"tail"}
          style={{ fontSize: 10, paddingLeft: 5, paddingRight: 5 }}
        >
          {description}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{price}</Text>
      </View>
    </View>
  );
}

function renderItem({ item }) {
  return (
    <Item
      id={item.id}
      quantity={item.quantity}
      price={item.price}
      discount={item.discount}
      total={item.total}
    />
  );
}

export default function OrderProduct({ navigation }) {
  return (
    <View height="100%">
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Pedido</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    width: "50%",
    alignItems: "center",
  },

  innerContainer: {},

  productPicture: {
    width: 144,
    height: 88,
    borderRadius: 4,
    backgroundColor: "white",
    elevation: 5,
  },
});
