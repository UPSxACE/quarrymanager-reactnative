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
      <View
        style={{
          flexDirection: "row",
          width: "100%",
        }}
      >
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
      <View style={characteristicsStyles.alignHead}>
        <View>
          <Text style={characteristicsStyles.headerText}>Características</Text>
        </View>
      </View>
      <FlatList
        style={{ width: "100%" }}
        scrollEnabled={false}
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
    padding: 12,
    width: "100%",
  },
  textStyle1: {
    width: "50%",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  textStyle2: {
    width: "50%",
    borderBottomWidth: 1,
    borderColor: "gray",
    alignItems: "flex-end",
  },
  alignHead: {
    margin: 12,
    flexDirection: "row",
    borderBottomWidth: 1,
    width: "100%",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
