import { View, Text, Linking, StyleSheet, ScrollView } from 'react-native';
import BlueInput from '../../components/store/BlueInput';
import BlueButton from '../../components/store/BlueButton';
import { Feather } from '@expo/vector-icons';
import { themeColors } from '../../Theme';
import React from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import HomeFooter from '../../components/store/HomeFooter';

export default function LoginPage({ setLogin }) {
  const [formData, setData] = React.useState({});
  const navigation = useNavigation();
  const resetActionLogin = CommonActions.reset({
    index: 0,
    routes: [{ name: 'HomeStack', params: { screen: 'Home' } }],
  });

  return (
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
            label="Username"
            onChangeText={(value) => setData({ ...formData, name: value })}
          />
        </View>
        <View style={loginStyles.inputBox}>
          <BlueInput
            containerStyle={{ borderRadius: 4 }}
            label="Password"
            onChangeText={(value) => setData({ ...formData, name: value })}
            secret
          />
        </View>

        <View style={loginStyles.btn}>
          <BlueButton
            label="Iniciar sessao"
            style={{ backgroundColor: '#394A58' }}
            onPressEvent={async () => {
              await navigation.dispatch(resetActionLogin);
              setLogin(true);
            }}
          />
        </View>
        <Text
          style={loginStyles.link}
          onPress={() => {
            Linking.openURL('https://twitter.com/?lang=pt');
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
          <View style={loginStyles.iconstyle}>
            <Feather color="white" size={22} name="facebook"></Feather>
          </View>
          <View style={loginStyles.iconstyle}>
            <Feather color="white" size={22} name="twitter"></Feather>
          </View>
          <View style={loginStyles.iconstyle}>
            <Feather color="white" size={22} name="mail"></Feather>
          </View>
        </View>
      </ScrollView>
      <HomeFooter />
    </View>
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
