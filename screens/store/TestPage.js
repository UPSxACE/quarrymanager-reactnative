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
        descricao={"0asfh"}
        preco={20}
        texto1={"ajksdgçjkahdfçlahfçasjhfçjaksfhçakdf"}
      />
      <Characteristics />
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
