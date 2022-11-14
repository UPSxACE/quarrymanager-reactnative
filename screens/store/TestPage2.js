import HorizontalCategory from '../../components/store/HorizontalCategory';
import { View } from 'react-native';
import HorizontalList from '../../components/dashboard/HorizontalList';
import BasicList from '../../components/store/BasicList';
import ScrollableTabs from '../../components/store/ScrollableTabs';

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

const HLDATA = [
  {
    product: 'Mármore Preto',
    customer: 'Eduardo Botelho',
    address: 'Rua de Bragança',
    date: '17 Dez 2022 | 09:05 PM',
  },
  {
    product: 'Mármore Preto',
    customer: 'Monique dos Santos',
    address: 'Rua Av. das Azeitonas',
    date: '17 Dez 2022 | 08:17 PM',
  },
  {
    product: 'Mármore Branco',
    customer: 'Eduardo Botelho',
    address: 'Rua de Bragança',
    date: '17 Dez 2022 | 06:09 PM',
  },
];

const CATEGORY_DATA = [
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

export default function TestPage2({ navigation }) {
  return (
    <View>
      <ScrollableTabs tabs={TABS_DATA} />
      <BasicList />
      <HorizontalCategory categoryTitle={'Mármores'} data={CATEGORY_DATA} />
      <View style={{ paddingLeft: 20 }}>
        <HorizontalList
          title="Pedidos"
          data={HLDATA}
          mainText="customer"
          date="date"
        />
      </View>
    </View>
  );
}
