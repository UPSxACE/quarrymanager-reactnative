import { StyleSheet, Text, View } from "react-native";

import SearchBar from "../../components/store/SearchBar";

export default function TestPage({ navigation }) {
  return (
    <View style={page_styles.container}>
      <Text
        style={page_styles.text1}
        onPress={() => navigation.navigate("About")}
      >
        Testkk
      </Text>
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
