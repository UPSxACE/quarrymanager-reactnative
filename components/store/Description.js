import { Button } from "native-base";
import { Text, StyleSheet } from "react-native";
import { View, HStack, VStack } from "native-base";

export default function Description({ descricao, preco }) {
  return (
    <View>
      <View style={descriptionStyles.alignHead}>
        <View>
          <Text style={descriptionStyles.headerText}>Descrição</Text>
        </View>
        <View style={descriptionStyles.rightText}>
          <Text style={descriptionStyles.headerText}>{preco}</Text>
        </View>
      </View>
      <View style={descriptionStyles.alignText}>
        <Text style={descriptionStyles.descriptionText}>{descricao}</Text>
      </View>
      <View style={descriptionStyles.alignDiv}>
        <Button style={descriptionStyles.buttonStyle} bordered success>
          <Text>Pedir Orçamento</Text>
        </Button>
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
  buttonStyle: {
    height: 40,
    width: 160,
  },
  descriptionText: {
    fontSize: 14,
  },
});
