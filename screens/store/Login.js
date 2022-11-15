import { View, Text, Linking, StyleSheet } from "react-native";
import BlueInput from "../../components/store/BlueInput";
import BlueButton from "../../components/store/BlueButton";
import { Feather } from "@expo/vector-icons";

export default function Login() {
  return (
    <View>
      <View style={loginStyles.logo}>
        <Text style={loginStyles.logoText}>weROCK</Text>
      </View>

      <View style={loginStyles.inputBox}>
        <BlueInput
          containerStyle={{ borderRadius: 4 }}
          label="Nome"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
      </View>
      <View style={loginStyles.inputBox}>
        <BlueInput
          label="Password"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </View>

      <View style={loginStyles.btn}>
        <BlueButton label="Submit" />
      </View>
      <Text
        style={loginStyles.link}
        onPress={() => {
          Linking.openURL("https://twitter.com/?lang=pt");
        }}
      >
        Esqueceste-te da palavra passe?
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>OU</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>
      <View style={loginStyles.iconView}>
        <Feather color="#000" size={22} name="facebook">
          <Text
            style={loginStyles.iconText}
            onPress={() => {
              Linking.openURL("https://pt-br.facebook.com/");
            }}
          >
            Continuar com Facebook
          </Text>
        </Feather>

        <Feather color="#000" size={22} name="mail">
          <Text
            style={loginStyles.iconText}
            onPress={() => {
              Linking.openURL("https://outlook.live.com/owa/");
            }}
          >
            Continuar com E-mail
          </Text>
        </Feather>
      </View>
    </View>
  );
}

const loginStyles = StyleSheet.create({
  logo: {
    height: 168,
    width: 360,
    padding: 41,
  },
  logoText: {
    fontSize: 64,
    fontWeight: "bold",
    textAlign: "center",

    color: "#4C6177",
  },
  inputBox: {
    paddingBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
  },

  link: {
    color: "blue",
    textAlign: "center",
    height: 100,
  },
  btn: { paddingRight: 52, paddingLeft: 52 },
  iconText: {
    fontSize: 14,
  },
  iconView: {
    backgroundColor: "yellow",
  },
});
