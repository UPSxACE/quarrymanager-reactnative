import NotificationToggle from '../../components/store/NotificationToggle';
import { View, Text, StyleSheet } from 'react-native';

export default function NotificationsScreen() {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Text style={styles.title}>Notificações Gerais</Text>

        <View style={{ paddingHorizontal: 8 }}>
          <NotificationToggle
            label={'Ativar Notificações de Telemóvel'}
            iconName={'bell-off'}
          />
        </View>
        <View style={{ paddingHorizontal: 8 }}>
          <NotificationToggle
            label={'Som das Notificações'}
            iconName={'volume-x'}
          />
        </View>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.title}>Notificações Personalizadas</Text>
        <View style={{ paddingHorizontal: 8 }}>
          <NotificationToggle label={'Mensagem'} iconName={'mail'} />
        </View>
        <View style={{ paddingHorizontal: 8 }}>
          <NotificationToggle
            label={'Atualizações nos Pedidos'}
            iconName={'box'}
          />
        </View>
        <View style={{ paddingHorizontal: 8 }}>
          <NotificationToggle label={'Promoções'} iconName={'dollar-sign'} />
        </View>
        <View style={{ paddingHorizontal: 8 }}>
          <NotificationToggle label={'Novidades'} iconName={'tag'} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    paddingStart: 8,
    marginBottom: 12,
  },
  viewStyle: {
    paddingStart: 8,
    paddingEnd: 8,
  },
});
