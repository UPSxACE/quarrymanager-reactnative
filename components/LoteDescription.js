import { VStack, HStack, Text } from "native-base";
import { StyleSheet } from "react-native";

export default function LoteDescription({
  mat,
  cor,
  quant,
  localex,
  localar,
  dataex,
  horaex,
}) {
  return (
    <VStack>
      <HStack justifyContent={"center"}>
        <Text style={loteDescriptionStyle.titleStyle}>GRN_LRJ_00326</Text>
      </HStack>
      <HStack></HStack>
      <HStack style={loteDescriptionStyle.borderStyle}>
        <HStack>
          <Text>Material</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text style={loteDescriptionStyle.text2}>{mat}</Text>
        </HStack>
      </HStack>
      <HStack style={loteDescriptionStyle.borderStyle}>
        <HStack>
          <Text>Cor</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text style={loteDescriptionStyle.text2}>{cor}</Text>
        </HStack>
      </HStack>
      <HStack style={loteDescriptionStyle.borderStyle}>
        <HStack>
          <Text>Quantidade</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text style={loteDescriptionStyle.text2}>{quant}</Text>
        </HStack>
      </HStack>
      <HStack style={loteDescriptionStyle.borderStyle}>
        <HStack>
          <Text>Local da extração</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text style={loteDescriptionStyle.text2}>{localex}</Text>
        </HStack>
      </HStack>
      <HStack style={loteDescriptionStyle.borderStyle}>
        <HStack>
          <Text>Local de Armazém</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text style={loteDescriptionStyle.text2}>{localar}</Text>
        </HStack>
      </HStack>
      <HStack style={loteDescriptionStyle.borderStyle}>
        <HStack>
          <Text>Data Extração</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text style={loteDescriptionStyle.text2}>{dataex}</Text>
        </HStack>
      </HStack>
      <HStack style={loteDescriptionStyle.borderStyle}>
        <HStack>
          <Text>Hora Extração</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text style={loteDescriptionStyle.text2}>{horaex}</Text>
        </HStack>
      </HStack>
    </VStack>
  );
}
const loteDescriptionStyle = StyleSheet.create({
  titleStyle: {
    fontWeight: "bold",
    fontSize: 21,
  },
  text1: {
    color: "grey",
  },
  text2: {
    color: "#959595",
  },
  borderStyle: {
    borderBottomWidth: 1,
    borderColor: "#BAB9B9",
    paddingBottom: 10,
    paddingTop: 10,
    marginEnd: 10,
    marginStart: 10,
  },
});
