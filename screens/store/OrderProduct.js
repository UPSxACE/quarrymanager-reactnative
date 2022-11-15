import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function OrderProduct({ navigation, title, reference }) {
  return (
    <View>
      <Image
        alt="Order Pic"
        style={page_styles.orderPicture}
        source={{
          uri: "https://media-manager.noticiasaominuto.com/1920/naom_5fa664745ba42.jpg",
        }}
      />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={page_styles.titleText}>{title}</Text>
        <Text style={page_styles.processText}>{reference}</Text>
      </View>
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: "#f5f5f5",
  },

  orderPicture: {
    width: 130,
    height: 100,
    borderRadius: 4,
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 12,
    alignSelf: "center",
  },

  titleText: {
    color: "black",
    fontWeight: "bold",
    lineHeight: 16,
  },

  processText: {
    color: "#6E7173",
    fontStyle: "italic",
    lineHeight: 16,
  },
});
