import { View, Text, Linking, StyleSheet, ScrollView } from "react-native";
import BlueInput from "../../components/store/BlueInput";
import BlueButton from "../../components/store/BlueButton";
import { Feather } from "@expo/vector-icons";
import { themeColors } from "../../Theme";
import { Input } from "native-base";

export default function Register() {
  return (
    <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
      <View style={registerStyle.logo}>
        <Text style={registerStyle.logoText}>weROCK</Text>
      </View>

      <View style={registerStyle.inputBox}>
        <BlueInput
          label="Username"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
      </View>
      <View style={registerStyle.inputBox}>
        <BlueInput
          label="Password"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </View>
      <View style={registerStyle.inputBox}>
        <BlueInput
          label="Confirmar Palavra-Passe"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </View>
      <View style={registerStyle.inputBox2}>
        <View style={registerStyle.inputBox}>
          <BlueInput label="Data de Nascimento"></BlueInput>
        </View>
        <View style={registerStyle.inputBox}>
          <BlueInput label="Gênero"></BlueInput>
        </View>
      </View>

      <View style={registerStyle.btn}>
        <BlueButton
          label="Registar-se"
          style={{ backgroundColor: "#394A58" }}
        />
      </View>
    </ScrollView>
  );
}
const registerStyle = StyleSheet.create({
  logo: {
    height: 168,
    width: "100%",
    padding: 40,
  },
  logoText: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",

    color: themeColors.main.A,
  },
  inputBox: {
    paddingBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "black",
  },
  inputBox2: {
    paddingBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "yellow",
  },
  rightInput: {
    marginLeft: "auto",
  },
  btn: { paddingRight: 52, paddingLeft: 52, paddingBottom: 12, marginTop: 28 },
  iconText: {
    fontSize: 14,
  },
});
