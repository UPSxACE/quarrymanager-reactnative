import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function RegisterFooter() {
  const navigation = useNavigation();

  return (
    <View style={footer_styles.footerContainer}>
      <Text style={footer_styles.whiteText}>
        Já tens uma conta?{" "}
        <Text
          style={footer_styles.underlined}
          onPress={() => {
            navigation.navigate("HomeStack", { screen: "Login" });
          }}
        >
          Login
        </Text>
        .
      </Text>
    </View>
  );
}

const footer_styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    backgroundColor: "#576F89",
    paddingBottom: Platform.OS === "ios" ? 12 : 0,
  },
  whiteText: {
    color: "white",
    textAlign: "center",
  },
  underlined: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
