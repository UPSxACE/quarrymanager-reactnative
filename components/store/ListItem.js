import { Text, HStack, Button, Image, View, VStack, Icon } from "native-base";
import { Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ListItem({ request, newMessage }) {
  return (
    <View
      style={page_styles.container}
      onPress={() => navigation.navigate(destiny)}
    >
      <HStack
        destiny={"Settings"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Image
          marginTop={"12px"}
          alignSelf={"center"}
          alt="Product Picture"
          style={page_styles.productPicture}
          source={{
            uri: "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg",
          }}
        />
        <VStack>
          <Text style={page_styles.titleText}>Mármore Preto</Text>
          <Text style={page_styles.processText}>Em processamento</Text>
        </VStack>
        <VStack>
          <Icon size="7" color="#000" as={<Feather name="chevron-right" />} />
        </VStack>
      </HStack>
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 12,
    width: "100%",
  },

  titleText: {
    color: "black",
    fontWeight: "bold",
  },

  processText: {
    color: "black",
    fontStyle: "italic",
  },

  productPicture: {
    width: 130,
    height: 100,
    borderRadius: 5,
  },
});
