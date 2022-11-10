import { useNavigation } from "@react-navigation/native";
import { Text, FlatList } from "native-base";
import { Pressable } from "react-native";

const item = ({ item, index }) => {
  return (
    <Text fontWeight={"medium"} fontSize={"16px"} padding={"12px"}>
      {item.toUpperCase()}
    </Text>
  );
};

const ScrollableTabs = ({ destiny, tabs, ...props }) => {
  return (
    <FlatList
      bg={"white"}
      horizontal={true}
      data={tabs}
      renderItem={item}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  );
};

export default ScrollableTabs;
