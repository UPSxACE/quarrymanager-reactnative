import { Text, FlatList, StyleSheet } from "react-native";
import { HStack, VStack } from "native-base";

export default function Characteristics(props) {
  const data = [
    { id: "1", pic: "img1" },
    { id: "2", pic: "img2" },
    { id: "3", pic: "img3" },
    { id: "4", pic: "img4" },
  ];
  const item = ({ item, index }) => {
    if (index !== 0)
      return (
        <HStack
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <HStack>
            <Text>{item.pic}</Text>
          </HStack>
        </HStack>
      );
  };

  return (
    <VStack>
      <HStack>
        <HStack>
          <Text>IMG 1</Text>
        </HStack>
      </HStack>
      <FlatList
        style={{ width: "100%" }}
        scrollEnabled={false}
        data={data}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
      />
    </VStack>
  );
}

const characteristicsStyles = StyleSheet.create({});
