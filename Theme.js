import { CommonActions, useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useEffect } from 'react';
import StyledOnFocus from './components/StyledOnFocus';

export const themeColors = {
  main: {
    A: '#576F89',
    B: '#9FB6D4',
    greyComponentBg: '#F5F5F5',
    greyComponentText: '#6C6B6B',
    C: '#82A2CC',
    D: '#394A58',
    blueComponentBorder: '#7F9EC6',
    dashboardComponentColor1: '#0369A1',
    mainTextColor: '#464748',
    secondaryTextColor: '#6E7173',
    weakGrey: '#959595',
    dashboardBackground: '#F3F3F3',
  },
};

export const gradientHeaderOptions = {
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
};

export const gradientTabBarOptions = {
  tabBarBackground: () => (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'space-evenly',
        }}
        colors={[themeColors.main.C, themeColors.main.D]}
        start={{ x: 0, y: 0.5 }}
        justifyContent={'space-evenly'}
      ></LinearGradient>
    </View>
  ),
};

export const SearchBarHeader = ({ searchState }) => {
  const { state } = searchState;
  const { setState } = searchState;

  return (
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
            paddingHorizontal: 12,
          }}
        >
          <StyledOnFocus.Input
            value={state}
            onChangeText={(value) => setState(value)}
            containerStyle={{
              width: '100%',
              height: 40,
              marginBottom: 8,
              backgroundColor: 'white',
              borderRadius: 4,
              borderWidth: 1,
              borderColor: themeColors.main.mainTextColor,
              //borderColor: '#0891B2',
            }}
            containerFocusStyle={{ borderColor: '#0891B2', borderWidth: 1.5 }}
            style={{
              width: '100%',
              placeholderTextColor: '#BDBDBD',
              paddingHorizontal: 0,
            }}
            placeholder={'O que você procura?'}
            placeholderTextColor={themeColors.main.mainTextColor}
            inputRightElement={
              <View>
                <Pressable
                  style={{
                    height: 38.5,
                    justifyContent: 'center',
                    paddingHorizontal: 12,
                    //borderTopRightRadius: 4,
                    //borderBottomRightRadius: 4,
                  }}
                >
                  <Feather
                    size={16}
                    color={themeColors.main.mainTextColor}
                    name={'mic'}
                  />
                </Pressable>
              </View>
            }
            inputLeftElement={
              <View>
                <Pressable
                  style={{
                    height: 38.5,
                    justifyContent: 'center',
                    paddingHorizontal: 12,
                    //borderTopRightRadius: 4,
                    //borderBottomRightRadius: 4,
                  }}
                >
                  <Feather
                    size={16}
                    color={themeColors.main.mainTextColor}
                    name={'search'}
                  />
                </Pressable>
              </View>
            }
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export const theme_obj = {
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
      B: '#9FB6D4',
      greyComponentBg: '#F5F5F5',
      greyComponentText: '#6C6B6B',
      C: '#82A2CC',
      D: '#394A58',
      blueComponentBorder: '#7F9EC6',
      dashboardComponentColor1: '#0369A1',
      mainTextColor: '#464748',
      secondaryTextColor: '#6E7173',
      weakGrey: '#959595',
    },
  },
};

export const theme_config = {
  dependencies: {
    'linear-gradient': LinearGradient,
  },
};

const resetActionHome = CommonActions.reset({
  index: 0,
  routes: [{ name: 'HomeStack', params: { screen: 'Home' } }],
});

export function CustomBottomTab({ dashboard, setDashboard, login }) {
  const tabRoutes = [
    { destiny: ['HomeStack', 'Home'], icon: 'home' },
    { destiny: ['HomeStack', 'Orders'], icon: 'package' },
    { destiny: ['HomeStack', 'Profile'], icon: 'user' },
    { destiny: ['HomeStack', 'Settings'], icon: 'menu' },
  ];

  const dashboardRoutes = [
    { destiny: ['HomeStack', 'Dashboard'], icon: 'home' },
    { destiny: ['HomeStack', 'Lotes'], icon: 'layers' },
    {
      destiny: ['HomeStack', 'Home'],
      icon: 'log-out',
      onPressEvent: async () => {
        // await
        navigation.dispatch(resetActionHome);
        setDashboard(false);
      },
    },
  ];

  const navigation = useNavigation();

  if (!login) {
    return <></>;
  }

  return (
    <View>
      <LinearGradient
        style={{
          flexDirection: 'row',
          height: 50,
          width: '100%',
          justifyContent: 'space-evenly',
        }}
        colors={[themeColors.main.C, themeColors.main.D]}
        start={{ x: 0, y: 0.5 }}
        justifyContent={'space-evenly'}
      >
        {dashboard
          ? dashboardRoutes.map((tab, index) => {
              return (
                <Pressable
                  key={index}
                  onPressIn={() => {
                    tab.onPressEvent
                      ? tab.onPressEvent()
                      : navigation.navigate(tab.destiny[0], {
                          screen: tab.destiny[1],
                          RID: tab.destiny[0],
                        });
                  }}
                  style={{
                    flex: 1,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Feather name={tab.icon} size={25} color={'white'} />
                </Pressable>
              );
            })
          : tabRoutes.map((tab, index) => {
              return (
                <Pressable
                  key={index}
                  onPressIn={() => {
                    navigation.navigate(tab.destiny[0], {
                      screen: tab.destiny[1],
                      RID: tab.destiny[0],
                    });
                  }}
                  style={{
                    flex: 1,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Feather name={tab.icon} size={25} color={'white'} />
                </Pressable>
              );
            })}
      </LinearGradient>
    </View>
  );
}
