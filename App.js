import { StatusBar } from 'expo-status-bar';
import { Animated, Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestPage from './screens/store/TestPage';
import {
  NativeBaseProvider,
  extendTheme,
  View,
  Box,
  HStack,
} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Profile from './screens/store/Profile';
import SettingsPage from './screens/store/SettingsPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import TestPage2 from './screens/store/TestPage2';
import TestPage3 from './screens/store/TestPage3';
import { useState } from 'react';
import Store from './screens/store/Store';
import DashboardHome from './screens/dashboard/DashboardHome';
import Orders from './screens/store/Orders';
import StoreCategories from './screens/store/StoreCategories';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  gradientHeaderOptions,
  gradientTabBarOptions,
  theme_obj,
  theme_config,
  CustomBottomTab,
} from './Theme';
import Product from './screens/store/Product';
import DashboardLotes from './screens/dashboard/DashboardLotes';
import { themeColors } from './Theme';
import StyledOnFocus from './components/StyledOnFocus';

function isRootStack(routeName) {
  switch (routeName) {
    case 'Tests2':
      return true;
    case 'Tests3':
      return true;
    case 'Produto':
      return true;
    default:
      return false;
  }
}

const RootStack = createNativeStackNavigator();
const HomeTab = createBottomTabNavigator();

export default function App() {
  const theme = extendTheme(theme_obj);
  const [dashboard, setDashboard] = useState(false);
  const [search, setSearch] = useState('');

  const Settings = () => <SettingsPage setDashboard={setDashboard} />;

  function HomeTabs({ navigation, route }) {
    return (
      <HomeTab.Navigator
        screenOptions={{
          ...gradientHeaderOptions,
          //...gradientTabBarOptions,
          tabBarStyle: { display: 'none' },
        }}
      >
        <HomeTab.Screen
          name="Home"
          options={{
            headerTintColor: 'white',
            headerBackground: () => (
              <View style={{ flex: 1 }}>
                <LinearGradient
                  style={{
                    flexDirection: 'row',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}
                  colors={[themeColors.main.D, themeColors.main.C]}
                  start={{ x: 0, y: 0.5 }}
                ></LinearGradient>
              </View>
            ),
            headerTitle: () => (
              <View style={{ width: '100%', backgroundColor: 'black' }}>
                <StyledOnFocus.Input
                  containerStyle={{
                    backgroundColor: 'black',
                    width: '100%',
                  }}
                  style={{
                    width: '100%',
                    backgroundColor: 'black',
                    borderWidth: 1,
                    borderColor: 'black',
                    placeholderTextColor: '#BDBDBD',
                  }}
                  placeholder={'O que você procura?'}
                ></StyledOnFocus.Input>
              </View>
            ),
            header: () => (
              <View style={{ height: 85 }}>
                <LinearGradient
                  style={{
                    flexDirection: 'row',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}
                  colors={[themeColors.main.D, themeColors.main.C]}
                  start={{ x: 0, y: 0.5 }}
                >
                  <View
                    style={{
                      width: '100%',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <StyledOnFocus.Input
                      containerStyle={{
                        width: '100%',
                        height: 40,
                        marginBottom: 8,
                        paddingHorizontal: 12,
                      }}
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 4,
                        width: '100%',
                        borderWidth: 1.5,
                        borderColor: '#0891B2',
                        placeholderTextColor: '#BDBDBD',
                        paddingHorizontal: 12,
                      }}
                      placeholder={'O que você procura?'}
                      placeholderTextColor={'black'}
                    />
                  </View>
                </LinearGradient>
              </View>
            ),
          }}
          component={Store}
        />
        <HomeTab.Screen name="Orders" component={Orders} />
        <HomeTab.Screen name="Profile" component={Profile} />
        <HomeTab.Screen name="Settings" component={Settings} />
        <HomeTab.Screen name="Dashboard" component={DashboardHome} />
        <HomeTab.Screen name="Lotes" component={DashboardLotes} />
      </HomeTab.Navigator>
    );
  }

  return (
    <NativeBaseProvider theme={theme} config={theme_config}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={({ route }) => ({
              //animation: 'slide_from_right',
              headerShown: isRootStack(route.name) ? true : false,
            })}
          >
            <RootStack.Screen
              name="HomeStack"
              component={HomeTabs}
            ></RootStack.Screen>
            <RootStack.Screen
              name="Tests2"
              component={TestPage2}
              options={{
                ...gradientHeaderOptions,
                gestureDirection: 'horizontal',
              }}
            ></RootStack.Screen>
            <RootStack.Screen
              name="Tests3"
              component={TestPage3}
              options={{ ...gradientHeaderOptions }}
            ></RootStack.Screen>
            <RootStack.Screen
              name="Produto"
              component={Product}
              options={{ ...gradientHeaderOptions }}
            ></RootStack.Screen>
          </RootStack.Navigator>
          <StatusBar style="light" />
          <CustomBottomTab dashboard={dashboard} setDashboard={setDashboard} />
        </NavigationContainer>
      </GestureHandlerRootView>
    </NativeBaseProvider>
  );
}

/*
        options={{
          headerLeft: () => {
            return (
              <Feather
                size={25}
                color="white"
                style={{ paddingLeft: 12 }}
                name="arrow-left"
                onPress={() => {
                  navigation.navigate('Home');
                }}
              />
            );
          },
        }}
        */
