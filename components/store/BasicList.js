import { FlatList, View, Text } from 'react-native';
import ListItem from './ListItem';

const DATA = [
  {
    id: 1,
    title: 'Mármore Preto',
    state: 'Em Processamento',
    newMessage: false,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1669593600&Signature=ZqTaOodOb01MmSsYbPNgewi-xsa8~U-gPev2r6E21HjzzLLpR8-zpP9rMQr2mIM7hEUGvHel0nTO2T~wY-bWiNeQ3Q9Ej4co0SRou3UJf40I-nnhIB2WamQZesNZ8tU3~ds1-DyW856Jp57yx9gNixekFUw50ukHZG9ELmTq17HZmSY2W0ER-COflV-XoMs~701dAmPcGLC9oApRvSC8rvwprcdrRJiVfgtZP1BiG1fGLFMM3VIlrL2psvaW25H8RBogcHOKaGKNAjaBLJAJqoT8mrV3cvD-vyEwEsV2sgxR8nzgApn3rAXCQ0jHBIPpiGCqBRjql7YS6waOMVT8-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
  {
    id: 2,
    title: 'Granito Branco',
    state: 'Finalizado',
    newMessage: true,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/6fe9/f92b/8d26c16d86c04d3355094fc9852fe7d0?Expires=1668988800&Signature=SNiZxiKQUfPUA-kkXql2P-p~iMkxSGNmhj1bKu5MkSuu~g8PUDZmrs2qiGoAH3v9yJ1V-lKJc9e6scDALbJByMGtqoQFt0SdpYn2EYnYlBmyR2Z2Jcle3wP5wJrEEZAfwQ-H8otlqWK0-Z5NoTGdFNxyqasU6k3G4VlTRYiv6NaIxI4Z-~gVs~l5kA-RNzdf~zywJ69yd4ykMvjVIayvhHSvpiKgkpV7xePRToMO9N4iTNvLqevyTPXt5Y0QRHdlY~lcwc3XUSO1CFSE1j1iPDzmq~4fqKtPc4hqheR8mcSHy4nqmahm3l5mCITjZ4~5p0au5ZWJyVapV5J4MiQ7UQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },

  {
    id: 3,
    title: 'Granito Cinza',
    state: 'Finalizado',
    newMessage: false,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/8215/ce33/f54de28244188005d834d681c08c6772?Expires=1668988800&Signature=AeTHXh6z~vxrzXSQalXejP37i6B20~QAiYNY2p-kl25VSGQF~iQ8I3boh7Q~QAFqNB~LHHn6nw1Y7Dc6AzzzHZAwKJm8UhzhUvmM0GaN0YocetQM2iU6pWjc9xhpJccuT9sqsNrr6VGlqI2EtsEhTMBJZOfSMcdzMu3F140o~U3pu6ANBJoMV3B0JBL0ku97564H0KLV8qrUAnaLT93-mIoQnI8ZK0QeKphMFMp-b93RtmD9B25vTLj4zU9xmvrvPA1DZuyMtSuItF-SZb6btdMAtf5gwYoorcf-slj2tOcB~uVuZOR9MnN7Y6QZS3bkQNXxPJO0pjK19udzmYcRbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  },
];

function Item({ id, state, title, newMessage, imageUrl }) {
  return (
    <ListItem
      newMessage={newMessage}
      title={title}
      state={state}
      imageUrl={imageUrl}
      destiny={['BtHome', 'Home']}
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
