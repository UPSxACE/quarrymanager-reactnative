import { View, Text } from "native-base";
import { FlatList } from "native-base";
import ListItem from "./ListItem";

const DATA = [
  {
    id: 1,
    title: "Mármore Preto",
    state: "Em Processamento",
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
      "https://s3-alpha-sig.figma.com/img/6fe9/f92b/8d26c16d86c04d3355094fc9852fe7d0?Expires=1668988800&Signature=SNiZxiKQUfPUA-kkXql2P-p~iMkxSGNmhj1bKu5MkSuu~g8PUDZmrs2qiGoAH3v9yJ1V-lKJc9e6scDALbJByMGtqoQFt0SdpYn2EYnYlBmyR2Z2Jcle3wP5wJrEEZAfwQ-H8otlqWK0-Z5NoTGdFNxyqasU6k3G4VlTRYiv6NaIxI4Z-~gVs~l5kA-RNzdf~zywJ69yd4ykMvjVIayvhHSvpiKgkpV7xePRToMO9N4iTNvLqevyTPXt5Y0QRHdlY~lcwc3XUSO1CFSE1j1iPDzmq~4fqKtPc4hqheR8mcSHy4nqmahm3l5mCITjZ4~5p0au5ZWJyVapV5J4MiQ7UQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },

  {
    id: 3,
    title: "Granito Cinza",
    state: "Finalizado",
    newMessage: false,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/8215/ce33/f54de28244188005d834d681c08c6772?Expires=1668988800&Signature=AeTHXh6z~vxrzXSQalXejP37i6B20~QAiYNY2p-kl25VSGQF~iQ8I3boh7Q~QAFqNB~LHHn6nw1Y7Dc6AzzzHZAwKJm8UhzhUvmM0GaN0YocetQM2iU6pWjc9xhpJccuT9sqsNrr6VGlqI2EtsEhTMBJZOfSMcdzMu3F140o~U3pu6ANBJoMV3B0JBL0ku97564H0KLV8qrUAnaLT93-mIoQnI8ZK0QeKphMFMp-b93RtmD9B25vTLj4zU9xmvrvPA1DZuyMtSuItF-SZb6btdMAtf5gwYoorcf-slj2tOcB~uVuZOR9MnN7Y6QZS3bkQNXxPJO0pjK19udzmYcRbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

function Item({ id, state, title, newMessage, imageUrl }) {
  return (
    <ListItem
      newMessage={newMessage}
      title={title}
      state={state}
      imageUrl={imageUrl}
      destiny={["BtHome", "Home"]}
    ></ListItem>
  );
}

function renderItem({ item }) {
  return (
    <Item
      id={item.id}
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
