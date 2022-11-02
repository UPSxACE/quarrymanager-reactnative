import { VStack, HStack } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import LoteDescription from "../../components/LoteDescription";
import HomeFooter from "../../components/store/HomeFooter";

export default function TestPage({ navigation }) {
  return (
    <View style={page_styles.container}>
      <Text
        style={page_styles.text1}
        onPress={() => navigation.navigate("About")}
      >
        Teste
      </Text>
      <LoteDescription
        mat={"Mármore"}
        cor={"Laranja"}
        quant={"475m^2"}
        localex={"Moca"}
        localar={"Areeiro da Serra"}
        dataex={"2022-04-22"}
        horaex={"23:19:01"}
      />
      <HomeFooter />
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  text1: {
    color: "grey",
  },
});
