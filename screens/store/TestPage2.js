import { View } from "native-base";
import BasicList from "../../components/store/BasicList";
import HorizontalCategory from "../../components/store/HorizontalCategory";
import ScrollableTabs from "../../components/store/ScrollableTabs";

const TABS_DATA = [
  "Mármores",
  "Granitos",
  "Esmeraldas",
  "Diamantes",
  "Porcelana",
  "Pedras",
  "Rochas",
  "Favoritos",
];

const CATEGORY_DATA = [
  {
    id: 1,
    title: "Mármore Preto",
    price: "10,99€/m²",
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1668384000&Signature=TEtfqQl2oJB-PytQ9XJbOlBW~QKqwvrfLfsXqT2pFyvaJWY~vRbOY7a1t2BHRvy5n8CZkgPPhbtrnfBZPJlx7aGocqYDnhc8yWuvHHDWGesfhi9DyBPKHMt7s7t1ePxTNAgoIQ~-rxEkzf-SZdIChx2ZFDE-DtQ597NQmvyWigN1UGprKKkq45xuBJOeS--q7cC39VVlFyV16ysu3Lw0AB-u9yx0qnWaU0B3gi0v-j9YnbUM21EzV2b45vA5qLKgtuLt8REl9jaRBF7TR36QTbtwPLXxdK~SL6uOpTr7gX426QGWHa9svV772I3u4v9KvdQNPFcEteu9YCmpm5iJuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
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

export default function TestPage2({ navigation }) {
  return (
    <View>
      <ScrollableTabs tabs={TABS_DATA} />

      <BasicList />

      <HorizontalCategory categoryTitle={"Mármores"} data={CATEGORY_DATA} />
    </View>
  );
}
