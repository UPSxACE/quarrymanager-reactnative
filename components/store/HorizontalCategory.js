import { HStack, Text, Image, VStack, FlatList } from "native-base";
import { StyleSheet } from "react-native";

function Item({ id, title, price, imageUrl }) {
  return (
    <VStack>
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
          <Text>{title}</Text>
          <Text>{price}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}

function renderItem({ item }) {
  return (
    <Item
      id={item.id}
      title={item.title}
      price={item.price}
      imageUrl={item.imageUrl}
    />
  );
}

export default function HorizontalCategory({ categoryTitle, data }) {
  return (
    <VStack>
      <Text>{categoryTitle}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </VStack>

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
