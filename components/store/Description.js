import { Button } from "native-base";
import { View, Text, StyleSheet } from "react-native";

export default function Description({ descricao, preco, texto1 }) {
  return (
    <View>
      <View style={descriptionStyles.alignHead}>
        <View>
          <Text style={descriptionStyles.headerText}>{descricao}</Text>
        </View>
        <View style={descriptionStyles.rightText}>
          <Text style={descriptionStyles.headerText}>{preco}</Text>
        </View>
      </View>
      <View style={descriptionStyles.alignText}>
        <Text style={descriptionStyles.descriptionText}>{texto1}</Text>
      </View>
      <View style={descriptionStyles.alignDiv}>
        <Button style={descriptionStyles.buttonStyle} bordered success>
          <Text>Success</Text>
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
