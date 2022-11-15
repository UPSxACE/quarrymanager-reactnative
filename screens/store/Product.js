import { View, FlatList, Image, StyleSheet } from "react-native";
import Characteristics from "../../components/store/Characteristics";
import Description from "../../components/store/Description";
import HorizontalCategory from "../../components/store/HorizontalCategory";

const CATEGORY_DATA1 = [
  {
    id: 1,
    title: "Mármore Preto",
    price: "10,99€/m²",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1669593600&Signature=ZqTaOodOb01MmSsYbPNgewi-xsa8~U-gPev2r6E21HjzzLLpR8-zpP9rMQr2mIM7hEUGvHel0nTO2T~wY-bWiNeQ3Q9Ej4co0SRou3UJf40I-nnhIB2WamQZesNZ8tU3~ds1-DyW856Jp57yx9gNixekFUw50ukHZG9ELmTq17HZmSY2W0ER-COflV-XoMs~701dAmPcGLC9oApRvSC8rvwprcdrRJiVfgtZP1BiG1fGLFMM3VIlrL2psvaW25H8RBogcHOKaGKNAjaBLJAJqoT8mrV3cvD-vyEwEsV2sgxR8nzgApn3rAXCQ0jHBIPpiGCqBRjql7YS6waOMVT8-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 2,
    title: "Mármore Branco",
    price: "10,99€/m²",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/6fe9/f92b/8d26c16d86c04d3355094fc9852fe7d0?Expires=1668384000&Signature=dBpxVaRGdTi~2uqDQeVIbMwaeUXt1V1OTojBI~mmaQjao3yEBSibjNpgfkJ-g6yqEb2C7NPnxZx7v-rKUKE41sa-9Et9s~WBBtQ6MR8ec8Qmm3JBfPp3L7raBczl-~vhs3U6GFOtGdDCjhbqFX7SIzumkz2ivv0sJ6V3SIbUVg4yQ8p1impTuiShTjuvvAuPq-cW4lwhnLsQvEiABw9QLHcPEJD8Qyn0vjQC78ZAmi0UwKd5hwco-6OuJL~vc6efLJreuJR-FMDBIUaA7zCo2n296iPARRHRNjeLMHf13S-zqeBdGKPRdqoT4ZFNAyhyKW3LgpAcAsYY~KNmw74JJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 3,
    title: "Mármore Cinza",
    price: "10,99€/m²",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8215/ce33/f54de28244188005d834d681c08c6772?Expires=1668384000&Signature=aHRO76fXy0Np5Zok287ZqwDGk6-7Iv-2nu1A~yThdjtEARkz6t8hTLHI6cxThEQEIr494ns5fAucd5C3i80ywLmxiv4Q~gDRm5U7-g5E1s-9jPVDB7iPppXqdZp-P8E9JiM47H3e~ni23mS-FRgSiAITgAMgtl1I8n95Ija8IBSbsM6Dabiuznw94kfPBjycIcO-8S8HPFOXJkxnqUYL4DzJjp-2XSK2ITzFvcFBxTzOkRFriG-Dfabn5HLpshAAqOyIUGq8sDdCcADKokfyKGlVxR0Aj~6VS8A7qG5lqLU5G4d8b8ATKzVThqKGgamo1dNrI4ogJoyvSmN7SDDW6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

function ProductPage() {
  return (
    <View style={Productpage_styles.backgroundPage}>
      <View style={Productpage_styles.imageShadow}>
        <Image
          alt="Product Picture"
          style={Productpage_styles.imageSize}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1669593600&Signature=ZqTaOodOb01MmSsYbPNgewi-xsa8~U-gPev2r6E21HjzzLLpR8-zpP9rMQr2mIM7hEUGvHel0nTO2T~wY-bWiNeQ3Q9Ej4co0SRou3UJf40I-nnhIB2WamQZesNZ8tU3~ds1-DyW856Jp57yx9gNixekFUw50ukHZG9ELmTq17HZmSY2W0ER-COflV-XoMs~701dAmPcGLC9oApRvSC8rvwprcdrRJiVfgtZP1BiG1fGLFMM3VIlrL2psvaW25H8RBogcHOKaGKNAjaBLJAJqoT8mrV3cvD-vyEwEsV2sgxR8nzgApn3rAXCQ0jHBIPpiGCqBRjql7YS6waOMVT8-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          }}
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
