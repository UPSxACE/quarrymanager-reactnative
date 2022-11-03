import { View, Text } from "native-base";
import { FlatList } from "native-base";
import ListItem from "./ListItem";

const DATA = [
  {
    id: 1,
    title: "Mármore Preto",
    state: "Em processamento",
    newMessage: false,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1668384000&Signature=TEtfqQl2oJB-PytQ9XJbOlBW~QKqwvrfLfsXqT2pFyvaJWY~vRbOY7a1t2BHRvy5n8CZkgPPhbtrnfBZPJlx7aGocqYDnhc8yWuvHHDWGesfhi9DyBPKHMt7s7t1ePxTNAgoIQ~-rxEkzf-SZdIChx2ZFDE-DtQ597NQmvyWigN1UGprKKkq45xuBJOeS--q7cC39VVlFyV16ysu3Lw0AB-u9yx0qnWaU0B3gi0v-j9YnbUM21EzV2b45vA5qLKgtuLt8REl9jaRBF7TR36QTbtwPLXxdK~SL6uOpTr7gX426QGWHa9svV772I3u4v9KvdQNPFcEteu9YCmpm5iJuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 2,
    title: "Granito Branco",
    state: "Finalizado",
    newMessage: true,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1668384000&Signature=TEtfqQl2oJB-PytQ9XJbOlBW~QKqwvrfLfsXqT2pFyvaJWY~vRbOY7a1t2BHRvy5n8CZkgPPhbtrnfBZPJlx7aGocqYDnhc8yWuvHHDWGesfhi9DyBPKHMt7s7t1ePxTNAgoIQ~-rxEkzf-SZdIChx2ZFDE-DtQ597NQmvyWigN1UGprKKkq45xuBJOeS--q7cC39VVlFyV16ysu3Lw0AB-u9yx0qnWaU0B3gi0v-j9YnbUM21EzV2b45vA5qLKgtuLt8REl9jaRBF7TR36QTbtwPLXxdK~SL6uOpTr7gX426QGWHa9svV772I3u4v9KvdQNPFcEteu9YCmpm5iJuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 3,
    title: "Granito Cinzat",
    state: "Finalizado",
    newMessage: false,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1668384000&Signature=TEtfqQl2oJB-PytQ9XJbOlBW~QKqwvrfLfsXqT2pFyvaJWY~vRbOY7a1t2BHRvy5n8CZkgPPhbtrnfBZPJlx7aGocqYDnhc8yWuvHHDWGesfhi9DyBPKHMt7s7t1ePxTNAgoIQ~-rxEkzf-SZdIChx2ZFDE-DtQ597NQmvyWigN1UGprKKkq45xuBJOeS--q7cC39VVlFyV16ysu3Lw0AB-u9yx0qnWaU0B3gi0v-j9YnbUM21EzV2b45vA5qLKgtuLt8REl9jaRBF7TR36QTbtwPLXxdK~SL6uOpTr7gX426QGWHa9svV772I3u4v9KvdQNPFcEteu9YCmpm5iJuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

function Item({ id, state, title, newMessage, imageUrl }) {
  return (
    <ListItem
      newMessage={newMessage}
      title={title}
      state={state}
      imageUrl={imageUrl}
    ></ListItem>
  );
}

function renderItem({ item }) {
  return (
    <Item
      title={item.title}
      newMessage={item.newMessage}
      state={item.state}
      imageUrl={item.imageUrl}
    />
  );
}

export default function BasicList() {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
