import { StyleSheet, View, Text, FlatList } from 'react-native';
import PagerView from 'react-native-pager-view';
import BatchPictures from '../../components/dashboard/BatchPictures';
import LoteDescription from '../../components/LoteDescription';
import { themeColors } from '../../Theme';

export default function DashboardLotes() {
  const data = [
    {
      mat: 'Mármore',
      cor: 'Laranja',
      quant: '425m^2',
      localex: 'Moca',
      localar: 'Areeiro da Serra',
      dataex: '2022-04-22',
      horaex: '23:19:01',
    },
    {
      mat: 'Granito',
      cor: 'Preto',
      quant: '300m^2',
      localex: 'Moca',
      localar: 'Areeiro da Serra',
      dataex: '2022-04-22',
      horaex: '23:19:01',
    },
    {
      mat: 'Mármore',
      cor: 'Laranja',
      quant: '500m^2',
      localex: 'Moca',
      localar: 'Areeiro da Serra',
      dataex: '2022-04-22',
      horaex: '23:19:01',
    },
    {
      mat: 'Mármore',
      cor: 'Brancp',
      quant: '235m^2',
      localex: 'Moca',
      localar: 'Areeiro da Serra',
      dataex: '2022-04-22',
      horaex: '23:19:01',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: themeColors.main.dashboardBackground,
      }}
    >
      <PagerView style={styles.viewPager} initialPage={0}>
        {data.map((obj, index) => {
          return (
            <View
              style={{
                padding: 16,
              }}
              key={index + 1}
            >
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 12,
                  paddingTop: 16,
                  borderRadius: 4,
                }}
              >
                <BatchPictures horizontalPadding={32} />
                <View style={{ marginTop: 8 }}>
                  <LoteDescription
                    mat={obj.mat}
                    cor={obj.cor}
                    quant={obj.quant}
                    localex={obj.localex}
                    localar={obj.localar}
                    dataex={obj.dataex}
                    horaex={obj.horaex}
                  />
                </View>

                <Text>{obj.text}</Text>
              </View>
            </View>
          );
        })}
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    padding: 12,
  },
});
