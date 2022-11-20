import { View, Text, Linking, StyleSheet, ScrollView } from 'react-native';
import BlueInput from '../../components/store/BlueInput';
import BlueButton from '../../components/store/BlueButton';
import { Feather } from '@expo/vector-icons';
import { themeColors } from '../../Theme';
import { Input } from 'native-base';

export default function Register() {
  return (
    <ScrollView contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
      <View style={registerStyle.logo}>
        <Text style={registerStyle.logoText}>weROCK</Text>
      </View>

      <View style={registerStyle.inputBox}>
        <BlueInput
          label="Username"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
      </View>
      <View style={registerStyle.inputBox}>
        <BlueInput
          label="Password"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </View>
      <View style={registerStyle.inputBox}>
        <BlueInput
          label="Confirmar Palavra-Passe"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </View>
      <View>
        <View style={registerStyle.inputBox}>
          <BlueInput label="dd/mm/aa"></BlueInput>
        </View>
        <View style={registerStyle.inputBox}>
          <BlueInput label="Feminino"></BlueInput>
        </View>
      </View>

      <View style={registerStyle.btn}>
        <BlueButton
          label="Registar-se"
          style={{ backgroundColor: '#394A58' }}
        />
      </View>
    </ScrollView>
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
  btn: { paddingRight: 52, paddingLeft: 52, paddingBottom: 12, marginTop: 28 },
  iconText: {
    fontSize: 14,
  },
});
