import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

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

const tabRoutes = [
  { destiny: ['HomeStack', 'Home'], icon: 'home' },
  { destiny: ['HomeStack', 'Orders'], icon: 'package' },
  { destiny: ['HomeStack', 'Profile'], icon: 'user' },
  { destiny: ['HomeStack', 'Settings'], icon: 'menu' },
];

export function CustomBottomTab() {
  const navigation = useNavigation();
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
        {tabRoutes.map((tab, index) => {
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
