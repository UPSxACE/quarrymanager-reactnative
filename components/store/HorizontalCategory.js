import { HStack, Text, Image, VStack, FlatList, View } from "native-base";
import { StyleSheet } from "react-native";

function Item({ id, title, price, imageUrl }) {
  return (
    <VStack>
      <HStack
        justifyContent={"space-evenly"}
        alignItems={"center"}
        paddingRight={"12px"}
      >
        <VStack>
          <View
            style={{
              elevation: 4,
              shadowColor: "#000",
              backgroundColor: "white",
              marginTop: 12,
              borderRadius: 4,
            }}
          >
            <Image
              alignSelf={"center"}
              alt="Product Picture"
              style={page_styles.productPicture}
              source={{
                uri: imageUrl,
              }}
            />
          </View>

          <Text textAlign={"center"}>{title}</Text>
          <Text textAlign={"center"}>{price}</Text>
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
    <VStack paddingLeft={"12px"} paddingTop={"6px"} paddingBottom={"12px"}>
      <Text fontWeight="bold" fontSize={"18px"}>
        {categoryTitle}
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
}

const page_styles = StyleSheet.create({
  productPicture: {
    width: 130,
    height: 100,
    borderRadius: 4,
    backgroundColor: "white",
    elevation: 10,
  },
});
