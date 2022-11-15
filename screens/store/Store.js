import { View, Text, StyleSheet } from 'react-native';
import ScrollableTabs from '../../components/store/ScrollableTabs';
import { FlatList, Image, ScrollView } from 'react-native';
import PagerView from 'react-native-pager-view';
import HorizontalCategory from '../../components/store/HorizontalCategory';

const DATA = [
  {
    id: 1,
    imageUrl:
      'https://s3-alpha-sig.figma.com/img/14c4/5882/aed55b49f27b4a3c97ceac7557310f4b?Expires=1668988800&Signature=a~438OG8M-BCXYqRFzEILAd2X0jf1ZvFJIb6bxblJjOLcoJf2BYRVrmekORWmyKmCOM5af70dRRjt2CGx7P6ZFjFfdJZZvOnoXHjvV3AbsKNTbxl~SOSguikvfL0xqWzeDABeeNmIC~Z9jxTJRa1WNjRhz2UmU2cy9PKBX8g9qntqXTP~R6MBzAHrPfR5ZIVlen3qrsSs1uP3-vkb9Igz~TWfUSeQEI1wYWHZUOySgIiGZt66PUOS1ZPYbsgrS8aoh750zrMjyD~l8~SQ545Lbmk7rwvtYwlFFRgwC1oFD-fTf7C1rI0qw1gsCudenfVfSRXV-DV8CLgXwizZnsP3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    key: '1',
  },
];

function Item({ id, imageUrl, keyy }) {
  return (
    <View key={keyy}>
      <Image
        alt="Main Picture"
        style={page_styles.mainPicture}
        source={{
          uri: imageUrl,
        }}
      />
    </View>
  );
}

function renderItem({ item, index }) {
  return <Item id={item.id} imageUrl={item.imageUrl} keyy={index} />;
}

