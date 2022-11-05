import { HStack, VStack, Text } from 'native-base';
import { FlatList } from 'react-native';

export default function HorizontalList({
  title,
  data,
  mainText,
  subText,
  date,
  tag,
}) {
  function Item({ tag, mainText, subText, date }) {
    return (
      <HStack width="240px" bg="white" mr="12px">
        <VStack bg="main.dashboardComponentColor1" height="100%" width="4px" />
        <VStack w="236px">
          {subText ? (
            <VStack padding="12px" paddingBottom="4px" paddingTop="4px">
              <Text
                h="24px"
                lineHeight={'24px'}
                fontSize="14px"
                color="main.dashboardComponentColor1"
                //bg="black"
              >
                {tag}
              </Text>
              <Text
                h="26px"
                lineHeight={'26px'}
                fontSize="24px"
                color="main.mainTextColor"
                //bg="grey"
              >
                {mainText}
              </Text>
              <Text
                h="26px"
                lineHeight={'26px'}
                fontSize="12px"
                borderBottomWidth={'1px'}
                borderBottomColor={'rgba(0,0,0,0.16)'}
                color="main.mainTextColor"
                //bg="grey"
              >
                {subText}
              </Text>
              <Text
                h="28px"
                lineHeight={'28px'}
                fontSize="10px"
                color="main.weakGrey"
              >
                {date}
              </Text>
            </VStack>
          ) : (
            <VStack padding="12px" paddingBottom="4px" paddingTop="16px">
              <Text
                h="24px"
                lineHeight={'24px'}
                fontSize="24px"
                color="main.dashboardComponentColor1"
                //bg="black"
              >
                {tag}
              </Text>
              <Text
                h="40px"
                lineHeight={'40px'}
                fontSize="21px"
                borderBottomWidth={'1px'}
                borderBottomColor={'rgba(0,0,0,0.16)'}
                color="main.mainTextColor"
                //bg="grey"
              >
                {mainText}
              </Text>
              <Text
                h="28px"
                lineHeight={'28px'}
                fontSize="10px"
                color="main.weakGrey"
              >
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
        subText={typeof subText !== 'undefined' ? item[subText] : ''}
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
        keyExtractor={(item, index) => index}
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </VStack>
  );
}
