import { View, Text } from "react-native";
import WhiteInput from "../../components/store/WhiteInput";
import WhiteButton from "../../components/store/WhiteButton";

export default function ChangePassword() {
  return (
    <View>
      <View style={{ paddingHorizontal: 12, paddingTop: 12, width: "100%" }}>
        <WhiteInput
          containerStyle={{ marginTop: 12 }}
          label="Palavra-Passe Atual"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </View>
      <View style={{ paddingHorizontal: 12, paddingTop: 12, width: "100%" }}>
        <WhiteInput
          containerStyle={{ marginTop: 12 }}
          label="Nova Palavra-Passe"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </View>
      <View style={{ paddingHorizontal: 12, paddingTop: 12, width: "100%" }}>
        <WhiteInput
          containerStyle={{ marginTop: 12 }}
          label="Confirmar Nova Palavra-Passe"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </View>
      <View style={{ paddingTop: 12, width: "100%" }}>
        <WhiteButton label="Guardar Palavra-Passe" />
      </View>
      <View style={{ marginTop: 12 }}>
        <Text
          style={{
            fontSize: 10,
            width: "100%",
            textAlign: "center",
            textDecorationLine: "underline",
          }}
        >
          Esqueceu-se da Palavra-Passe?
        </Text>
      </View>
    </View>
  );
}
