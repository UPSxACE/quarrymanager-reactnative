import { Pressable, View, Text, Alert } from 'react-native';

export default function BlueButton({ label }) {
  return (
    <View style={{ justifyContent: 'center', width: '100%' }}>
      <Pressable
        style={{
          backgroundColor: '#576F89',
          paddingVertical: 8,
          borderRadius: 4,
        }}
        onPress={() => Alert.alert('Simple Pressable pressed')}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>{label}</Text>
      </Pressable>
    </View>
  );
}
