import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/HomeScreen';
import SearchScreen from '../Search/SearchScreen';
import SettingScreen from '../Setting/SettingScreen';
import CompassScreen from '../Compass/CompassScreen';
import {COLORS, SIZES, FONTS} from '../../Constants/Theme';
import {IMAGES} from '../../Constants/Images';
const BottomTab = createBottomTabNavigator();

function MyTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Masjid"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Masjid') {
            iconName = focused ? IMAGES.mosque : IMAGES.mosque;
          } else if (route.name === 'Search') {
            iconName = focused ? IMAGES.search : IMAGES.search;
          } else if (route.name === 'Quran') {
            iconName = focused ? IMAGES.quran : IMAGES.quran;
          } else if (route.name === 'Setting') {
            iconName = focused ? IMAGES.setting : IMAGES.setting;
          }

          return (
            <View
              style={{
                height: 48,
                width: 48,
                backgroundColor: focused ? COLORS.background : COLORS.primary,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 12,
              }}>
              <Image
                source={iconName}
                resizeMode={'cover'}
                style={{
                  alignSelf: 'center',
                  height: focused ? 27.5 : 25,
                  width: focused ? 27.5 : 25,
                  tintColor: COLORS.black,
                }}
              />
            </View>
          );
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          ...FONTS.h5,
          marginBottom: 1.6,
        },
        tabBarStyle: {
          height: 80,
          width: SIZES.width - 30,
          borderRadius: SIZES.padding,
          backgroundColor: COLORS.primary,
          alignSelf: 'center',
          margin: SIZES.height < 700 ? 20 : 10,
        },
        tabBarActiveTintColor: COLORS.background,
        tabBarInactiveTintColor: COLORS.black,
      })}>
      <BottomTab.Screen name="Masjid" component={HomeScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Quran" component={CompassScreen} />
      <BottomTab.Screen name="Setting" component={SettingScreen} />
    </BottomTab.Navigator>
  );
}
export default MyTabs;
