import React from "react";
import { Text, HStack, Image, View, VStack, Icon, Badge } from "native-base";
import { Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ListItem({ newMessage, destiny }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(destiny[0], { screen: destiny[1] })}
    >
      <VStack style={newMessage ? new_style.container : page_styles.container}>
        <HStack justifyContent={"space-evenly"} alignItems={"center"}>
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
            {newMessage && (
              <Badge
                borderColor="#FFFB94"
                bg={"transparent"}
                marginBottom={"2px"}
              >
                <Text color="#FFFB94">Resposta!</Text>
              </Badge>
            )}
            <Text
              style={newMessage ? new_style.titleText : page_styles.titleText}
            >
              Mármore Preto
            </Text>
            <Text
              style={
                newMessage ? new_style.processText : page_styles.processText
              }
            >
              Em processamento
            </Text>
          </VStack>
          <VStack>
            <Icon
              size="6"
              color={newMessage ? "#fff" : "#000"}
              as={<Feather name="chevron-right" />}
            />
          </VStack>
        </HStack>
      </VStack>
    </Pressable>
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
    lineHeight: 16,
  },

  processText: {
    color: "black",
    fontStyle: "italic",
    lineHeight: 16,
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
    lineHeight: 16,
    fontWeight: "bold",
  },

  processText: {
    color: "white",
    fontStyle: "italic",
    lineHeight: 16,
  },
});
