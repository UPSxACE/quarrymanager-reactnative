import * as React from 'react';
import ArrowButton from '../../components/store/ArrowButton';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SettingsPage({ setDashboard }) {
  const navigation = useNavigation();

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
          destiny={['HomeStack', 'Dashboard']}
          onPressEvent={async () => {
            await navigation.navigate('HomeStack', { screen: 'Dashboard' });
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
        <ArrowButton label="Definições da Conta" destiny={['BtHome', 'Home']} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingBottom: 12,
        }}
      >
        <ArrowButton label="Pedidos" destiny={['BtHome', 'Home']} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingBottom: 12,
        }}
      >
        <ArrowButton label="Notificações" destiny={['BtHome', 'Home']} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingBottom: 12,
        }}
      >
        <ArrowButton label="Terminar Sessão" destiny={['BtHome', 'Home']} />
      </View>
    </View>
  );
}
