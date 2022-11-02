import { Text, HStack, Button, Image, View, VStack, Icon } from "native-base";
import { Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ListItem({ request, newMessage }) {
  return (
    <View paddingLeft="12px" paddingRight="12px">
      <Pressable>
        <HStack>
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
            <Text>Mármore Preto</Text>
            <Text>Mármore Preto</Text>
          </VStack>
          <Icon size="6" color="#000" as={<Feather name="chevron-right" />} />
        </HStack>
      </Pressable>
    </View>
  );
}

const page_styles = StyleSheet.create({
  text1: {
    color: "red",
  },

  productPicture: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },

  coverPicture: {
    width: "100%",
    height: 120,
  },
});
