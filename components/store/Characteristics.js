import { View, Text, FlatList, StyleSheet } from "react-native";

const data = [
  { title: "Resistencia a Compressao", valor: "6 Mpa" },
  { title: "Resistencia a Flexao", valor: "2 Mpa" },
  { title: "Massa Volumica Aparente", valor: "6 Kg/m²" },
  { title: "Massa Absorcao de Agua", valor: "3 %" },
];

export default function Characteristics() {
  const item = ({ item }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={characteristicsStyles.textStyle1}>
          <Text>{item.title}</Text>
        </View>
        <View style={characteristicsStyles.textStyle2}>
          <Text>{item.valor}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={characteristicsStyles.flatlistStyle}>
      <FlatList
        data={data}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const characteristicsStyles = StyleSheet.create({
  flatlistStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle1: {
    width: 100,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  textStyle2: {
    width: 100,
    borderBottomWidth: 1,
    borderColor: "gray",
    alignItems: "flex-end",
  },
});
