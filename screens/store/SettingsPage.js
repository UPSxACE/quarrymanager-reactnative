import * as React from 'react';
import ArrowButton from '../../components/store/ArrowButton';
import { View } from 'react-native';

export default function SettingsPage() {
  return (
    <View h={'100%'}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 12,
          paddingVertical: 12,
        }}
      >
        <ArrowButton label="Dashboard" destiny={['BtHome', 'Home']} />
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
