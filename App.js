import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  Animated,
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestPage from './screens/store/TestPage';
import { NativeBaseProvider, extendTheme, Box, HStack } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Profile from './screens/store/Profile';
import SettingsPage from './screens/store/SettingsPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import TestPage2 from './screens/store/TestPage2';
import TestPage3 from './screens/store/TestPage3';
import { useCallback, useEffect, useState } from 'react';
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
  SearchBarHeader,
} from './Theme';
import Product from './screens/store/Product';
import DashboardLotes from './screens/dashboard/DashboardLotes';
import { themeColors } from './Theme';
import StyledOnFocus from './components/StyledOnFocus';
import ChangeUsername from './screens/store/ChangeUsername';
import ChangeEmail from './screens/store/ChangeEmail';
import ChangePassword from './screens/store/ChangePassword';
import RegisterPage from './screens/store/RegisterPage';
import LoginPage from './screens/store/LoginPage';
import * as SplashScreen from 'expo-splash-screen';
import OrderProduct from './screens/store/OrderProduct';
import TestPage4 from './screens/store/TestPage4';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotificationsScreen from './screens/store/NotificationsScreen';
import Chat from './screens/store/Chat';
import StorePage from './screens/store/StorePage';
import DashboardPedido from './screens/dashboard/DashboardPedido';
import { firebase_db } from './firebase';
import { ref } from 'firebase/database';
import axios from 'axios';
import api from './api';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useRef } from 'react';
import DashboardTransportadora from './screens/dashboard/DashboardTransportadoras';
import DashboardProdutos from './screens/dashboard/DashboardProdutos';

SplashScreen.preventAutoHideAsync();
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function isRootStack(routeName) {
  switch (routeName) {
    case 'Pedido':
      return true;
    case 'Transportadora':
      return true;
    case 'Detalhes Produto':
      return true;
    case 'Tests3':
      return true;
    case 'Produto':
      return true;
    case 'Alterar Username':
      return true;
    case 'Alterar Email':
      return true;
    case 'Alterar Palavra-Passe':
      return true;
    case 'Notificações':
      return true;
    case 'Pedido de Orçamento':
      return true;
    case 'Chat':
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
  const [login, setLogin] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  // Código relacionado às push-up notifications
  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      setExpoPushToken(token);
    });

    notificationListener.current = responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    return token;
  }
  // Fim de código relacionado às push-up notifications

  useEffect(() => {
    async function checkLogin() {
      setLogin((await AsyncStorage.getItem('auth_token')) ? true : false);
    }

    checkLogin();
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        //await Font.loadAsync(Entype.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // fake 2 seconds load:
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    const update_token = async () => {
      const auth_token = await AsyncStorage.getItem('auth_token');
      await axios.get(api.refresh_token(expoPushToken), {
        headers: await api.gerar_auth_header(),
      });
    };

    if (login && expoPushToken) {
      update_token();
    }
  }, [login, expoPushToken]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const Settings = () => (
    <SettingsPage setDashboard={setDashboard} setLogin={setLogin} />
  );
  const Login = () => <LoginPage setLogin={setLogin} />;

  const Register = () => <RegisterPage setLogin={setLogin} />;

  function HomeTabs({ navigation, route }) {
    return (
      <HomeTab.Navigator
        initialRouteName={'Login'}
        screenOptions={{
          ...gradientHeaderOptions,
          //...gradientTabBarOptions,
          tabBarStyle: { display: 'none' },
        }}
      >
        <HomeTab.Screen
          name={dashboard ? 'Dashboard' : login ? 'Home' : 'Login'}
          options={{
            headerTintColor: 'white',
            headerShown: !login ? false : true,
            header: dashboard
              ? undefined
              : () => {
                  return <></>;
                },
          }}
          component={dashboard ? DashboardHome : login ? StorePage : Login}
        />

        <HomeTab.Screen name="Pedidos" component={Orders} />
        <HomeTab.Screen name="Perfil" component={Profile} />
        <HomeTab.Screen name="Definições" component={Settings} />
        <HomeTab.Screen name="Lotes" component={DashboardLotes} />

        <HomeTab.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
      </HomeTab.Navigator>
    );
  }

  if (!appIsReady) {
    return null;
    return (
      <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        onLayout={onLayoutRootView}
      >
        <Text>Loading...</Text>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <NativeBaseProvider theme={theme} config={theme_config}>
        <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
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
                name="Pedido"
                component={DashboardPedido}
                options={{
                  ...gradientHeaderOptions,
                }}
              ></RootStack.Screen>
              <RootStack.Screen
                name="Transportadora"
                component={DashboardTransportadora}
                options={{
                  ...gradientHeaderOptions,
                }}
              ></RootStack.Screen>
              <RootStack.Screen
                name="Detalhes Produto"
                component={DashboardProdutos}
                options={{
                  ...gradientHeaderOptions,
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
                options={({ route }) => {
                  return {
                    ...gradientHeaderOptions,
                    headerTitle: route.params.title,
                  };
                }}
              ></RootStack.Screen>
              <RootStack.Screen
                name="Alterar Username"
                component={ChangeUsername}
                options={{ ...gradientHeaderOptions }}
              ></RootStack.Screen>
              <RootStack.Screen
                name="Alterar Email"
                component={ChangeEmail}
                options={{ ...gradientHeaderOptions }}
              ></RootStack.Screen>
              <RootStack.Screen
                name="Alterar Palavra-Passe"
                component={ChangePassword}
                options={{ ...gradientHeaderOptions }}
              ></RootStack.Screen>
              <RootStack.Screen
                name="Pedido de Orçamento"
                component={OrderProduct}
                options={{ ...gradientHeaderOptions }}
              ></RootStack.Screen>
              <RootStack.Screen
                name="Notificações"
                component={NotificationsScreen}
                options={{ ...gradientHeaderOptions }}
              ></RootStack.Screen>
              <RootStack.Screen
                name="Chat"
                options={({ route }) => {
                  if (route.params) {
                    return {
                      ...gradientHeaderOptions,
                      headerTitle: route.params.title,
                    };
                  }
                  return {
                    ...gradientHeaderOptions,
                  };
                }}
                component={Chat}
              />
            </RootStack.Navigator>
            <StatusBar style={login ? 'light' : 'dark'} />
            <CustomBottomTab
              login={login}
              dashboard={dashboard}
              setDashboard={setDashboard}
            />
          </NavigationContainer>
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </View>
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
