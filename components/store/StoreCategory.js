import { HStack, Text, Image, VStack, FlatList, View } from "native-base";
import { StyleSheet } from "react-native";

function Item({ title, price, imageUrl, description }) {
  return (
    <VStack>
      <VStack alignItems={"center"}>
        <Image
          alignSelf={"center"}
          alt="Product Picture"
          style={page_styles.productPicture}
          source={{
            uri: imageUrl,
          }}
        />

        <View
          style={{
            elevation: 4,
            shadowColor: "#000",
            backgroundColor: "white",
            marginTop: 12,
            borderRadius: 4,
          }}
        ></View>

        <Text textAlign={"center"}>{title}</Text>
        <Text textAlign={"center"}>{description}</Text>
        <Text textAlign={"center"}>{price}</Text>
      </VStack>
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
      description={item.description}
    />
  );
}

export default function StoreCategory({ categoryResults, CATEGORY_DATA }) {
  return (
    <VStack paddingLeft={"12px"} paddingTop={"6px"} paddingBottom={"12px"}>
      <Text fontWeight="bold" fontSize={"18px"}>
        {categoryResults}
      </Text>
      <FlatList
        data={CATEGORY_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </VStack>
  );
}

const page_styles = StyleSheet.create({
  productPicture: {
    width: 144,
    height: 88,
    borderRadius: 4,
    backgroundColor: "white",
    elevation: 5,
  },
});
