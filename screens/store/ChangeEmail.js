import { View, Text } from "react-native";
import WhiteInput from "../../components/store/WhiteInput";
import WhiteButton from "../../components/store/WhiteButton";
import * as React from "react";

export default function ChangeEmail() {
  const [formData, setData] = React.useState({});
  return (
    <View>
      <View style={{ paddingHorizontal: 12, paddingTop: 12, width: "100%" }}>
        <WhiteInput label="Adicionar novo endereço de e-mail"></WhiteInput>
      </View>
      <View style={{ paddingHorizontal: 12, paddingTop: 12, width: "100%" }}>
        <WhiteInput
          containerStyle={{ marginTop: 12 }}
          label="Password"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            paddingTop: 12,
            fontSize: 10,
            width: 328,
            textAlign: "center",
            textDecorationLine: "underline",
          }}
        >
          Para guardares esta definição, introduz a tua palavra-passe do weROCK.
        </Text>
      </View>
      <View style={{ paddingTop: 12, width: 376 }}>
        <WhiteButton label="Guardar Username" />
      </View>
    </View>
  );
}
