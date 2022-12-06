import { View, Text, Linking, StyleSheet, ScrollView } from "react-native";
import BlueInput from "../../components/store/BlueInput";
import BlueButton from "../../components/store/BlueButton";
import { Feather } from "@expo/vector-icons";
import { themeColors } from "../../Theme";
import { Input } from "native-base";
import { CommonActions, useNavigation } from "@react-navigation/native";
import RegisterFooter from "../../components/store/RegisterFooter";

export default function RegisterPage({ setLogin }) {
  const navigation = useNavigation();
  const resetActionHome = CommonActions.reset({
    index: 0,
    routes: [{ name: "HomeStack", params: { screen: "Home" } }],
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
        <View style={registerStyle.logo}>
          <Text style={registerStyle.logoText}>weROCK</Text>
        </View>

        <View style={registerStyle.inputBox}>
          <BlueInput
            containerStyle={{ borderRadius: 4 }}
            label="Username"
            onChangeText={(value) => setData({ ...formData, name: value })}
          />
        </View>
        <View style={registerStyle.inputBox}>
          <BlueInput
            containerStyle={{ borderRadius: 4 }}
            label="Password"
            onChangeText={(value) => setData({ ...formData, name: value })}
            secret
          />
        </View>
        <View style={registerStyle.inputBox}>
          <BlueInput
            containerStyle={{ borderRadius: 4 }}
            label="Confirmar Palavra-Passe"
            onChangeText={(value) => setData({ ...formData, name: value })}
            secret
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={[registerStyle.inputBox, { width: "50%", paddingRight: 12 }]}
          >
            <BlueInput
              containerStyle={{ borderRadius: 4 }}
              label="dd/mm/aa"
            ></BlueInput>
          </View>
          <View
            style={[registerStyle.inputBox, { width: "50%", paddingLeft: 12 }]}
          >
            <BlueInput
              containerStyle={{ borderRadius: 4 }}
              label="Feminino"
            ></BlueInput>
          </View>
        </View>

        <View style={registerStyle.btn}>
          <BlueButton
            onPressEvent={async () => {
              // await
              navigation.dispatch(resetActionHome);
              setLogin(true);
              AsyncStorage.setItem("login", "true");
            }}
            label="Registar-se"
            style={{ backgroundColor: "#394A58" }}
          />
        </View>
      </ScrollView>
      <RegisterFooter />
    </View>
  );
}
const registerStyle = StyleSheet.create({
  logo: {
    width: "100%",
    padding: 40,
    paddingTop: 0,
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
  },
  rightInput: {
    marginLeft: "auto",
  },
  btn: {
    paddingRight: 52,
    paddingLeft: 52,
    paddingBottom: 12,
    marginTop: 28,
  },

  iconText: {
    fontSize: 14,
  },
});
