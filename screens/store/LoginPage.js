import {
  View,
  Text,
  Linking,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import BlueInput from '../../components/store/BlueInput';
import BlueButton from '../../components/store/BlueButton';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { themeColors } from '../../Theme';
import React from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import HomeFooter from '../../components/store/HomeFooter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal, Portal, Provider } from 'react-native-paper';
import axios from 'axios';
import api from '../../api';

export default function LoginPage({ setLogin }) {
  const [formData, setData] = React.useState({});
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);
  const [dismissable, setDismissable] = React.useState(true);
  const [loginError, setLoginError] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => {
    setDismissable(false);
    setLoginError(false);
    setVisible(false);
  };
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    width: 250,
    height: 200,
  };

  const trylogin = () => {
    const sendRequest = async () => {
      const result = await axios.post(api.login, { ...formData });
      return result.data.acess_token;
    };

    sendRequest()
      .then(async (acess_token) => {
        await AsyncStorage.setItem('auth_token', acess_token);
        setDismissable(true);
        setLogin(true);
      })
      .catch((reason) => {
        setDismissable(true);
        setLoginError(reason.response.data[0].message);
      });
  };

  const resetActionLogin = CommonActions.reset({
    index: 0,
    routes: [{ name: 'HomeStack', params: { screen: 'Home' } }],
  });

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          dismissable={dismissable}
          contentContainerStyle={containerStyle}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          {loginError ? (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <MaterialIcons size={80} color={'red'} name={'error'} />
              <Text>{loginError}</Text>
            </View>
          ) : (
            <ActivityIndicator color={themeColors.main.A} size={80} />
          )}
        </Modal>
      </Portal>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <View style={loginStyles.logo}>
            <Text style={loginStyles.logoText}>weROCK</Text>
          </View>

          <View style={loginStyles.inputBox}>
            <BlueInput
              containerStyle={{ borderRadius: 4 }}
              label="Username"
              onChangeText={(value) => setData({ ...formData, email: value })}
            />
          </View>
          <View style={loginStyles.inputBox}>
            <BlueInput
              containerStyle={{ borderRadius: 4 }}
              label="Password"
              onChangeText={(value) =>
                setData({ ...formData, password: value })
              }
              secret
            />
          </View>

          <View style={loginStyles.btn}>
            <BlueButton
              label="Iniciar sessao"
              style={{ backgroundColor: '#394A58' }}
              onPressEvent={async () => {
                if (!formData.email) {
                  setDismissable(true);
                  setLoginError('Insira um username.');
                  showModal();
                  return;
                }
                if (!formData.password) {
                  setDismissable(true);
                  setLoginError('Insira a sua password.');
                  showModal();
                  return;
                }
                showModal();
                setTimeout(trylogin, 750);
              }}
            />
          </View>
          <Text
            style={loginStyles.link}
            onPress={() => {
              // Linking.openURL('https://twitter.com/?lang=pt');
            }}
          >
            Esqueceste-te da palavra passe?
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: 20,
              paddingBottom: 40,
              paddingTop: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: 'black',
              }}
            />
            <View>
              <Text style={{ width: 50, textAlign: 'center' }}>OU</Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: 'black',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <Pressable style={loginStyles.iconstyle}>
              <Feather color="white" size={22} name="facebook"></Feather>
            </Pressable>
            <Pressable style={loginStyles.iconstyle}>
              <Feather color="white" size={22} name="twitter"></Feather>
            </Pressable>
            <Pressable style={loginStyles.iconstyle}>
              <Feather color="white" size={22} name="mail"></Feather>
            </Pressable>
          </View>
        </ScrollView>
        <HomeFooter />
      </View>
    </Provider>
  );
}

const loginStyles = StyleSheet.create({
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

  link: {
    color: themeColors.main.A,
    textAlign: 'center',
    marginBottom: 20,
  },
  btn: { paddingRight: 52, paddingLeft: 52, paddingBottom: 12 },
  iconText: {
    fontSize: 14,
  },
  iconView: {
    width: 240,
    backgroundColor: 'yellow',
  },
  iconstyle: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: themeColors.main.A,
  },
});
