import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WhiteInput from '../../components/store/WhiteInput';
import StyledOnFocus from '../../components/StyledOnFocus';
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import BlueButton from '../../components/store/BlueButton';
import { Modal, Portal, Provider } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import api from '../../api';
import apiconfig from '../../api-config';

function getExtension(filename) {
  return filename.split('.').pop();
}

function getFileName(filename) {
  return filename.split('/').pop();
}

export default function OrderProduct({ navigation, route }) {
  const params = route.params;
  const [quantity, setQuantity] = useState('');
  const [profile, setProfile] = useState(route.params.profile);
  const [message, setMessage] = useState('');
  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [discountData, setDiscountData] = useState({ raw: 0, multiplier: 1 });
  const [discount, setDiscount] = useState('');
  const [discountInput, setDiscountInput] = useState('');
  const [calculatedDiscount, setCalculatedDiscount] = useState(0);

  const [image, setImage] = useState([]);
  const [imagesToUpload, setImagesToUpload] = useState(null);

  const user = '-NMi-_Mpex6W2O4PMLKf';

  useEffect(() => {
    const sendRequest = async () => {
      const resp = await axios.get(api.obter_perfil, {
        headers: {
          Authorization: apiconfig.adminToken,
        },
      });

      setProfile(resp.data);
    };

    sendRequest();
  }, []);

  const submit = () => {
    const sendRequest = async () => {
      const data = new FormData();

      const addBodyToFormData = (data, body = {}) => {
        const newData = data;

        Object.keys(body).forEach((key) => {
          newData.append(key, body[key]);
        });

        return newData;
      };

      if (imagesToUpload) {
        imagesToUpload.map((picture, index) => {
          data.append('file' + index, {
            name: getFileName(picture.uri),
            type: 'image/' + getExtension(picture.uri),
            uri:
              Platform.OS === 'ios'
                ? picture.uri.replace('file://', '')
                : picture.uri,
          });
        });
      }

      fetch(api.editar_perfil, {
        method: 'POST',
        headers: {
          Authorization: apiconfig.adminToken,
          //'content-type': 'multipart/form-data',
        },
        body: {
          full_name: profile.full_name,
          morada: profile.morada,
          localidade: profile.localidade,
          codPostal: profile.codPostal,
          telefone: profile.telefone,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log('response 1', response);
        })
        .catch((error) => {
          console.log('error', error);
        });

      fetch(api.novo_pedido, {
        method: 'POST',
        headers: {
          Authorization: apiconfig.adminToken,
          //'content-type': 'multipart/form-data',
        },
        body: addBodyToFormData(data, {
          idProduto: params.id,
          quantidade: quantity,
          codigo_desconto: discount,
          mensagem: message,
          user_uid: user,
          user_name: 'Cliente',
          user_avatar: 'profilePictures/CEO1.jpg',
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log('response 2', JSON.stringify(response, null, 4));
        })
        .catch((error) => {
          console.log('error', error);
        });
    };

    sendRequest();
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //allowsEditing: true,
      allowsMultipleSelection: true,
      selectionLimit: 4,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      let result_upload = [];
      if (!result.selected) {
        result_upload = [result];
        setImage([result]);
      } else {
        result_upload = result.selected;
        if (result_upload.length > 4) {
          result_upload = result_upload.slice(0, 4);
        }
        setImage(result_upload);
      }
      setImagesToUpload(result_upload);
    }
  };

  useEffect(() => {
    const dsc_data = discountData;
    if (discount.toUpperCase() === 'RAWDISCOUNT') {
      dsc_data.raw = 5;
    } else {
      dsc_data.raw = 0;
    }

    if (discount.toUpperCase() === 'MULTDISCOUNT') {
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
      return '???';
    }

    if (result === 0) {
      return 0;
    }

    return result.toFixed(2);
  }

  function calculateTotal(calctd_dsc) {
    const result = calculate() - calctd_dsc;

    if (isNaN(result)) {
      return '???';
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
              backgroundColor: 'white',
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
                alignSelf: 'flex-start',
                paddingHorizontal: 12,
                borderRadius: 2,
              }}
              label={'Guardar'}
              onPressEvent={() => {
                setModal(false);
                setDiscount(discountInput);
              }}
            />
          </Modal>
        </Portal>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '100%',
            marginBottom: 12,
          }}
        >
          <Image
            alt="Order Pic"
            style={page_styles.orderPicture}
            source={{ uri: params.imageUrl }}
          />
          <View style={{ alignItems: 'center', flex: 1 }}>
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
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 2,
              paddingLeft: 12,
              paddingVertical: 4,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Pedido
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 2,
              paddingLeft: 12,
              paddingVertical: 6,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 12,
                alignItems: 'center',
                height: 24,
              }}
            >
              <Text>Quantidade(m²):</Text>
              <StyledOnFocus.Input
                onChangeText={(value) => {
                  setQuantity(value);
                }}
                containerStyle={{
                  marginLeft: 'auto',
                  width: 100,
                  height: 24,
                  backgroundColor: 'white',
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: '#9FB6D4',
                }}
                containerFocusStyle={{ borderColor: 'black', borderWidth: 1 }}
                style={{
                  width: '100%',
                  placeholderTextColor: '#BDBDBD',
                  paddingHorizontal: 4,
                }}
                placeholder={'0'}
                placeholderTextColor={'#pink'}
                rightStyle={{
                  marginLeft: 'auto',
                  paddingHorizontal: 4,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}
                inputRightElement={
                  <Feather size={16} name={'edit-3'} color={'gray'} />
                }
                keyboardType={
                  Platform.OS == 'android' ? 'numeric' : 'number-pad'
                }
              ></StyledOnFocus.Input>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 12,
                height: 24,
                alignItems: 'center',
              }}
            >
              <Text>Preço(€/m²):</Text>
              <Text
                style={{
                  marginLeft: 'auto',
                }}
              >
                {params.preco + '€/m²'}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 12,
                height: 24,
                alignItems: 'center',
              }}
            >
              <Text>Desconto:</Text>
              <Text
                style={{
                  marginLeft: 'auto',
                }}
              >
                {calculatedDiscount}€
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingRight: 12,
                height: 24,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                Total:
              </Text>
              <Text
                style={{
                  marginLeft: 'auto',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                {calculateTotal(calculatedDiscount)}€
              </Text>
            </View>
          </View>

          <Pressable
            onPress={() => setModal(true)}
            style={{
              backgroundColor: 'white',
              width: '100%',
              paddingLeft: 12,
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: '#0050A7',
                textDecorationLine: discount ? 'underline' : 'none',
              }}
            >
              {discount ? discount : 'Adicionar Código de Desconto'}
            </Text>
          </Pressable>
        </View>

        <View style={{ paddingBottom: 12, paddingHorizontal: 12 }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 2,
              paddingHorizontal: 12,
              flexDirection: 'row',
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Dados de entrega
            </Text>

            <Pressable
              onPress={() => setEdit(!edit)}
              style={{ marginLeft: 'auto' }}
            >
              <Text style={{ color: '#0050A7', fontSize: 20 }}>
                {edit ? 'Guardar' : 'Editar'}
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 2,

              paddingHorizontal: 12,
              paddingTop: 12,
              paddingBottom: 12,
            }}
          >
            <View>
              <WhiteInput
                label={'Primeiro Nome'}
                value={profile.full_name}
                onChangeText={(value) => {
                  setProfile({ ...profile, full_name: value });
                }}
                editable={edit}
                style={{ color: edit ? 'black' : 'rgba(0,0,0,0.5)' }}
                placeholderTextColor={
                  edit ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.25)'
                }
              />
            </View>
            <View style={{ marginTop: 12 }}>
              <WhiteInput
                label={'Último Nome'}
                value={profile.date}
                onChangeText={(value) => {
                  setProfile({ ...profile, date: value });
                }}
                editable={edit}
                style={{ color: edit ? 'black' : 'rgba(0,0,0,0.5)' }}
                placeholderTextColor={
                  edit ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.25)'
                }
              />
            </View>
            <View style={{ marginTop: 12 }}>
              <WhiteInput
                label={'Morada'}
                value={profile.morada}
                onChangeText={(value) => {
                  setProfile({ ...profile, morada: value });
                }}
                editable={edit}
                style={{ color: edit ? 'black' : 'rgba(0,0,0,0.5)' }}
                placeholderTextColor={
                  edit ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.25)'
                }
              />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 12 }}>
              <View style={{ width: '50%', paddingRight: 6 }}>
                <WhiteInput
                  label={'Código Postal'}
                  value={profile.codPostal}
                  onChangeText={(value) => {
                    setProfile({ ...profile, codPostal: value });
                  }}
                  editable={edit}
                  style={{ color: edit ? 'black' : 'rgba(0,0,0,0.5)' }}
                  placeholderTextColor={
                    edit ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.25)'
                  }
                />
              </View>
              <View style={{ width: '50%', paddingLeft: 6 }}>
                <WhiteInput
                  label={'Região'}
                  value={profile.localidade}
                  onChangeText={(value) => {
                    setProfile({ ...profile, localidade: value });
                  }}
                  editable={edit}
                  style={{ color: edit ? 'black' : 'rgba(0,0,0,0.5)' }}
                  placeholderTextColor={
                    edit ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.25)'
                  }
                />
              </View>
            </View>
            <View style={{ marginTop: 12 }}>
              <WhiteInput
                label={'Telefone'}
                value={profile.telefone}
                onChangeText={(value) => {
                  setProfile({ ...profile, telefone: value });
                }}
                editable={edit}
                style={{ color: edit ? 'black' : 'rgba(0,0,0,0.5)' }}
                placeholderTextColor={
                  edit ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.25)'
                }
              />
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 12, paddingHorizontal: 12 }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 2,
              paddingLeft: 12,
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Mensagem
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
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
        <Pressable
          onPress={pickImage}
          style={{ paddingBottom: 12, paddingHorizontal: 12, height: 240 }}
        >
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              marginBottom: 2,
              paddingLeft: 12,
              paddingVertical: 6,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Anexos (máx. 4)
            </Text>
          </View>
          {image.length < 1 ? (
            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 24,
                flex: 1,
              }}
            >
              <Text
                style={{
                  color: '#576F89',
                  fontWeight: 'bold',
                  fontSize: 20,
                  paddingBottom: 12,
                }}
              >
                Upload Imagens
              </Text>
              <Image
                alt="Product Picture"
                style={{ width: 40, height: 42, opacity: 0.4 }}
                source={require('../../assets/upload-background.png')}
              />
            </View>
          ) : (
            <View
              style={{
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 24,
                flexDirection: 'row',
              }}
            >
              {image.map((item, id) => {
                return (
                  <Image
                    key={id}
                    alt="Product Picture"
                    style={{
                      width: '23%',
                      height: '100%',
                      opalocalidade: 1,
                      marginLeft: '1%',
                      marginRight: '1%',
                    }}
                    source={{ uri: item.uri }}
                    // resizeMode="contain"
                  />
                );
              })}
            </View>
          )}
        </Pressable>
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              paddingHorizontal: 12,
              paddingBottom: 16,
            }}
          >
            Ao enviar o pedido, confirmas que concordas com os nossos termos de
            <Text style={{ color: '#0050A7' }}> privacidade</Text> e
            <Text style={{ color: '#0050A7' }}> uso</Text>.
          </Text>
          <BlueButton
            editable={false}
            disabled={quantity == 0 || isNaN(quantity)}
            label={'Enviar Pedido'}
            onPressEvent={() => {
              if (!(quantity == 0 || isNaN(quantity))) {
                submit();
              }
            }}
          />
        </View>
      </ScrollView>
    </Provider>
  );
}

const page_styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f3f3f3',
  },

  orderPicture: {
    width: 130,
    height: 100,
    borderRadius: 4,
    marginHorizontal: 12,
    marginTop: 12,
    marginBottom: 12,
    alignSelf: 'center',
  },

  titleText: {
    color: 'black',
    fontWeight: 'bold',
    lineHeight: 16,
  },

  refText: {
    color: '#6E7173',
    fontStyle: 'italic',
    lineHeight: 16,
  },

  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 12,
    borderColor: '#9FB6D4',
    borderRadius: 4,
  },
});
