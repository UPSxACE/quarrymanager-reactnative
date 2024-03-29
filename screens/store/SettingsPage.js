import * as React from 'react';
import ArrowButton from '../../components/store/ArrowButton';
import { View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsPage({ setDashboard, setLogin }) {
  const navigation = useNavigation();
  const resetActionLogout = CommonActions.reset({
    index: 0,
    routes: [{ name: 'HomeStack', params: { screen: 'Login' } }],
  });
  const resetActionDashboard = CommonActions.reset({
    index: 0,
    routes: [{ name: 'HomeStack', params: { screen: 'Dashboard' } }],
  });

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingVertical: 12,
        }}
      >
        <ArrowButton
          label="Dashboard"
          destiny={['HomeStack', 'Home']}
          onPressEvent={async () => {
            //await
            navigation.dispatch(resetActionDashboard);
            setDashboard(true);
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingBottom: 12,
        }}
      >
        <ArrowButton label="Definições da Conta" destiny={['Perfil']} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingBottom: 12,
        }}
      >
        <ArrowButton label="Pedidos" destiny={['Pedidos']} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingBottom: 12,
        }}
      >
        <ArrowButton label="Notificações" destiny={['Notificações']} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingBottom: 12,
        }}
      >
        <ArrowButton
          label="Terminar Sessão"
          destiny={['HomeStack', 'Login']}
          onPressEvent={async () => {
            // await
            navigation.dispatch(resetActionLogout);
            AsyncStorage.removeItem('auth_token');
            setLogin(false);
          }}
        />
      </View>
    </View>
  );
}
