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
        <Text>GRN_LRJ_00326</Text>
      </HStack>
      <HStack></HStack>
      <HStack>
        <HStack>
          <Text>Material</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text>{mat}</Text>
        </HStack>
      </HStack>
      <HStack>
        <HStack>
          <Text>Cor</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text>{cor}</Text>
        </HStack>
      </HStack>
      <HStack>
        <HStack>
          <Text>Quantidade</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text>{quant}</Text>
        </HStack>
      </HStack>
      <HStack>
        <HStack>
          <Text>Local da extração</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text>{localex}</Text>
        </HStack>
      </HStack>
      <HStack>
        <HStack>
          <Text>Local de Armazém</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text>{localar}</Text>
        </HStack>
      </HStack>
      <HStack>
        <HStack>
          <Text>Data Extração</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text>{dataex}</Text>
        </HStack>
      </HStack>
      <HStack>
        <HStack>
          <Text>Hora Extração</Text>
        </HStack>
        <HStack marginLeft={"auto"}>
          <Text>{horaex}</Text>
        </HStack>
      </HStack>
    </VStack>
  );
}
