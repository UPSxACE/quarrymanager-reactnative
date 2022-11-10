import { HStack, Text, Image, VStack, FlatList, View } from "native-base";
import { StyleSheet } from "react-native";

function Item({ id, title, price, imageUrl, description }) {
  return (
    <VStack w={"50%"} alignItems={"center"}>
      <VStack
        alignItems={"center"}
        bg={"red.800"}
        w={"160px"}
        h={"auto"}
        paddingTop={"12px"}
        paddingBottom={"10px"}
        style={{
          elevation: 4,
          shadowColor: "#000",
          backgroundColor: "#F8F8F8",
          marginTop: 6,
          marginBottom: 6,
          borderRadius: 4,
        }}
      >
        <Image
          alt="Product Picture"
          style={page_styles.productPicture}
          source={{
            uri: imageUrl,
          }}
        />

        <Text fontWeight="bold" fontSize={16}>
          {title}
        </Text>
        <Text
          numberOfLines={2}
          ellipsizeMode={"tail"}
          fontSize={10}
          paddingLeft={"5px"}
          paddingRight={"5px"}
        >
          {description}
        </Text>
        <Text fontWeight="bold" fontSize={18}>
          {price}
        </Text>
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

export default function StoreCategory({ categoryResults, data }) {
  return (
    <VStack
      paddingLeft={"12px"}
      paddingRight={"12px"}
      paddingTop={"6px"}
      paddingBottom={"12px"}
    >
      <HStack>
        <Text fontWeight="bold" fontSize={"18px"}>
          {categoryResults.toUpperCase()}
        </Text>
        <Text fontSize={"16px"} marginLeft={"auto"} color={"gray.400"}>
          8-10
        </Text>
      </HStack>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
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
