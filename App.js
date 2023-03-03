import { enableScreens } from 'react-native-screens';
import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import {COLORS} from './Constants/Theme'
import MainCard from './Component/mainCard'
import MyTabs from './Screens/Route/Tab'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store } from './Store'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Login from './Screens/Setting/Auth/Login'
import Register from './Screens/Setting/Auth/Register'
import Sound from './Screens/Setting/Audio/Sound'
import AddMasjid from './Screens/Setting/Masjid/AddMasjid'
import Profile from './Screens/Setting/Profile/Profile'
import {request, PERMISSIONS, requestMultiple} from 'react-native-permissions';
import InfoScreen from './Screens/Search/InfoScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurahScreen from './Screens/Compass/SurahScreen';
const Stack = createNativeStackNavigator()
export default function App() {
  const [PermissionResult, setPermissionResult] = React.useState(null);
  requestMultiple(
    Platform.OS === 'ios'
      ? [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY,PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
      : [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION,PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION],
  ).then(result => {
    setPermissionResult(result);
  });
  React.useState(()=>{
    enableScreens(true);
  },[])
  return (
    <Provider store={store}>
    <View style={{
      flex:1,
      backgroundColor:COLORS.white
    }}>
      <StatusBar
            barStyle={Platform.OS == 'android' ? 'default' : 'dark-content'}
            backgroundColor={'black'}
          />
      <NavigationContainer>
      <Stack.Navigator screenOptions={({navigation})=>{
          return{
            gestureEnabled:true,
            detachPreviousScreen:!navigation.isFocused(),
            headerShown: false,
            animation:"slide_from_right",
            gestureDirection:"horizontal"
          }
        }}
        // animation="slide"
          initialRouteName={'Home'}>
            <Stack.Screen name='Home' component={MyTabs} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Sound' component={Sound} />
            <Stack.Screen name='AddMasjid' component={AddMasjid} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Info' component={InfoScreen} />
            <Stack.Screen name='Surah' component={SurahScreen} />

          </Stack.Navigator>
      </NavigationContainer>
    </View>
    </Provider>
  )
}


