import { ScrollView } from 'react-native';
import ScrollableTabs from '../../components/store/ScrollableTabs';
import StoreCategory from '../../components/store/StoreCategory';

export default function StoreCategories(props) {
  const TABS_DATA = [
    'Mármores',
    'Granitos',
    'Esmeraldas',
    'Diamantes',
    'Porcelana',
    'Pedras',
    'Rochas',
    'Favoritos',
  ];
  const CATEGORY_DATA = [
    {
      id: 1,
      title: 'Mármore Preto',
      description:
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ',
      price: '99,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1668384000&Signature=TEtfqQl2oJB-PytQ9XJbOlBW~QKqwvrfLfsXqT2pFyvaJWY~vRbOY7a1t2BHRvy5n8CZkgPPhbtrnfBZPJlx7aGocqYDnhc8yWuvHHDWGesfhi9DyBPKHMt7s7t1ePxTNAgoIQ~-rxEkzf-SZdIChx2ZFDE-DtQ597NQmvyWigN1UGprKKkq45xuBJOeS--q7cC39VVlFyV16ysu3Lw0AB-u9yx0qnWaU0B3gi0v-j9YnbUM21EzV2b45vA5qLKgtuLt8REl9jaRBF7TR36QTbtwPLXxdK~SL6uOpTr7gX426QGWHa9svV772I3u4v9KvdQNPFcEteu9YCmpm5iJuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 2,
      title: 'Mármore Branco',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '20,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/6fe9/f92b/8d26c16d86c04d3355094fc9852fe7d0?Expires=1668988800&Signature=SNiZxiKQUfPUA-kkXql2P-p~iMkxSGNmhj1bKu5MkSuu~g8PUDZmrs2qiGoAH3v9yJ1V-lKJc9e6scDALbJByMGtqoQFt0SdpYn2EYnYlBmyR2Z2Jcle3wP5wJrEEZAfwQ-H8otlqWK0-Z5NoTGdFNxyqasU6k3G4VlTRYiv6NaIxI4Z-~gVs~l5kA-RNzdf~zywJ69yd4ykMvjVIayvhHSvpiKgkpV7xePRToMO9N4iTNvLqevyTPXt5Y0QRHdlY~lcwc3XUSO1CFSE1j1iPDzmq~4fqKtPc4hqheR8mcSHy4nqmahm3l5mCITjZ4~5p0au5ZWJyVapV5J4MiQ7UQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 3,
      title: 'Mármore Laranja',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '304,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/73be/1273/b31a52dd8b94ce8f8ef898bf8ca8f719?Expires=1668988800&Signature=TNKV2nRuXIhpDd9KwlGCVaC0ycC6bi6E-Y6X4u5T7r2ErguwcZ~iIhKFOsRBrIc~Z8R8XhiCnUpN6KIxsatr3vH6zmU8S2yV5R8QelIdHN3fyqfcqyvlA16xSsWm5hc2ZgaGDUk9hg~CjfIwCxV16diOINSEBC9BRh8sjHHBiaOVyAUj-VqhjtC9po-1axeonmmTg5GRHru-jd-1epRsDfDsSGRoST8qFqFqfGhnPShKL~LuCbud-vmbhEJvW4H10KVmFQh-L1gu9AOixuuwxm0xL~IttraPzZCpL7GLp~TOZtnTs18Uh1BXLswuskPDFjJd0L99abgdt1o53jX8CQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 4,
      title: 'Mármore Marrom',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '1.345,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/e04c/acb3/67502e052a28c327eb61c1ef00fbd794?Expires=1668988800&Signature=XPuTT0g2Rfagjhd6er94flgr8sC-LMADVD~SmNDNNjPKSOGeWnxdo2H1~kNWd0IRO2cruQfFS-N1ON-L1J5Xpr6XLp1WJWus4BozEfrjzCVaVc4r4nthsZ3WPQ~EpBMEuLCmodaS5d~h45OoR31yP9tJN~M2Pt7zs-ByVtt1tGphb3Shny1akatKz~JX6cxLmlJzp8IJK9LHxrFflcAbzuGEVrcPVAmHkpjghSTUX4lW6SvZxydA1tMNnKYWkBJ6hqmVK4wRutDK7ldbul9EsrSZntOTnG1MApse3qP9I1TVXiDT4A3umsyrb-PJeyZLoQFSIIgVaRJc-oBA3KAbWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 5,
      title: 'Mármore Cinza',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '202,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/8215/ce33/f54de28244188005d834d681c08c6772?Expires=1668988800&Signature=AeTHXh6z~vxrzXSQalXejP37i6B20~QAiYNY2p-kl25VSGQF~iQ8I3boh7Q~QAFqNB~LHHn6nw1Y7Dc6AzzzHZAwKJm8UhzhUvmM0GaN0YocetQM2iU6pWjc9xhpJccuT9sqsNrr6VGlqI2EtsEhTMBJZOfSMcdzMu3F140o~U3pu6ANBJoMV3B0JBL0ku97564H0KLV8qrUAnaLT93-mIoQnI8ZK0QeKphMFMp-b93RtmD9B25vTLj4zU9xmvrvPA1DZuyMtSuItF-SZb6btdMAtf5gwYoorcf-slj2tOcB~uVuZOR9MnN7Y6QZS3bkQNXxPJO0pjK19udzmYcRbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 6,
      title: 'Mármore Preto',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '202,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1668384000&Signature=TEtfqQl2oJB-PytQ9XJbOlBW~QKqwvrfLfsXqT2pFyvaJWY~vRbOY7a1t2BHRvy5n8CZkgPPhbtrnfBZPJlx7aGocqYDnhc8yWuvHHDWGesfhi9DyBPKHMt7s7t1ePxTNAgoIQ~-rxEkzf-SZdIChx2ZFDE-DtQ597NQmvyWigN1UGprKKkq45xuBJOeS--q7cC39VVlFyV16ysu3Lw0AB-u9yx0qnWaU0B3gi0v-j9YnbUM21EzV2b45vA5qLKgtuLt8REl9jaRBF7TR36QTbtwPLXxdK~SL6uOpTr7gX426QGWHa9svV772I3u4v9KvdQNPFcEteu9YCmpm5iJuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 7,
      title: 'Mármore Preto',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '202,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1668384000&Signature=TEtfqQl2oJB-PytQ9XJbOlBW~QKqwvrfLfsXqT2pFyvaJWY~vRbOY7a1t2BHRvy5n8CZkgPPhbtrnfBZPJlx7aGocqYDnhc8yWuvHHDWGesfhi9DyBPKHMt7s7t1ePxTNAgoIQ~-rxEkzf-SZdIChx2ZFDE-DtQ597NQmvyWigN1UGprKKkq45xuBJOeS--q7cC39VVlFyV16ysu3Lw0AB-u9yx0qnWaU0B3gi0v-j9YnbUM21EzV2b45vA5qLKgtuLt8REl9jaRBF7TR36QTbtwPLXxdK~SL6uOpTr7gX426QGWHa9svV772I3u4v9KvdQNPFcEteu9YCmpm5iJuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 8,
      title: 'Mármore Preto',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '202,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1668384000&Signature=TEtfqQl2oJB-PytQ9XJbOlBW~QKqwvrfLfsXqT2pFyvaJWY~vRbOY7a1t2BHRvy5n8CZkgPPhbtrnfBZPJlx7aGocqYDnhc8yWuvHHDWGesfhi9DyBPKHMt7s7t1ePxTNAgoIQ~-rxEkzf-SZdIChx2ZFDE-DtQ597NQmvyWigN1UGprKKkq45xuBJOeS--q7cC39VVlFyV16ysu3Lw0AB-u9yx0qnWaU0B3gi0v-j9YnbUM21EzV2b45vA5qLKgtuLt8REl9jaRBF7TR36QTbtwPLXxdK~SL6uOpTr7gX426QGWHa9svV772I3u4v9KvdQNPFcEteu9YCmpm5iJuA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];

  return (
    <ScrollView>
      <ScrollableTabs
        tabs={TABS_DATA}
        style={{ backgroundColor: 'white', elevation: 15, zIndex: 1 }}
      />
      <StoreCategory data={CATEGORY_DATA} categoryResults={'Resultados'} />
    </ScrollView>
  );
}
