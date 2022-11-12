import { Feather } from '@expo/vector-icons';
import { Text, StyleSheet, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../../Theme';

export default function ArrowButton({ label, destiny }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{ width: '100%' }}
      onPress={() => navigation.navigate(destiny[0], { screen: destiny[1] })}
    >
      <View style={styles.container}>
        <View style={{ height: 40, paddingLeft: 12, justifyContent: 'center' }}>
          <Text style={{ color: '#000' }}>{label}</Text>
        </View>
        <View
          style={{
            height: 40,
            marginLeft: 'auto',
            justifyContent: 'center',
            paddingRight: 4,
          }}
        >
          <Feather size={24} color="#000" name="chevron-right" />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderColor: themeColors.main.blueComponentBorder,
    borderWidth: 1,
  },
});
