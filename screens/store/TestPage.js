import { VStack, HStack } from "native-base";
import { StyleSheet, Text, View } from "react-native";
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
      <VStack>
        <HStack>
          <Text>título</Text>
        </HStack>
      </VStack>
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
