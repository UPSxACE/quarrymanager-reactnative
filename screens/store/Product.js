import { HStack, FlatList, VStack } from "native-base";
import Description from "../../components/store/Description";
import Characteristics from "../../components/store/characteristics";
import HorizontalCategory from "../../components/store/HorizontalCategory";

function ProductPage() {
  return (
    <VStack>
      <Description
        preco={"10,99€/m²"}
        descricao={
          "Pode ser utilizado em superfícies de ambientes internos como: cozinhas, banheiros, lavabos, áreas de serviços, pisos, escadas, mesas e muito mais. Para limpeza do material, nós recomendamos que se use um pano com detergente neutro ou esponja scott brite com sapólio em pó."
        }
      />
      <Characteristics resCom={6} resFlex={2} mva={6} maa={3} />
      <HStack bgColor={"white"} marginBottom={"4px"}>
        <HorizontalCategory categoryTitle={"Mármores"} data={CATEGORY_DATA1} />
      </HStack>
    </VStack>
  );
}

export default function Product({}) {
  return <FlatList ListHeaderComponent={<ProductPage />}></FlatList>;
}
