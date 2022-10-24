import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestPage from './screens/store/TestPage';
import AboutPage from './screens/store/AboutPage';
import { NativeBaseProvider, extendTheme } from 'native-base';

const Stack = createNativeStackNavigator();

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        // 50: '#E3F2F9',
        // 100: '#C5E4F3',
        // ...
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        // 400: '#d97706',
      },
      main: {
        A: '#576F89',
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TestPage} />
          <Stack.Screen name="About" component={AboutPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );

  return (
    <View style={page_styles.container}>
      <StatusBar style="auto" />
      <TestPage />
    </View>
  );
}

const page_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    color: 'grey',
  },
});
