import { Text, View } from "react-native";
import BasicList from "../../components/store/BasicList";
import ScrollableTabs from "../../components/store/ScrollableTabs";
import StoreCategory from "../../components/store/StoreCategory";

export default function Orders(props) {
  const TABS_DATA = ["Todos", "Ativos", "Finalizados", "Favoritos"];
  const CATEGORY_DATA = [
    {
      id: 1,
      title: "Mármore Preto",
      description: "Lorem Ipsum",
      price: "202,99€/m²",
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1668384000&Signature=TEtfqQl2oJB-PytQ9XJbOlBW~QKqwvrfLfsXqT2pFyvaJWY~vRbOY7a1t2BHRvy5n8CZkgPPhbtrnfBZPJlx7aGocqYDnhc8yWuvHHDWGesfhi9DyBPKHMt7s7t1ePxTNAgoIQ~-rxEkzf-SZdIChx2ZFDE-DtQ597NQmvyWigN1UGprKKkq45xuBJOeS--q7cC39VVlFyV16ysu3Lw0AB-u9yx0qnWaU0B3gi0v-j9YnbUM21EzV2b45vA5qLKgtuLt8REl9jaRBF7TR36QTbtwPLXxdK~SL6uOpTr7gX426QGWHa9svV772I3u4v9KvdQNPFcEteu9YCmpm5iJuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ];

  return (
    <View>
      <ScrollableTabs tabs={TABS_DATA} />
      <StoreCategory tabs={CATEGORY_DATA} categoryResults={"RESULTADOS"} />
      <BasicList />
    </View>
  );
}
