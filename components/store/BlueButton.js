import { Pressable, View, Text, Alert } from 'react-native';

export default function BlueButton({ label, onPressEvent }) {
  return (
    <View style={{ justifyContent: 'center', width: '100%' }}>
      <Pressable
        style={{
          backgroundColor: '#576F89',
          paddingVertical: 8,
          borderRadius: 4,
        }}
        onPress={onPressEvent ? onPressEvent : null}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>{label}</Text>
      </Pressable>
    </View>
  );
}
