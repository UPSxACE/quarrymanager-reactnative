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

SplashScreen.preventAutoHideAsync();

function isRootStack(routeName) {
  switch (routeName) {
    case 'Tests2':
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
  const onLayoutRootView = useCallback(async () => {
    console.log('USED!');
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
    const [search, setSearch] = useState('');

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
                  return (
                    <SearchBarHeader
                      searchState={{ state: search, setState: setSearch }}
                    />
                  );
                },
          }}
          component={dashboard ? DashboardHome : login ? Store : Login}
        />
        <HomeTab.Screen name="Orders" component={Orders} />
        <HomeTab.Screen name="Profile" component={Profile} />
        <HomeTab.Screen name="Settings" component={Settings} />
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
    console.log('return 1');
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
