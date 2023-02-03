import {
  View,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
  ActivityIndicator,
} from 'react-native';
import BlueInput from '../../components/store/BlueInput';
import BlueButton from '../../components/store/BlueButton';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { themeColors } from '../../Theme';
import { Button, Input } from 'native-base';
import { CommonActions, useNavigation } from '@react-navigation/native';
import RegisterFooter from '../../components/store/RegisterFooter';
import { useState } from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useEffect } from 'react';
import axios from 'axios';
import api from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterPage({ setLogin }) {
  const navigation = useNavigation();
  const resetActionHome = CommonActions.reset({
    index: 0,
    routes: [{ name: 'HomeStack', params: { screen: 'Home' } }],
  });
  const [data, setData] = useState({});
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [selectedGender, setSelectedGender] = useState(0);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  const containerStyle2 = { backgroundColor: 'white', padding: 20 };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const closeCalendar = () => {
    setVisible(false);
  };

  const mmddaa = (date_object) => {
    const day = date_object.getDate();
    const month = date_object.getUTCMonth();
    const year = date_object.getUTCFullYear();

    return day + '/' + (month + 1) + '/' + year;
  };

  const [registerAttemptModal, setRegisterAttemptModal] = useState(false);
  const [dismissable, setDismissable] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  const hideRegisterModal = () => {
    setDismissable(false);
    setRegisterAttemptModal(false);
    setRegisterError(false);
  };
  const showRegisterModal = () => setRegisterAttemptModal(true);

  const tryregister = () => {
    const sendRequest = async () => {
      const result = await axios.post(api.register, { ...data });
      return result.data;
    };

    sendRequest()
      .then(async (access_token) => {
        await AsyncStorage.setItem('auth_token', access_token);
        setDismissable(true);
        setLogin(true);
        navigation.navigate('Home');
      })
      .catch((reason) => {
        setDismissable(true);
        setRegisterError(reason.response.data[0].message);
      });
  };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <DateTimePicker
            testID="dateTimePicker"
            value={date ? date : new Date()}
            mode={mode}
            is24Hour={true}
            onChange={onChangeDate}
          />
          <Button bgColor={themeColors.main.A} onPress={closeCalendar}>
            Ok
          </Button>
        </Modal>
      </Portal>
      <Portal>
        <Modal
          visible={registerAttemptModal}
          onDismiss={hideRegisterModal}
          dismissable={dismissable}
          contentContainerStyle={containerStyle2}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          {registerError ? (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialIcons size={80} color={'red'} name={'error'} />
              <Text>{registerError}</Text>
            </View>
          ) : (
            <ActivityIndicator color={themeColors.main.A} size={80} />
          )}
        </Modal>
      </Portal>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ justifyContent: 'center', flex: 1 }}
        >
          <View style={registerStyle.logo}>
            <Text style={registerStyle.logoText}>weROCK</Text>
          </View>

          <View style={registerStyle.inputBox}>
            <BlueInput
              containerStyle={{ borderRadius: 4 }}
              label="Username"
              onChangeText={(value) => setData({ ...data, username: value })}
            />
          </View>
          <View style={registerStyle.inputBox}>
            <BlueInput
              containerStyle={{ borderRadius: 4 }}
              label="Email"
              onChangeText={(value) => setData({ ...data, email: value })}
            />
          </View>
          <View style={registerStyle.inputBox}>
            <BlueInput
              containerStyle={{ borderRadius: 4 }}
              label="Password"
              onChangeText={(value) => setData({ ...data, newPassword: value })}
              secret
            />
          </View>
          <View style={registerStyle.inputBox}>
            <BlueInput
              containerStyle={{ borderRadius: 4 }}
              label="Confirmar Palavra-Passe"
              onChangeText={(value) =>
                setData({ ...data, confirmPassword: value })
              }
              secret
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={[
                registerStyle.inputBox,
                { width: '50%', paddingRight: 12 },
              ]}
            >
              <Pressable
                onPress={() => {
                  if (Platform.OS === 'android') {
                    DateTimePickerAndroid.open({
                      testID: 'dateTimePicker',
                      value: date ? date : new Date(),
                      mode: mode,
                      is24Hour: true,
                      onChange: onChangeDate,
                    });
                    //showModal();
                  } else {
                    showModal();
                  }
                }}
              >
                <BlueInput
                  editable={false}
                  value={date ? mmddaa(date) : false}
                  containerStyle={{ borderRadius: 4 }}
                  label="dd/mm/aa"
                ></BlueInput>
                {Platform.OS !== 'android' && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date ? mmddaa(date) : new Date()}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                  />
                )}
              </Pressable>
            </View>
            <View
              style={[
                registerStyle.inputBox,
                { width: '50%', paddingLeft: 12 },
              ]}
            >
              <View
                style={{
                  borderRadius: 4,
                  borderWidth: 0,
                  overflow: 'hidden',
                  height: 40,
                  padding: 0,
                  backgroundColor: '#576F89',
                }}
              >
                <Picker
                  selectedValue={selectedGender}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedGender(itemValue)
                  }
                  style={{
                    position: 'relative',
                    top: -8,
                    left: 4,
                    borderTop: -12,
                    color: 'white',
                  }}
                  dropdownIconColor={'white'}
                >
                  <Picker.Item label="Masculino" value={0} />
                  <Picker.Item label="Feminino" value={1} />
                </Picker>
              </View>
            </View>
          </View>

          <View style={registerStyle.btn}>
            <BlueButton
              onPressEvent={async () => {
                if (!data.username) {
                  setDismissable(true);
                  setRegisterError('Escolha um username válido.');
                  setRegisterAttemptModal(true);
                  return;
                }
                if (!data.email) {
                  setDismissable(true);
                  setRegisterError('Escolha um email válido.');
                  setRegisterAttemptModal(true);
                  return;
                }
                if (!data.newPassword) {
                  setDismissable(true);
                  setRegisterError('Escolha uma password válida.');
                  setRegisterAttemptModal(true);
                  return;
                }
                if (data.newPassword !== data.confirmPassword) {
                  setDismissable(true);
                  setRegisterError('As passwords não coincidem.');
                  setRegisterAttemptModal(true);
                  return;
                }
                showRegisterModal();
                setTimeout(tryregister, 750);
              }}
              label="Registar-se"
              style={{ backgroundColor: '#394A58' }}
            />
          </View>
        </ScrollView>
        <RegisterFooter />
      </View>
    </Provider>
  );
}
const registerStyle = StyleSheet.create({
  logo: {
    width: '100%',
    padding: 40,
    paddingTop: 0,
  },
  logoText: {
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',

    color: themeColors.main.A,
  },
  inputBox: {
    paddingBottom: 24,
    paddingLeft: 20,
    paddingRight: 20,
  },
  rightInput: {
    marginLeft: 'auto',
  },
  btn: {
    paddingRight: 52,
    paddingLeft: 52,
    paddingBottom: 12,
    marginTop: 28,
  },

  iconText: {
    fontSize: 14,
  },
});