export default function Store() {
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

  const CATEGORY_DATA1 = [
    {
      id: 1,
      title: 'Mármore Preto',
      price: '10,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1669593600&Signature=ZqTaOodOb01MmSsYbPNgewi-xsa8~U-gPev2r6E21HjzzLLpR8-zpP9rMQr2mIM7hEUGvHel0nTO2T~wY-bWiNeQ3Q9Ej4co0SRou3UJf40I-nnhIB2WamQZesNZ8tU3~ds1-DyW856Jp57yx9gNixekFUw50ukHZG9ELmTq17HZmSY2W0ER-COflV-XoMs~701dAmPcGLC9oApRvSC8rvwprcdrRJiVfgtZP1BiG1fGLFMM3VIlrL2psvaW25H8RBogcHOKaGKNAjaBLJAJqoT8mrV3cvD-vyEwEsV2sgxR8nzgApn3rAXCQ0jHBIPpiGCqBRjql7YS6waOMVT8-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 2,
      title: 'Mármore Branco',
      price: '10,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/6fe9/f92b/8d26c16d86c04d3355094fc9852fe7d0?Expires=1668384000&Signature=dBpxVaRGdTi~2uqDQeVIbMwaeUXt1V1OTojBI~mmaQjao3yEBSibjNpgfkJ-g6yqEb2C7NPnxZx7v-rKUKE41sa-9Et9s~WBBtQ6MR8ec8Qmm3JBfPp3L7raBczl-~vhs3U6GFOtGdDCjhbqFX7SIzumkz2ivv0sJ6V3SIbUVg4yQ8p1impTuiShTjuvvAuPq-cW4lwhnLsQvEiABw9QLHcPEJD8Qyn0vjQC78ZAmi0UwKd5hwco-6OuJL~vc6efLJreuJR-FMDBIUaA7zCo2n296iPARRHRNjeLMHf13S-zqeBdGKPRdqoT4ZFNAyhyKW3LgpAcAsYY~KNmw74JJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 3,
      title: 'Mármore Cinza',
      price: '10,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/8215/ce33/f54de28244188005d834d681c08c6772?Expires=1668384000&Signature=aHRO76fXy0Np5Zok287ZqwDGk6-7Iv-2nu1A~yThdjtEARkz6t8hTLHI6cxThEQEIr494ns5fAucd5C3i80ywLmxiv4Q~gDRm5U7-g5E1s-9jPVDB7iPppXqdZp-P8E9JiM47H3e~ni23mS-FRgSiAITgAMgtl1I8n95Ija8IBSbsM6Dabiuznw94kfPBjycIcO-8S8HPFOXJkxnqUYL4DzJjp-2XSK2ITzFvcFBxTzOkRFriG-Dfabn5HLpshAAqOyIUGq8sDdCcADKokfyKGlVxR0Aj~6VS8A7qG5lqLU5G4d8b8ATKzVThqKGgamo1dNrI4ogJoyvSmN7SDDW6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];

  const CATEGORY_DATA2 = [
    {
      id: 1,
      title: 'Mármore Preto',
      price: '10,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/8215/ce33/f54de28244188005d834d681c08c6772?Expires=1668988800&Signature=AeTHXh6z~vxrzXSQalXejP37i6B20~QAiYNY2p-kl25VSGQF~iQ8I3boh7Q~QAFqNB~LHHn6nw1Y7Dc6AzzzHZAwKJm8UhzhUvmM0GaN0YocetQM2iU6pWjc9xhpJccuT9sqsNrr6VGlqI2EtsEhTMBJZOfSMcdzMu3F140o~U3pu6ANBJoMV3B0JBL0ku97564H0KLV8qrUAnaLT93-mIoQnI8ZK0QeKphMFMp-b93RtmD9B25vTLj4zU9xmvrvPA1DZuyMtSuItF-SZb6btdMAtf5gwYoorcf-slj2tOcB~uVuZOR9MnN7Y6QZS3bkQNXxPJO0pjK19udzmYcRbw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 2,
      title: 'Mármore Branco',
      price: '10,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/73be/1273/b31a52dd8b94ce8f8ef898bf8ca8f719?Expires=1668988800&Signature=TNKV2nRuXIhpDd9KwlGCVaC0ycC6bi6E-Y6X4u5T7r2ErguwcZ~iIhKFOsRBrIc~Z8R8XhiCnUpN6KIxsatr3vH6zmU8S2yV5R8QelIdHN3fyqfcqyvlA16xSsWm5hc2ZgaGDUk9hg~CjfIwCxV16diOINSEBC9BRh8sjHHBiaOVyAUj-VqhjtC9po-1axeonmmTg5GRHru-jd-1epRsDfDsSGRoST8qFqFqfGhnPShKL~LuCbud-vmbhEJvW4H10KVmFQh-L1gu9AOixuuwxm0xL~IttraPzZCpL7GLp~TOZtnTs18Uh1BXLswuskPDFjJd0L99abgdt1o53jX8CQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 3,
      title: 'Mármore Cinza',
      price: '10,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/8215/ce33/f54de28244188005d834d681c08c6772?Expires=1668384000&Signature=aHRO76fXy0Np5Zok287ZqwDGk6-7Iv-2nu1A~yThdjtEARkz6t8hTLHI6cxThEQEIr494ns5fAucd5C3i80ywLmxiv4Q~gDRm5U7-g5E1s-9jPVDB7iPppXqdZp-P8E9JiM47H3e~ni23mS-FRgSiAITgAMgtl1I8n95Ija8IBSbsM6Dabiuznw94kfPBjycIcO-8S8HPFOXJkxnqUYL4DzJjp-2XSK2ITzFvcFBxTzOkRFriG-Dfabn5HLpshAAqOyIUGq8sDdCcADKokfyKGlVxR0Aj~6VS8A7qG5lqLU5G4d8b8ATKzVThqKGgamo1dNrI4ogJoyvSmN7SDDW6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];

  const CATEGORY_DATA3 = [
    {
      id: 1,
      title: 'Mármore Preto',
      price: '10,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1669593600&Signature=ZqTaOodOb01MmSsYbPNgewi-xsa8~U-gPev2r6E21HjzzLLpR8-zpP9rMQr2mIM7hEUGvHel0nTO2T~wY-bWiNeQ3Q9Ej4co0SRou3UJf40I-nnhIB2WamQZesNZ8tU3~ds1-DyW856Jp57yx9gNixekFUw50ukHZG9ELmTq17HZmSY2W0ER-COflV-XoMs~701dAmPcGLC9oApRvSC8rvwprcdrRJiVfgtZP1BiG1fGLFMM3VIlrL2psvaW25H8RBogcHOKaGKNAjaBLJAJqoT8mrV3cvD-vyEwEsV2sgxR8nzgApn3rAXCQ0jHBIPpiGCqBRjql7YS6waOMVT8-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 2,
      title: 'Mármore Branco',
      price: '10,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/6fe9/f92b/8d26c16d86c04d3355094fc9852fe7d0?Expires=1668384000&Signature=dBpxVaRGdTi~2uqDQeVIbMwaeUXt1V1OTojBI~mmaQjao3yEBSibjNpgfkJ-g6yqEb2C7NPnxZx7v-rKUKE41sa-9Et9s~WBBtQ6MR8ec8Qmm3JBfPp3L7raBczl-~vhs3U6GFOtGdDCjhbqFX7SIzumkz2ivv0sJ6V3SIbUVg4yQ8p1impTuiShTjuvvAuPq-cW4lwhnLsQvEiABw9QLHcPEJD8Qyn0vjQC78ZAmi0UwKd5hwco-6OuJL~vc6efLJreuJR-FMDBIUaA7zCo2n296iPARRHRNjeLMHf13S-zqeBdGKPRdqoT4ZFNAyhyKW3LgpAcAsYY~KNmw74JJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 3,
      title: 'Mármore Cinza',
      price: '10,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/8215/ce33/f54de28244188005d834d681c08c6772?Expires=1668384000&Signature=aHRO76fXy0Np5Zok287ZqwDGk6-7Iv-2nu1A~yThdjtEARkz6t8hTLHI6cxThEQEIr494ns5fAucd5C3i80ywLmxiv4Q~gDRm5U7-g5E1s-9jPVDB7iPppXqdZp-P8E9JiM47H3e~ni23mS-FRgSiAITgAMgtl1I8n95Ija8IBSbsM6Dabiuznw94kfPBjycIcO-8S8HPFOXJkxnqUYL4DzJjp-2XSK2ITzFvcFBxTzOkRFriG-Dfabn5HLpshAAqOyIUGq8sDdCcADKokfyKGlVxR0Aj~6VS8A7qG5lqLU5G4d8b8ATKzVThqKGgamo1dNrI4ogJoyvSmN7SDDW6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];
  return (
    <ScrollView>
      <ScrollableTabs
        tabs={TABS_DATA}
        style={{ backgroundColor: 'white', elevation: 15, zIndex: 1 }}
      />

      <View key={'1'} style={{ width: '100%' }}>
        <Image
          alt="Main Picture"
          style={page_styles.mainPicture}
          source={{
            uri: DATA[0].imageUrl,
          }}
        />
      </View>

      <View style={{ backgroundColor: '#CDD3D3' }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            marginBottom: 4,
          }}
        >
          <HorizontalCategory
            categoryTitle={'Mármores'}
            data={CATEGORY_DATA1}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            marginBottom: 4,
          }}
        >
          <HorizontalCategory
            categoryTitle={'Granitos'}
            data={CATEGORY_DATA2}
          />
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
          <HorizontalCategory
            categoryTitle={'Esmeraldas'}
            data={CATEGORY_DATA3}
          />
        </View>
      </View>
    </ScrollView>
  );
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item, index) => index + 1}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    padding: 12,
  },

  mainPicture: {
    width: 360,
    height: 260,
  },
});
