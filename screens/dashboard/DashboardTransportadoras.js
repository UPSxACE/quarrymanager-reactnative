import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function DashboardTransportadora({ route }) {
  const params = route.params.full_data;

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#f5f5f5',
      }}
    >
      <View
        style={{
          backgroundColor: 'white',
          padding: 12,
          paddingTop: 16,
          borderRadius: 4,
          marginHorizontal: 12,
          marginTop: 12,

          paddingBottom: 12,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 1,
        }}
      >
        <Text style={loteDescriptionStyle.titleStyle}>
          Dados da Transportadora
        </Text>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: 'row' }}>
            <Text>ID:</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <Text style={loteDescriptionStyle.text2}>{params.id}</Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: 'row' }}>
            <Text>Nome:</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <Text style={loteDescriptionStyle.text2}>{params.nome}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
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
    marginEnd: 4,
    marginStart: 4,
  },
});
