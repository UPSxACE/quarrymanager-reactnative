import LoteDescription from "../../components/LoteDescription";
import Description from "../../components/store/Description";
import Characteristics from "../../components/store/Characteristics";
import {
  StyleSheet,
  View,
  Button,
  ImageComponent,
  TouchableWithoutFeedback,
} from "react-native";
import HomeFooter from "../../components/store/HomeFooter";
import WhiteButton from "../../components/store/WhiteButton";
import {
  Box,
  Text,
  HStack,
  VStack,
  Center,
  ScrollView,
  Pressable,
} from "native-base";
import BatchPictures from "../../components/store/BatchPictures";
import WhiteInput from "../../components/store/WhiteInput";
import * as React from "react";
import ArrowButton from "../../components/store/ArrowButton";
import BlueButton from "../../components/store/BlueButton";
import ListItem from "../../components/store/ListItem";
import DashboardCard from "../../components/dashboard/DashboardCard";
import BlueInput from "../../components/store/BlueInput";
import { Image } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";

export default function TestPage({ navigation }) {
  const [formData, setData] = React.useState({});
  return (
    <ScrollView style={page_styles.container}>
      <ListItem
        newMessage
        destiny={["BtSettings", "Settings"]}
        title={"Mármore Preto"}
        state={"Em processamento"}
        imageUrl="https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Johnny-Depp2.jpg"
      />

      <HStack pl={"12px"} pr={"12px"}>
        <ArrowButton label="Dashboard" destiny={["BtHome", "Home"]} />
      </HStack>

      <HStack pl={"12px"} pr={"12px"}>
        <ArrowButton label="Produto" destiny={["Produto", ""]} />
      </HStack>

      <HStack pl={"12px"} pr={"12px"}>
        <ArrowButton label="Tests2" destiny={["Tests2", "Tests2"]} />
      </HStack>
      <HStack pl={"12px"} pr={"12px"}>
        <ArrowButton label="Tests3" destiny={["Tests3", "Tests3"]} />
      </HStack>

      <Text
        style={page_styles.text1}
        onPress={() => navigation.navigate("About")}
      ></Text>
      <LoteDescription
        mat={"Mármore"}
        cor={"Laranja"}
        quant={"475m^2"}
        localex={"Moca"}
        localar={"Areeiro da Serra"}
        dataex={"2022-04-22"}
        horaex={"23:19:01"}
      />

      <Description
        preco={"10,99€/m²"}
        descricao={
          "Pode ser utilizado em superfícies de ambientes internos como: cozinhas, banheiros, lavabos, áreas de serviços, pisos, escadas, mesas e muito mais. Para limpeza do material, nós recomendamos que se use um pano com detergente neutro ou esponja scott brite com sapólio em pó."
        }
      />
      <Characteristics resCom={6} resFlex={2} mva={6} maa={3} />
      <BatchPictures />

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
      <VStack paddingLeft="12px" paddingRight="12px" width={"100%"}>
        <WhiteInput
          marginTop="12px"
          label="Nome"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        <WhiteInput
          marginTop="12px"
          label="Password"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </VStack>
      <VStack marginTop="12px" bg="white">
        <WhiteButton label="Submit" />
      </VStack>
      <VStack marginTop="12px">
        <BlueButton label="Botão Submit" />
        <BlueInput
          secret
          label="Insert Text"
          containerStyle={{ marginTop: 12 }}
          onChangeText={(value) => setData({ ...formData, name: value })}
          //onFocusStyle={{ backgroundColor: 'red' }}
        />
      </VStack>

      <DashboardCard
        pedidos="1"
        width={152}
        label="Confirmados"
        cardColor="#F69624"
      />
    </ScrollView>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  button1: {
    width: "90%",
    justifyContent: "space-evenly",
  },

  text1: {
    color: "grey",
  },
});

/*
const a1 = navigation.addListener('focus', () => {
    console.log('Is focused');
    // Fetch profile data
  });

  const a2 = navigation.addListener('blur', () => {
    console.log('Is blurred');
    // Fetch profile data
  });
-----------------------------------------------------------------------



  const appearAnim = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(appearAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, [appearAnim]);
  const animatedOpacityStyle = {
    opacity: appearAnim,
  };
  <Animated.Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{
          height: 200,
          width: 200,
          justifyContent: 'center',
          zIndex: 100,
          ...animatedOpacityStyle,
        }}
      />
      
      */

/*
      <Animated.Image
        entering={SlideInRight}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{
          height: 200,
          width: 200,
          justifyContent: 'center',
          zIndex: 100,
        }}
      />*/
