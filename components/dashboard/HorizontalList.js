import { HStack, VStack, Text } from 'native-base';
import { FlatList } from 'react-native';

export default function HorizontalList({
  title,
  data,
  mainText,
  subText,
  date,
}) {
  function Item({ tag, mainText, subText, date }) {
    return (
      <HStack width="240px" bg="white" mr="12px">
        <VStack bg="#0369A1" height="100%" width="4px" />
        <VStack w="236px">
          {subText ? (
            <VStack paddingX="12px">
              <Text h="24px" lineHeight={'24px'}>
                {tag}
              </Text>
              <Text h="24px" lineHeight={'24px'}>
                {mainText}
              </Text>
              <Text h="24px" lineHeight={'24px'}>
                {subText}
              </Text>
            </VStack>
          ) : (
            <VStack padding="12px" paddingBottom="4px">
              <Text
                h="28px"
                lineHeight={'28px'}
                fontSize="24px"
                //bg="black"
              >
                {tag}
              </Text>
              <Text
                h="40px"
                lineHeight={'40px'}
                fontSize="21px"
                borderBottomWidth={'1px'}
                //bg="grey"
              >
                {mainText}
              </Text>
              <Text h="28px" lineHeight={'28px'} fontSize="10px">
                {date}
              </Text>
            </VStack>
          )}
        </VStack>
      </HStack>
    );
  }

  function renderItem({ item, index }) {
    return (
      <Item
        mainText={typeof mainText !== 'undefined' ? item[mainText] : ''}
        tag={typeof tag !== 'undefined' ? item[tag] : '#' + index}
        date={typeof date !== 'undefined' ? item[date] : ''}
      />
    );
  }

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
