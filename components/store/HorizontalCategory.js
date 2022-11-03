import { HStack, Text, Image, VStack, FlatList } from "native-base";
import { StyleSheet } from "react-native";




export default function HorizontalCategory({ imageUrl }) {
  return (
    <HStack>
      <FlatList data={DATA} renderItem=[renderItem] keyExtractor={(item) => item.id}></FlatList>
    </HStack>

    /*
    <HStack>
      <Text>Mármores</Text>
      <HStack justifyContent={"space-evenly"} alignItems={"center"}>
        <VStack>
          <Image
            marginTop={"12px"}
            alignSelf={"center"}
            alt="Product Picture"
            style={page_styles.productPicture}
            source={{
              uri: imageUrl,
            }}
          />
          <Text>Mármore Preto</Text>
          <Text>Preço</Text>
        </VStack>
      </HStack>
    </HStack>  */
  );
}

const page_styles = StyleSheet.create({
  productPicture: {
    width: 130,
    height: 100,
    borderRadius: 4,
  },
});
