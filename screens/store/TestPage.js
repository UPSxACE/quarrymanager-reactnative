import { StyleSheet, View } from 'react-native';
import HomeFooter from '../../components/store/HomeFooter';
import WhiteButton from '../../components/store/WhiteButton';
import { Box, Text, HStack, Center } from 'native-base';

export default function TestPage({ navigation }) {
  return (
    <View style={page_styles.container}>
      <Text
        style={page_styles.text1}
        onPress={() => navigation.navigate('About')}
      >
        Teste
      </Text>
      <WhiteButton />
      <HomeFooter />
      <Box alignItems="center" bg="secondary.500">
        <Text color="white">AAABBCCD</Text>
      </Box>
      <HStack justifyContent="center" bg="secondary.500">
        <Text color="white">AAABBCCD</Text>
      </HStack>
      <Center h="300" w="300" bg="black">
        <Text color="white">Test</Text>
      </Center>
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  text1: {
    color: 'grey',
  },
});
