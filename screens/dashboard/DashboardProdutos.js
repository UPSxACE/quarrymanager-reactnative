import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function DashboardProdutos({ route }) {
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
          {params.tituloArtigo}
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
            <Text>Na Loja:</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.na_loja ? 'Sim' : 'Não'}
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: 'row' }}>
            <Text>Resistência à Compressão:</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.Res_Compressao}
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: 'row' }}>
            <Text>Resistência à Flexão:</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <Text style={loteDescriptionStyle.text2}>{params.Res_Flexao}</Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: 'row' }}>
            <Text>Massa Volúmica Aparente:</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.Massa_Vol_Aparente}
            </Text>
          </View>
        </View>
        <View style={loteDescriptionStyle.borderStyle}>
          <View style={{ flexDirection: 'row' }}>
            <Text>Absorção de Água:</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
            <Text style={loteDescriptionStyle.text2}>
              {params.Absorcao_Agua}
            </Text>
          </View>
        </View>
      </View>
      {params.na_loja && (
        <View
          style={{
            backgroundColor: 'white',
            padding: 12,
            paddingTop: 16,
            borderRadius: 4,
            marginHorizontal: 12,
            marginTop: 12,

            marginBottom: 16,
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
          <Text style={loteDescriptionStyle.titleStyle}>Loja</Text>
          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: 'row' }}>
              <Text>Título na Loja:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
              <Text style={loteDescriptionStyle.text2}>
                {params.tituloArtigo}
              </Text>
            </View>
          </View>
          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: 'row' }}>
              <Text>Preço:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
              <Text style={loteDescriptionStyle.text2}>{params.preco}€</Text>
            </View>
          </View>
          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: 'row' }}>
              <Text>Número de Pedidos:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
              <Text style={loteDescriptionStyle.text2}>
                {params.numero_pedidos}
              </Text>
            </View>
          </View>
          <View style={loteDescriptionStyle.borderStyle}>
            <View style={{ flexDirection: 'row' }}>
              <Text>Quantidade Vendida:</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
              <Text style={loteDescriptionStyle.text2}>
                {params.quantidade_vendida}
              </Text>
            </View>
          </View>
          <View
            style={{
              ...loteDescriptionStyle.borderStyle,
              flexDirection: 'column',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text>Descrição:</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 4 }}>
              <Text style={loteDescriptionStyle.text2}>
                {params.descricaoProduto}
              </Text>
            </View>
          </View>
        </View>
      )}
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
