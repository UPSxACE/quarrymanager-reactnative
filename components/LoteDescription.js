import { StyleSheet, View, Text } from 'react-native';
export default function LoteDescription({
  mat,
  cor,
  quant,
  localex,
  localar,
  dataex,
  horaex,
}) {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={loteDescriptionStyle.titleStyle}>GRN_LRJ_00326</Text>
      </View>
      <View style={loteDescriptionStyle.borderStyle}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Material</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
          <Text style={loteDescriptionStyle.text2}>{mat}</Text>
        </View>
      </View>
      <View style={loteDescriptionStyle.borderStyle}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Cor</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
          <Text style={loteDescriptionStyle.text2}>{cor}</Text>
        </View>
      </View>
      <View style={loteDescriptionStyle.borderStyle}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Quantidade</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
          <Text style={loteDescriptionStyle.text2}>{quant}</Text>
        </View>
      </View>
      <View style={loteDescriptionStyle.borderStyle}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Local da extração</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
          <Text style={loteDescriptionStyle.text2}>{localex}</Text>
        </View>
      </View>
      <View style={loteDescriptionStyle.borderStyle}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Local de Armazém</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
          <Text style={loteDescriptionStyle.text2}>{localar}</Text>
        </View>
      </View>
      <View style={loteDescriptionStyle.borderStyle}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Data Extração</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
          <Text style={loteDescriptionStyle.text2}>{dataex}</Text>
        </View>
      </View>
      <View style={loteDescriptionStyle.borderStyle}>
        <View style={{ flexDirection: 'row' }}>
          <Text>Hora Extração</Text>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
          <Text style={loteDescriptionStyle.text2}>{horaex}</Text>
        </View>
      </View>
    </View>
  );
}
const loteDescriptionStyle = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  text1: {
    color: 'grey',
  },
  text2: {
    color: '#959595',
  },
  borderStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#BAB9B9',
    paddingBottom: 10,
    paddingTop: 10,
    marginEnd: 10,
    marginStart: 10,
  },
});
