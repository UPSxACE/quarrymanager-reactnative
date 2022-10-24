import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeFooter from '../../components/store/HomeFooter';
import WhiteButton from '../../components/store/WhiteButton';
import { Box, Text, HStack, VStack, Center } from 'native-base';
import WhiteInput from '../../components/store/WhiteInput';

export default function TestPage({ navigation }) {
  const [formData, setData] = React.useState({});

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
      <Box alignItems="center" bg="main.A">
        <Text color="white">Test new color</Text>
      </Box>
      <VStack bg="white">
        <WhiteButton label="Test" />
      </VStack>
      <HStack paddingLeft="12px" paddingRight="12px" width={'100%'}>
        <WhiteInput
          marginTop="12px"
          label="Nome"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
      </HStack>
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
