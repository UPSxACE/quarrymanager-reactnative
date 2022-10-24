import { StyleSheet, Text, View } from "react-native";
import Description from "../../components/store/Description";
import Characteristics from "../../components/store/Characteristics";

export default function TestPage({ navigation }) {
  return (
    <View style={page_styles.container}>
      <Text
        style={page_styles.text1}
        onPress={() => navigation.navigate("About")}
      >
        Teste
      </Text>
      <Description
        preco={"10,99€/m²"}
        descricao={
          "Pode ser utilizado em superfícies de ambientes internos como: cozinhas, banheiros, lavabos, áreas de serviços, pisos, escadas, mesas e muito mais. Para limpeza do material, nós recomendamos que se use um pano com detergente neutro ou esponja scott brite com sapólio em pó."
        }
      />
      <Characteristics resCom={6} resFlex={2} mva={6} maa={3} />
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
