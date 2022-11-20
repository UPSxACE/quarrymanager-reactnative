import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function HomeFooter() {
  const navigation = useNavigation();

  return (
    <View style={footer_styles.footerContainer}>
      <Text style={footer_styles.whiteText}>
        Não tens uma conta?{' '}
        <Text
          style={footer_styles.underlined}
          onPress={() => {
            navigation.navigate('HomeStack', { screen: 'Register' });
          }}
        >
          Regista-te
        </Text>
        .
      </Text>
    </View>
  );
}

const footer_styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    backgroundColor: '#576F89',
    paddingBottom: Platform.OS === 'ios' ? 12 : 12,
  },
  whiteText: {
    color: 'white',
    textAlign: 'center',
  },
  underlined: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
