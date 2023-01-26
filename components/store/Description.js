import { Text, StyleSheet, View, Button } from "react-native";
import BlueButton from "./BlueButton";
import { useNavigation } from "@react-navigation/native";

export default function Description({
  descricao,
  preco,
  title,
  refr,
  imageUrl,
}) {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={descriptionStyles.alignHead}>
        <View>
          <Text style={descriptionStyles.headerText}>Descrição</Text>
        </View>
        <View style={descriptionStyles.rightText}>
          <Text style={descriptionStyles.headerText}>{preco + "€/m²"}</Text>
        </View>
      </View>
      <View style={descriptionStyles.alignText}>
        <Text style={descriptionStyles.descriptionText}>{descricao}</Text>
      </View>
      <View style={descriptionStyles.alignDiv}>
        <View style={{ width: 130 }}>
          <BlueButton
            label={"Pedir orçamento"}
            onPressEvent={() => {
              navigation.push("Pedido de Orçamento", {
                title,
                preco,
                imageUrl,
                refr,
                profile: {
                  firstName: "Maria",
                  lastName: "15/12/1994",
                  gender: "Feminino",
                  address: "Rua Bragança, nº123",
                  zipCode: "5300-123",
                  city: "Bragança",
                  phone: "+351987123456",
                },
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const descriptionStyles = StyleSheet.create({
  alignDiv: {
    alignItems: "flex-end",
    width: "100%",
    padding: 12,
    paddingTop: 0,
  },
  alignText: {
    padding: 12,
    paddingTop: 0,
    fontSize: 12,
  },
  alignHead: {
    margin: 12,
    flexDirection: "row",
    borderBottomWidth: 1,
  },

  rightText: {
    marginLeft: "auto",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },

  descriptionText: {
    fontSize: 14,
  },
});
