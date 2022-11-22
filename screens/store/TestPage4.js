import { View, Text, Button } from 'react-native';

export default function TestPage4() {
  return (
    <View>
      <Text style={{ fontSize: 32, padding: 10 }}>Teste #0</Text>
      <Text>Contagem Re-render: 0</Text>
      <Text>Contagem uE: 0</Text>
      <Button title='Click'></Button>
    </View>
  );
}
