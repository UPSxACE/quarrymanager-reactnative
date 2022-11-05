import { Text, FlatList } from "native-base";

const item = ({ item, index }) => {
  return (
    <Text fontWeight={"medium"} fontSize={"16px"} padding={"12px"}>
      {item.toUpperCase()}
    </Text>
  );
};

const ScrollableTabs = ({ tabs }) => {
  return (
    <FlatList
      bg={"white"}
      horizontal={true}
      data={tabs}
      renderItem={item}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ScrollableTabs;