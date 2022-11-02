import { Text, HStack, Button } from 'native-base';

export default function WhiteButton({ label }) {
  return (
    <HStack paddingLeft='12px' paddingRight='12px'>
      <Button
        _pressed={{ bg: 'gray.300' }}
        bg='main.greyComponentBg'
        width={'100%'}
        height={'40px'}
        rounded='0'
        borderBottomWidth='1'
        borderBottomColor='main.B'
      >
        <Text
          fontSize='14px'
          color={'main.greyComponentText'}
          fontWeight='bold'
        >
          {label}
        </Text>
      </Button>
    </HStack>
  );
}
