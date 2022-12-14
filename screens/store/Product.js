import { View, FlatList, Image, StyleSheet } from "react-native";
import Characteristics from "../../components/store/Characteristics";
import Description from "../../components/store/Description";
import HorizontalCategory from "../../components/store/HorizontalCategory";

const CATEGORY_DATA1 = [
  {
    id: 1,
    title: "Mármore Preto",
    price: "10,99€/m²",
    imageUrl: require("../../assets/Samples/marmore-preto.png"),
  },
  {
    id: 2,
    title: "Mármore Branco",
    price: "10,99€/m²",
    imageUrl: require("../../assets/Samples/marmore-branco.png"),
  },
  {
    id: 3,
    title: "Mármore Cinza",
    price: "10,99€/m²",
    imageUrl: require("../../assets/Samples/granito-cinza.png"),
  },
];

function ProductPage() {
  return (
    <View style={Productpage_styles.backgroundPage}>
      <View style={Productpage_styles.imageShadow}>
        <Image
          alt="Product Picture"
          style={Productpage_styles.imageSize}
          source={require("../../assets/Samples/marmore-preto.png")}
        />
      </View>
      <View style={{ marginBottom: 12 }}>
        <Description
          preco={"10,99€/m²"}
          descricao={
            "Pode ser utilizado em superfícies de ambientes internos como: cozinhas, banheiros, lavabos, áreas de serviços, pisos, escadas, mesas e muito mais. Para limpeza do material, nós recomendamos que se use um pano com detergente neutro ou esponja scott brite com sapólio em pó."
          }
        />
      </View>
      <View style={{ marginBottom: 12 }}>
        <Characteristics resCom={6} resFlex={2} mva={6} maa={3} />
      </View>
      <View style={Productpage_styles.backgroundComp}>
        <HorizontalCategory categoryTitle={"Mármores"} data={CATEGORY_DATA1} />
      </View>
    </View>
  );
}

export default function Product({}) {
  return <FlatList ListHeaderComponent={<ProductPage />}></FlatList>;
}

const Productpage_styles = StyleSheet.create({
  imageShadow: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 15,
    zIndex: 1,
  },
  imageSize: {
    width: 448,
    height: 293,
  },
  backgroundPage: {
    backgroundColor: "#D9D9D9",
  },
  backgroundComp: {
    backgroundColor: "white",
  },
});
