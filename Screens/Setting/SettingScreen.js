import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../Constants/Theme';
import {Header} from '../../Component/Header';
import SettingButton from '../../Component/SettingButton';
import {IMAGES} from '../../Constants/Images';

import VerticalDivider from '../../Component/VerticalDivider';
import {useSelector} from 'react-redux';

export default function SettingScreen({navigation}) {
  const isLogged = useSelector(state => state.Reducers.isLogged);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header title={'Setting ماحول'} />
      <View
        style={{
          backgroundColor: COLORS.background,
          padding: 15,
          width: SIZES.width - 50,
          alignSelf: 'center',
          borderRadius: SIZES.padding,
          marginTop: 20,
        }}>
        {!isLogged ? (
          <>
            <SettingButton
              name={'Login'}
              urdu_name={'لوگن'}
              img={IMAGES.login}
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
            <VerticalDivider />
            <SettingButton
              name={'Register'}
              urdu_name={'حساب'}
              img={IMAGES.register}
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
            <VerticalDivider />
          </>
        ) : (
          <>
            <SettingButton
              name={'Akif Khan'}
              // urdu_name={'عکیف خان'}
              img={IMAGES.login}
              imgContainer={{
                height:50,
                width:50,
                borderRadius:25
              }}
              imgStyle={{
                height:25,
                width:25
              }}
              container={{
                margin:25
              }}
              onPress={() => {
                navigation.navigate('Profile');
              }}
            />
            <VerticalDivider />
            <SettingButton
              name={'Add Masjid'}
              urdu_name={'جمع کرنا'}
              img={IMAGES.mosque}
              onPress={() => {
                navigation.navigate('AddMasjid');
              }}
            />
            <VerticalDivider />
          </>
        )}
      </View>
      <View
        style={{
          backgroundColor: COLORS.background,
          padding: 15,
          width: SIZES.width - 50,
          alignSelf: 'center',
          borderRadius: SIZES.padding,
          marginTop: 20,
        }}>
        <SettingButton
          name={'Sound'}
          urdu_name={'صدا'}
          img={IMAGES.audio}
          onPress={() => {
            navigation.navigate('Sound');
          }}
        />
            <VerticalDivider />
      </View>
      <View
        style={{
          backgroundColor: COLORS.background,
          // padding: 15,
          width: SIZES.width - 50,
          alignSelf: 'center',
          borderRadius: SIZES.padding,
          marginTop: 20,
        }}></View>
    </View>
  );
}
