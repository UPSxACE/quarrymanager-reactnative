import React from "react";
import { Text, HStack, Button, Image, View, VStack, Icon } from "native-base";
import { Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ListItem({ newMessage }) {
  return (
    <View
      style={newMessage ? page_styles.container : new_style.container}
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

        <VStack alignItems={"center"}>
          <Text
            style={newMessage ? page_styles.titleText : new_style.titleText}
          >
            Mármore Preto
          </Text>
          <Text
            style={newMessage ? page_styles.processText : new_style.titleText}
          >
            Em processamento
          </Text>
        </VStack>
        <VStack>
          <Icon
            size="6"
            color={newMessage ? "#000" : "#fff"}
            as={<Feather name="chevron-right" />}
          />
        </VStack>
      </HStack>
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingBottom: 12,
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
    borderRadius: 4,
  },
});

const new_style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7C9BC2",
    paddingBottom: 12,
    width: "100%",
  },

  titleText: {
    color: "white",
    fontWeight: "bold",
  },

  processText: {
    color: "white",
    fontStyle: "italic",
  },
});
