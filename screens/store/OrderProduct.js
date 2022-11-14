import { View, StyleSheet, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    quantity: "Quantidade:",
    price: "Preço(€/m²): 10,99",
    discount: "Desconto:",
    total: "Total: ",
  },
];

function Item({ id, quantity, price, discount, total }) {
  const navigation = useNavigation();
  return (
    <View style={page_styles.container}>
      <View
        style={{
          backgroundColor: "#F8F8F8",
          marginTop: 6,
          marginBottom: 2,

          width: "100%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Pedido</Text>
      </View>
      <View
        style={{
          backgroundColor: "#F8F8F8",

          marginBottom: 6,
          width: "100%",
        }}
      >
        <Text>{quantity}</Text>
        <Text>{price}</Text>
        <Text>{discount}</Text>
        <Text>{total}</Text>
      </View>
      <View
        style={{
          backgroundColor: "#F8F8F8",
          marginTop: 6,
          marginBottom: 2,
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 18 }} onPress={() => navigation.navigate()}>
          Adicionar Código de Desconto
        </Text>
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
    <View height="100%" backgroundColor="black">
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
    width: "100%",
    alignItems: "center",
    marginLeft: 12,
    marginRight: 12,

    backgroundColor: "black",
  },
});
