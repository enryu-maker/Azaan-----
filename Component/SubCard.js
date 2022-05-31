import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Constants/Theme'

export default function SubCard({
    name,
    urdu_name,
    time,
}) {
  return (
    <View style={{
        height:36,
        width:SIZES.width-70,
        backgroundColor:COLORS.primary,
        borderRadius:12,
        alignSelf:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        marginTop:SIZES.base
    }}>
        <Text style={{
            alignSelf:"center",
            ...FONTS.h3,
            color:COLORS.background,
            marginLeft:25
        }}>
            {name}
        </Text>
        <Text style={{
            alignSelf:"center",
            ...FONTS.h3,
            color:COLORS.red,
            position:"absolute",
            marginLeft:(SIZES.width-95)/2
        }}>
            {time}
        </Text>
        <Text style={{
            alignSelf:"center",
            ...FONTS.h3,
            color:COLORS.background,
            marginRight:25


        }}>
            {urdu_name}
        </Text>
      
    </View>
  )
}