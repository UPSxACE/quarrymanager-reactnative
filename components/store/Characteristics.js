import { Text, View, StyleSheet } from "react-native";

export default function Characteristics({ resCom, resFlex, mva, maa }) {
  return (
    <View style={characteristicsStyles.flatlistStyle}>
      <View style={characteristicsStyles.alignHead}>
        <View>
          <Text style={characteristicsStyles.headerText}>Características</Text>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View style={characteristicsStyles.textStyle1}>
            <Text>Resistencia a Compressao</Text>
          </View>
          <View style={characteristicsStyles.textStyle2}>
            <Text>{`${resCom} Mpa`}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View style={characteristicsStyles.textStyle1}>
            <Text>Resistencia a Flexao</Text>
          </View>
          <View style={characteristicsStyles.textStyle2}>
            <Text>{`${resFlex} Mpa`}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View style={characteristicsStyles.textStyle1}>
            <Text>Massa Volumica Aparente</Text>
          </View>
          <View style={characteristicsStyles.textStyle2}>
            <Text>{`${mva} Kg/m²`}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <View style={characteristicsStyles.textStyle1}>
            <Text>Massa Absorcao de Agua</Text>
          </View>
          <View style={characteristicsStyles.textStyle2}>
            <Text>{`${maa} %`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const characteristicsStyles = StyleSheet.create({
  flatlistStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "100%",
    backgroundColor: "white",
  },
  textStyle1: {
    width: "50%",
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  textStyle2: {
    width: "50%",
    borderBottomWidth: 1,
    borderColor: "gray",
    alignItems: "flex-end",
  },
  alignHead: {
    margin: 12,
    flexDirection: "row",
    borderBottomWidth: 1,
    width: "100%",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
