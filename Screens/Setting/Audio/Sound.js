import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import AudioCard from './AudioCard'
import { Header } from '../../../Component/Header'
import { COLORS,SIZES,FONTS } from '../../../Constants/Theme'
import { IMAGES } from '../../../Constants/Images'
export default function Sound({navigation}) {
  return (
    <View style={{
      flex:1
    }}>
      <Header title={" Sound آواز "}
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
     <AudioCard audio_name={"Amir Kadir Azaan"} audio_name_urdu={"امیر قادر اذان"} current_sound={true}/>
    </View>
  )
}