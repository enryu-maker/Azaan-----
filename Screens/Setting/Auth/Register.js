import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Header} from '../../../Component/Header';
import {COLORS, SIZES, FONTS} from '../../../Constants/Theme';
import {IMAGES} from '../../../Constants/Images';
import FormInput from '../../../Component/InputForm';
import TextButton from '../../../Component/TextButton';

export default function Register({navigation}) {
  const [Phone, setPhone] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password1, setPassword1] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [showPass1, setShowPass1] = React.useState(false);
  const [EmailErr, setEmailErr] = React.useState('');
  const [passEmailErr, setPassEmailErr] = React.useState('');
  const [passEmailErr1, setPassEmailErr1] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header
        title={'Register رجسٹر کریں'}
        titleStyle={{
          marginRight: 35,
        }}
        leftComponent={
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              height: 40,
              width: 40,
              backgroundColor: COLORS.background,
              borderRadius: 12,
              alignSelf: 'center',
              marginLeft: 15,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={IMAGES.back}
              style={{
                height: 23,
                width: 23,
                alignSelf: 'center',
                justifyContent: 'center',
                tintColor: COLORS.text,
              }}
            />
          </TouchableOpacity>
        }
      />
      <Text
        style={{
          ...FONTS.h2,
          alignSelf: 'center',
          marginTop: '10%',
          color: COLORS.text,
        }}>
        Signup to continue!
      </Text>
      <Text
        style={{
          ...FONTS.body4,
          alignSelf: 'center',
          color: COLORS.text,
        }}>
        Signup account to be part of Azaan اذان!
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 45,
        }}>
        <FormInput
          label={'Phone  فون'}
          value={Phone}
          onChange={text => {
            // utils.validateEmail(text,setEmailErr)
            setPhone(text);
          }}
          containerStyle={
            {
              // marginTop:20
            }
          }
          errorMsg={EmailErr}
          placeholder={'Number نمبر'}
          keyboardType="numeric"
          // autoCompleteType="none"
          returnKeyType={'next'}
          img={IMAGES.phone}
        />
        <FormInput
          label={'Name  نام'}
          value={name}
          onChange={text => {
            // utils.validateEmail(text,setEmailErr)
            setName(text);
          }}
          // errorMsg={EmailErr}
          placeholder={'Name نام'}
          // keyboardType="numeric"
          // autoCompleteType="none"
          returnKeyType={'next'}
          img={IMAGES.pen}
        />
        <FormInput
          label={'Password پاس ورڈ'}
          value={password}
          onChange={text => {
            // utils.validateEmail(text,setEmailErr)
            setPassword(text);
          }}
          secureTextEntry={!showPass}
          containerStyle={
            {
              // marginTop:20
            }
          }
          errorMsg={passEmailErr}
          placeholder={'Password پاس ورڈ'}
          keyboardType="default"
          returnKeyType={'go'}
          onPress={() => setShowPass(!showPass)}
          img={showPass ? IMAGES.close : IMAGES.open}
        />
        <FormInput
          label={'Password پاس ورڈ'}
          value={password1}
          onChange={text => {
            // utils.validateEmail(text,setEmailErr)
            setPassword1(text);
          }}
          secureTextEntry={!showPass1}
          containerStyle={
            {
              // marginTop:20
            }
          }
          errorMsg={passEmailErr1}
          placeholder={'Password پاس ورڈ'}
          keyboardType="default"
          // autoCompleteType="none"
          returnKeyType={'go'}
          onPress={() => setShowPass1(!showPass1)}
          img={showPass1 ? IMAGES.close : IMAGES.open}
        />
        <TextButton
          label={'Register'}
          icon={IMAGES.register}
          buttonContainerStyle={{
            marginTop: 55,
          }}
        />
      </View>
    </View>
  );
}
