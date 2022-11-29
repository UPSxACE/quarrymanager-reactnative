import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import WhiteInput from "../../components/store/WhiteInput";
import StyledOnFocus from "../../components/StyledOnFocus";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import BlueButton from "../../components/store/BlueButton";

export default function OrderProduct({ navigation, title, reference }) {
  const [quantity, setQuantity] = useState("");
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
          source={require("../../assets/Samples/marmore-preto.png")}
        />
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={page_styles.titleText}>Mármore Preto</Text>
          <Text style={page_styles.processText}>Ref: 00023456</Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          paddingBottom: 12,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            marginBottom: 2,
            paddingLeft: 12,
            paddingVertical: 4,
          }}
        >
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
            backgroundColor: "white",
            width: "100%",
            marginBottom: 2,
            paddingLeft: 12,
            paddingVertical: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingRight: 12,
              alignItems: "center",
              height: 24,
            }}
          >
            <Text>Quantidade(m²):</Text>
            <StyledOnFocus.Input
              onChangeText={(value) => setQuantity(value)}
              containerStyle={{
                marginLeft: "auto",
                width: 100,
                height: 24,
                backgroundColor: "white",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#9FB6D4",
              }}
              containerFocusStyle={{ borderColor: "black", borderWidth: 1 }}
              style={{
                width: "100%",
                placeholderTextColor: "#BDBDBD",
                paddingHorizontal: 4,
              }}
              placeholder={"0"}
              placeholderTextColor={"#pink"}
              rightStyle={{
                marginLeft: "auto",
                paddingHorizontal: 4,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
              inputRightElement={
                <Feather size={16} name={"edit-3"} color={"gray"} />
              }
              keyboardType={Platform.OS == "android" ? "numeric" : "number-pad"}
            ></StyledOnFocus.Input>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingRight: 12,
              height: 24,
              alignItems: "center",
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
              height: 24,
              alignItems: "center",
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
              height: 24,
              alignItems: "center",
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
        </View>

        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "white",
            width: "100%",

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
      </View>

      <View style={{ paddingBottom: 12, paddingHorizontal: 12 }}>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            marginBottom: 2,
            paddingHorizontal: 12,
            flexDirection: "row",
            paddingVertical: 6,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Dados de entrega
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={{ marginLeft: "auto" }}
          >
            <Text style={{ color: "#0050A7", fontSize: 20 }}>Editar</Text>
          </Pressable>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            marginBottom: 2,

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
      </View>

      <View style={{ paddingBottom: 12, paddingHorizontal: 12 }}>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            marginBottom: 2,
            paddingLeft: 12,
            paddingVertical: 6,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Mensagem
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            marginBottom: 2,
          }}
        >
          <TextInput
            style={page_styles.input}
            placeholder="Digite aqui sua mensagem... xD"
            textAlignVertical="top"
          />
        </View>
      </View>
      <View style={{ paddingBottom: 12, paddingHorizontal: 12 }}>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
          }}
        >
          <Text
            style={{
              color: "#576F89",
              fontWeight: "bold",
              fontSize: 20,
              paddingBottom: 12,
            }}
          >
            Upload Imagens
          </Text>
          <Image
            alt="Product Picture"
            style={{ width: 40, height: 42, opacity: 0.4 }}
            source={require("../../assets/upload-background.png")}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          paddingHorizontal: 12,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            paddingHorizontal: 12,
            paddingBottom: 16,
          }}
        >
          Ao enviar o pedido, confirmas que concordas com os nossos termos de
          <Text style={{ color: "#0050A7" }}> privacidade</Text> e
          <Text style={{ color: "#0050A7" }}> uso</Text>.
        </Text>
        <BlueButton label={"Enviar Pedido"} />
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
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    borderColor: "#9FB6D4",
    borderRadius: 4,
  },
});
