import { View, StyleSheet, FlatList, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OrderProduct({ navigation }) {
  return <View height="100%" backgroundColor="black"></View>;
}

const page_styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: "black",
  },
});
