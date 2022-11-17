import { View, Text } from "react-native";
import WhiteInput from "../../components/store/WhiteInput";
import WhiteButton from "../../components/store/WhiteButton";

export default function ChangeUsername() {
  return (
    <View>
      <View style={{ paddingHorizontal: 12, paddingTop: 12, width: "100%" }}>
        <WhiteInput label="Novo Username" />
      </View>

      <View style={{ paddingTop: 12, width: "100%" }}>
        <WhiteButton label="Guardar Username" />
      </View>

      <Text style={{ paddingTop: 12, fontSize: 10, textAlign: "center" }}>
        <Text style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
          Tem em atenção:
        </Text>
        se alterares o teu username, não vais poder voltar a alterá-lo nos
        próximo 60 dias. Não adiciones maiúsculas desnecessárias, marcas de
        pontuação incomuns, carateres estranhos ou palavras ao acaso.
      </Text>
    </View>
  );
}
