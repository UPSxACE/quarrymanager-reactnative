import { View, Text } from 'react-native';

export default function HomeFooter() {
  return (
    <View style={footer_styles.footerContainer}>
      <Text style={footer_styles.whiteText}>
        Não tens uma conta? <Text>Regista-te</Text>.
      </Text>
    </View>
  );
}

const footer_styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    backgroundColor: '#576F89',
  },
  whiteText: {
    color: 'white',
  },
});
