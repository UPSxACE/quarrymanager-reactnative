import { View, Text } from 'react-native';
import WhiteInput from '../../components/store/WhiteInput';
import WhiteButton from '../../components/store/WhiteButton';
import * as React from 'react';

export default function ChangeEmail() {
  const [formData, setData] = React.useState({});
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ paddingHorizontal: 12, paddingTop: 12, width: '100%' }}>
        <WhiteInput label="Adicionar novo endereço de e-mail"></WhiteInput>
      </View>
      <View style={{ paddingHorizontal: 12, paddingTop: 12, width: '100%' }}>
        <WhiteInput
          label="Password"
          onChangeText={(value) => setData({ ...formData, name: value })}
          secret
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            paddingTop: 12,
            fontSize: 10,
            width: '100%',
            textAlign: 'center',
            textDecorationLine: 'underline',
          }}
        >
          Para guardares as alterações, introduz a tua palavra-passe.
        </Text>
      </View>
      <View style={{ paddingTop: 12, width: '100%' }}>
        <WhiteButton label="Guardar Username" />
      </View>
    </View>
  );
}
