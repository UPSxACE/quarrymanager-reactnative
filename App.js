import { StatusBar } from 'expo-status-bar';
import { Animated, Button, Pressable, StyleSheet, Text } from 'react-native';
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
import { useEffect, useState } from 'react';
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
import Register from './screens/store/Register';
import LoginPage from './screens/store/LoginPage';

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

  const Settings = () => (
    <SettingsPage setDashboard={setDashboard} setLogin={setLogin} />
  );
  const Login = () => <LoginPage setLogin={setLogin} />;

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

        <HomeTab.Screen name="Register" component={Register} />
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
