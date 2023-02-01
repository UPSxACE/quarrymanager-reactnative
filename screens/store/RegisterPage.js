import {
  View,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
import BlueInput from '../../components/store/BlueInput';
import BlueButton from '../../components/store/BlueButton';
import { Feather } from '@expo/vector-icons';
import { themeColors } from '../../Theme';
import { Button, Input } from 'native-base';
import { CommonActions, useNavigation } from '@react-navigation/native';
import RegisterFooter from '../../components/store/RegisterFooter';
import { useState } from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

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

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };

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
              onChangeText={(value) =>
                setData({ ...formData, username: value })
              }
            />
          </View>
          <View style={registerStyle.inputBox}>
            <BlueInput
              containerStyle={{ borderRadius: 4 }}
              label="Password"
              onChangeText={(value) =>
                setData({ ...formData, newPassword: value })
              }
              secret
            />
          </View>
          <View style={registerStyle.inputBox}>
            <BlueInput
              containerStyle={{ borderRadius: 4 }}
              label="Confirmar Palavra-Passe"
              onChangeText={(value) => setData({ ...formData })}
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
                  if (Platform.OS !== 'android') {
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
              <BlueInput
                containerStyle={{ borderRadius: 4 }}
                label="Feminino"
              ></BlueInput>
            </View>
          </View>

          <View style={registerStyle.btn}>
            <BlueButton
              onPressEvent={async () => {
                // await
                navigation.dispatch(resetActionHome);
                setLogin(true);
                AsyncStorage.setItem('login', 'true');
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
