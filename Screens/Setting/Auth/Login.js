import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Header } from '../../../Component/Header'
import { COLORS,SIZES,FONTS } from '../../../Constants/Theme'
import { IMAGES } from '../../../Constants/Images'
import FormInput from '../../../Component/InputForm';
import TextButton from '../../../Component/TextButton'

export default function Login({navigation}) {
    const [Phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [EmailErr, setEmailErr] = React.useState('');
  const [passEmailErr, setPassEmailErr] = React.useState('');

  
  return (
    <View style={{
        flex:1
    }}>
      <Header title={"Login لوگن"}
      titleStyle={{
          marginRight:55
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
          marginLeft:15
        }}
        onPress={()=>{
            navigation.goBack()
        }}
        >
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
            color:COLORS.text
          }}>
          Let's Sign You In
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            alignSelf: 'center',
            color:COLORS.text
          }}>
          Login account to be part of Azaan اذان!
        </Text>
        <View style={{
            justifyContent:"center",
            alignSelf:"center",
            marginTop:45
        }}>
        <FormInput
          label={'Phone  فون'}
          value={Phone}
          onChange={text => {
            // utils.validateEmail(text,setEmailErr)
            setPhone(text);
          }}
          containerStyle={{
            // marginTop:20
          }}
          errorMsg={EmailErr}
          placeholder={'Number نمبر'}
          keyboardType="numeric"
          // autoCompleteType="none"
          returnKeyType={"next"}
          img={IMAGES.phone}
        />
        <FormInput
          label={'Password پاس ورڈ'}
          value={password}
          onChange={text => {
            // utils.validateEmail(text,setEmailErr)
            setPassword(text);
          }}
          secureTextEntry={!showPass}
          containerStyle={{
            // marginTop:20
          }}
          errorMsg={passEmailErr}
          placeholder={'Password پاس ورڈ'}
          keyboardType="default"
          // autoCompleteType="none"
          returnKeyType={"go"}
          onPress={() => setShowPass(!showPass)}
          img={showPass ? IMAGES.close : IMAGES.open}
        />
        <TextButton label={"Login"} icon={IMAGES.login} buttonContainerStyle={{
          marginTop:55
        }}/>
        </View>
    </View>
  )
}