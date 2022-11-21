import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import WhiteInput from "../../components/store/WhiteInput";
import { color } from "react-native-reanimated";

export default function OrderProduct({ navigation, title, reference }) {
  return (
    <ScrollView style={page_styles.container}>
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
          paddingVertical: 4,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Pedido
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "93%",
          marginBottom: 2,
          marginLeft: 12,
          paddingLeft: 12,
          paddingVertical: 6,
        }}
      >
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
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Total:
          </Text>
          <Text
            style={{
              marginLeft: "auto",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            21,98€
          </Text>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "white",
          width: "93%",
          marginBottom: 2,
          marginLeft: 12,
          paddingLeft: 12,
          paddingVertical: 6,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "#0050A7",
          }}
        >
          Adicionar Código de Desconto
        </Text>
      </Pressable>

      <View
        style={{
          backgroundColor: "white",
          width: "93%",
          marginBottom: 2,
          marginLeft: 12,
          paddingHorizontal: 12,
          flexDirection: "row",
          paddingVertical: 6,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Dados de entrega
        </Text>

        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{ marginLeft: "auto" }}
        >
          <Text style={{ color: "#0050A7", fontSize: 16 }}>Editar</Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "93%",
          marginBottom: 2,
          marginLeft: 12,
          paddingHorizontal: 12,
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        <View>
          <WhiteInput label={"Primeiro Nome"} />
        </View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput label={"Último Nome"} />
        </View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput label={"Morada"} />
        </View>

        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <View style={{ width: "50%", paddingRight: 6 }}>
            <WhiteInput label={"Código Postal"} />
          </View>
          <View style={{ width: "50%", paddingLeft: 6 }}>
            <WhiteInput label={"Região"} />
          </View>
        </View>
        <View style={{ marginTop: 12 }}>
          <WhiteInput label={"Telefone"} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "93%",
          marginBottom: 2,
          marginLeft: 12,
          paddingLeft: 12,
          paddingVertical: 6,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Mensagem
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "93%",
          marginBottom: 2,
          marginLeft: 12,
        }}
      >
        <TextInput
          style={page_styles.input}
          placeholder="Mudar este estilo depois, tá feio..."
        />
      </View>
    </ScrollView>
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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    borderColor: "#9FB6D4",
    backgroundColor: "#F5F5F5",
  },
});
