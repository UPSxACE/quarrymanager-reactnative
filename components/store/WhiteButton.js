import { Text, View } from 'react-native';
import { themeColors } from '../../Theme';
import StyledOnPress from '../StyledOnPressed';

export default function WhiteButton({ label }) {
  return (
    <>
      <View style={{ paddingHorizontal: 12 }}>
        <StyledOnPress.Button
          style={{
            backgroundColor: themeColors.main.greyComponentBg,
            height: 40,
            borderBottomWidth: 1,
            borderBottomColor: themeColors.main.B,
          }}
          //onPressStyle={{ height: 80 }}
          onPressColor={'#d4d4d8'}
        >
          <Text
            style={{
              fontSize: 14,
              color: themeColors.main.greyComponentText,
              fontWeight: 'bold',
            }}
          >
            Submit
          </Text>
        </StyledOnPress.Button>
      </View>
    </>
  );
}

/*
<HStack paddingLeft="12px" paddingRight="12px">
        <Button
          _pressed={{ bg: 'gray.300' }}
          bg="main.greyComponentBg"
          width={'100%'}
          height={'40px'}
          rounded="0"
          borderBottomWidth="1"
          borderBottomColor="main.B"
        >
          <Text
            fontSize="14px"
            color={'main.greyComponentText'}
            fontWeight="bold"
          >
            {label}
          </Text>
        </Button>
      </HStack>
      */
