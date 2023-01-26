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
import { useEffect, useState } from "react";
import BlueButton from "../../components/store/BlueButton";
import { Modal, Portal, Provider } from "react-native-paper";

export default function OrderProduct({ navigation, route }) {
  const params = route.params;
  const [quantity, setQuantity] = useState("");
  const [profile, setProfile] = useState(route.params.profile);
  const [message, setMessage] = useState("");
  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [discountData, setDiscountData] = useState({ raw: 0, multiplier: 1 });
  const [discount, setDiscount] = useState("");
  const [discountInput, setDiscountInput] = useState("");
  const [calculatedDiscount, setCalculatedDiscount] = useState(0);

  useEffect(() => {
    const dsc_data = discountData;
    if (discount.toUpperCase() === "RAWDISCOUNT") {
      dsc_data.raw = 5;
    } else {
      dsc_data.raw = 0;
    }

    if (discount.toUpperCase() === "MULTDISCOUNT") {
      dsc_data.multiplier = 0.8;
    } else {
      dsc_data.multiplier = 1;
    }

    setDiscountData(dsc_data);
    setCalculatedDiscount(calculateDiscount(dsc_data.multiplier, dsc_data.raw));
  }, [discount]);

  useEffect(() => {
    setCalculatedDiscount(
      calculateDiscount(discountData.multiplier, discountData.raw)
    );
  }, [discountData, quantity]);

  const showModal = () => setModal(false);
  const hideModal = () => setModal(false);

  function calculate() {
    const result =
      Math.ceil(Number(quantity) * Number(params.preco) * 100) / 100;
    return result;
  }

  function calculateDiscount(mult, raw) {
    const result = Math.floor((calculate() * (1 - mult) + raw) * 100) / 100;

    if (isNaN(result)) {
      return "???";
    }

    if (result === 0) {
      return 0;
    }

    return result.toFixed(2);
  }

  function calculateTotal(calctd_dsc) {
    const result = calculate() - calctd_dsc;

    if (isNaN(result)) {
      return "???";
    }

    if (result === 0 || result < 0) {
      return 0;
    }

    return result.toFixed(2);
  }

  return (
    <Provider>
      <ScrollView style={page_styles.container}>
        <Portal>
          <Modal
            visible={modal}
            onDismiss={hideModal}
            contentContainerStyle={{
              backgroundColor: "white",
              padding: 20,
              marginHorizontal: 24,
              maxWidth: 600,
            }}
          >
            <Text style={{ paddingBottom: 4, fontSize: 16 }}>
              Insira um Código de Desconto:
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 2,
                paddingHorizontal: 8,
                height: 40,
              }}
              defaultValue={discountInput}
              onChangeText={setDiscountInput}
            />
            <BlueButton
              containerStyle={{ paddingTop: 6 }}
              style={{
                alignSelf: "flex-start",
                paddingHorizontal: 12,
                borderRadius: 2,
              }}
              label={"Guardar"}
              onPressEvent={() => {
                setModal(false);
                setDiscount(discountInput);
              }}
            />
          </Modal>
        </Portal>

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
            source={{ uri: params.imageUrl }}
          />
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={page_styles.titleText}>{params.title}</Text>
            <Text style={page_styles.processText}>Ref: {params.refr}</Text>
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
                onChangeText={(value) => {
                  setQuantity(value);
                }}
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
                keyboardType={
                  Platform.OS == "android" ? "numeric" : "number-pad"
                }
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
                {params.preco + "€/m²"}
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
                {calculatedDiscount}€
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
                {calculateTotal(calculatedDiscount)}€
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => setModal(true)}
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
                textDecorationLine: discount ? "underline" : "none",
              }}
            >
              {discount ? discount : "Adicionar Código de Desconto"}
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
              onPress={() => setEdit(!edit)}
              style={{ marginLeft: "auto" }}
            >
              <Text style={{ color: "#0050A7", fontSize: 20 }}>
                {edit ? "Guardar" : "Editar"}
              </Text>
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
              <WhiteInput
                label={"Primeiro Nome"}
                value={profile.firstName}
                onChangeText={(value) => {
                  setProfile({ ...profile, firstName: value });
                }}
                editable={edit}
                style={{ color: edit ? "black" : "rgba(0,0,0,0.5)" }}
                placeholderTextColor={
                  edit ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.25)"
                }
              />
            </View>
            <View style={{ marginTop: 12 }}>
              <WhiteInput
                label={"Último Nome"}
                value={profile.lastName}
                onChangeText={(value) => {
                  setProfile({ ...profile, lastName: value });
                }}
                editable={edit}
                style={{ color: edit ? "black" : "rgba(0,0,0,0.5)" }}
                placeholderTextColor={
                  edit ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.25)"
                }
              />
            </View>
            <View style={{ marginTop: 12 }}>
              <WhiteInput
                label={"Morada"}
                value={profile.address}
                onChangeText={(value) => {
                  setProfile({ ...profile, address: value });
                }}
                editable={edit}
                style={{ color: edit ? "black" : "rgba(0,0,0,0.5)" }}
                placeholderTextColor={
                  edit ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.25)"
                }
              />
            </View>

            <View style={{ flexDirection: "row", marginTop: 12 }}>
              <View style={{ width: "50%", paddingRight: 6 }}>
                <WhiteInput
                  label={"Código Postal"}
                  value={profile.zipCode}
                  onChangeText={(value) => {
                    setProfile({ ...profile, zipCode: value });
                  }}
                  editable={edit}
                  style={{ color: edit ? "black" : "rgba(0,0,0,0.5)" }}
                  placeholderTextColor={
                    edit ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.25)"
                  }
                />
              </View>
              <View style={{ width: "50%", paddingLeft: 6 }}>
                <WhiteInput
                  label={"Região"}
                  value={profile.city}
                  onChangeText={(value) => {
                    setProfile({ ...profile, city: value });
                  }}
                  editable={edit}
                  style={{ color: edit ? "black" : "rgba(0,0,0,0.5)" }}
                  placeholderTextColor={
                    edit ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.25)"
                  }
                />
              </View>
            </View>
            <View style={{ marginTop: 12 }}>
              <WhiteInput
                label={"Telefone"}
                value={profile.phone}
                onChangeText={(value) => {
                  setProfile({ ...profile, phone: value });
                }}
                editable={edit}
                style={{ color: edit ? "black" : "rgba(0,0,0,0.5)" }}
                placeholderTextColor={
                  edit ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.25)"
                }
              />
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
              onChangeText={setMessage}
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
          <BlueButton
            editable={false}
            disabled={quantity == 0 || isNaN(quantity)}
            label={"Enviar Pedido"}
          />
        </View>
      </ScrollView>
    </Provider>
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
