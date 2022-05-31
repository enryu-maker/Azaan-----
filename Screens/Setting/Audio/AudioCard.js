import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS,SIZES,FONTS } from '../../../Constants/Theme'
import { IMAGES } from '../../../Constants/Images'
export default function AudioCard({
    navigation,
    audio_name,
    audio_name_urdu,
    current_sound,
}) {
  return (
    <View style={{
        height:70,
        marginTop:20,
        backgroundColor:COLORS.background,
        borderRadius:SIZES.radius,
        width:SIZES.width-50,
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"space-between"
    }}>
        <View style={{
            flexDirection:"column",
            justifyContent:"center",
            marginLeft:20
        }}>
        <Text style={{
            ...FONTS.h3,
            color:COLORS.text,
            alignSelf:"center"
        }}>
            {audio_name}
        </Text>
        <Text style={{
            ...FONTS.h2,
            color:COLORS.text,
            alignSelf:"center"
        }}>
           {audio_name_urdu}
        </Text>
        </View>
        <View style={{
            flexDirection:"row",
            justifyContent:"space-evenly",
            marginRight:20
        }}>
            <TouchableOpacity
        style={{
          justifyContent: 'center',
          height: 40,
          width: 40,
          backgroundColor: COLORS.primary,
          borderRadius: 12,
          alignSelf: 'center',
          marginLeft:15
        }}
        onPress={()=>{
            // navigation.goBack()
        }}
        >
            <Image
          source={IMAGES.play}
          style={{
            height: 20,
            width: 20,
            alignSelf: 'center',
            justifyContent: 'center',
            tintColor: COLORS.background,
          }}
        /></TouchableOpacity>
        <TouchableOpacity
        style={{
          justifyContent: 'center',
          height: 40,
          width: 40,
          backgroundColor: COLORS.primary,
          borderRadius: 12,
          alignSelf: 'center',
          marginLeft:15
        }}
        onPress={()=>{
            // navigation.goBack()
        }}
        >
            <Image
          source={IMAGES.heart}
          style={{
            height: 23,
            width: 23,
            alignSelf: 'center',
            justifyContent: 'center',
            tintColor: current_sound?COLORS.red:COLORS.inactive,
          }}
        /></TouchableOpacity>
        </View>

        

    </View>
  )
}