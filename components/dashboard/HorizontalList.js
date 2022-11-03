import { HStack, VStack, Text } from 'native-base';
import { FlatList } from 'react-native';

function Item() {
  return (
    <HStack height="104px" width="240px" bg="white" mr="12px">
      <VStack bg="#0369A1" height="100%" width="4px" />
    </HStack>
  );
}

function renderItem({ item }) {
  return <Item />;
}

export default function HorizontalList({ title, data }) {
  return (
    <VStack>
      <Text fontSize="21px" fontWeight="bold">
        {title.toUpperCase()}
      </Text>
      <FlatList
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
}
