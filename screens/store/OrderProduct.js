import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import WhiteInput from "../../components/store/WhiteInput";

export default function OrderProduct({ navigation, title, reference }) {
  return (
    <View style={page_styles.container}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
          width: "100%",
          marginBottom: 12,
        }}
      >
        <Image
          alt="Order Pic"
          style={page_styles.orderPicture}
          source={{
            uri: "https://media-manager.noticiasaominuto.com/1920/naom_5fa664745ba42.jpg",
          }}
        />
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={page_styles.titleText}>Mármore Preto</Text>
          <Text style={page_styles.processText}>Ref: 00023456</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "93%",
          marginBottom: 2,
          marginLeft: 12,
          paddingLeft: 12,
          borderRadius: 4,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Pedido
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingRight: 12,
          }}
        >
          <Text>Quantidade(m²):</Text>
          <Text
            style={{
              marginLeft: "auto",
            }}
          >
            Fazer a caixinha
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingRight: 12,
          }}
        >
          <Text>Preço(€/m²):</Text>
          <Text
            style={{
              marginLeft: "auto",
            }}
          >
            10,99€
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingRight: 12,
          }}
        >
          <Text>Desconto:</Text>
          <Text
            style={{
              marginLeft: "auto",
            }}
          >
            0€
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingRight: 12,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Total:
          </Text>
          <Text
            style={{
              marginLeft: "auto",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            21,98€
          </Text>
        </View>

        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text
            style={{
              fontSize: 18,
              color: "#0050A7",
            }}
          >
            Adicionar Código de Desconto
          </Text>
        </Pressable>
      </View>

      <View style={{ flexDirection: "row", width: "100%", marginTop: 12 }}>
        <Text>Dados de entrega</Text>

        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{ marginLeft: "auto" }}
        >
          <Text>Editar</Text>
        </Pressable>
      </View>
      <View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput label={"Primeiro Nome"} />
        </View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput label={"Último Nome"} />
        </View>
      </View>
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f3f3f3",
  },

  orderPicture: {
    width: 130,
    height: 100,
    borderRadius: 4,
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 12,
    alignSelf: "center",
  },

  titleText: {
    color: "black",
    fontWeight: "bold",
    lineHeight: 16,
  },

  refText: {
    color: "#6E7173",
    fontStyle: "italic",
    lineHeight: 16,
  },
});
