import { Text, View } from 'react-native';
import BasicList from '../../components/store/BasicList';
import ScrollableTabs from '../../components/store/ScrollableTabs';
import StoreCategory from '../../components/store/StoreCategory';

export default function Orders(props) {
  const TABS_DATA = ['Todos', 'Ativos', 'Finalizados', 'Favoritos'];
  const CATEGORY_DATA = [
    {
      id: 1,
      title: 'Mármore Preto',
      description:
        'When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ',
      price: '202,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1669593600&Signature=ZqTaOodOb01MmSsYbPNgewi-xsa8~U-gPev2r6E21HjzzLLpR8-zpP9rMQr2mIM7hEUGvHel0nTO2T~wY-bWiNeQ3Q9Ej4co0SRou3UJf40I-nnhIB2WamQZesNZ8tU3~ds1-DyW856Jp57yx9gNixekFUw50ukHZG9ELmTq17HZmSY2W0ER-COflV-XoMs~701dAmPcGLC9oApRvSC8rvwprcdrRJiVfgtZP1BiG1fGLFMM3VIlrL2psvaW25H8RBogcHOKaGKNAjaBLJAJqoT8mrV3cvD-vyEwEsV2sgxR8nzgApn3rAXCQ0jHBIPpiGCqBRjql7YS6waOMVT8-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      id: 2,
      title: 'Mármore Preto',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
      price: '202,99€/m²',
      imageUrl:
        'https://s3-alpha-sig.figma.com/img/9900/09d3/37b98db49fb5af7a77035c2f00f8ff77?Expires=1669593600&Signature=ZqTaOodOb01MmSsYbPNgewi-xsa8~U-gPev2r6E21HjzzLLpR8-zpP9rMQr2mIM7hEUGvHel0nTO2T~wY-bWiNeQ3Q9Ej4co0SRou3UJf40I-nnhIB2WamQZesNZ8tU3~ds1-DyW856Jp57yx9gNixekFUw50ukHZG9ELmTq17HZmSY2W0ER-COflV-XoMs~701dAmPcGLC9oApRvSC8rvwprcdrRJiVfgtZP1BiG1fGLFMM3VIlrL2psvaW25H8RBogcHOKaGKNAjaBLJAJqoT8mrV3cvD-vyEwEsV2sgxR8nzgApn3rAXCQ0jHBIPpiGCqBRjql7YS6waOMVT8-Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
  ];

  return (
    <View>
      <ScrollableTabs tabs={TABS_DATA} />
      <StoreCategory data={CATEGORY_DATA} categoryResults={'Resultados'} />
      <BasicList />
    </View>
  );
}
