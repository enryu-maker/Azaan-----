import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../Constants/Theme'
export default function SurahCard({
    name,
    urdu_name,
    distance,
    onPress,
}) {
  return (
    <TouchableOpacity 
    onPress={onPress}

    style={{
        height:100,
        width:"88%",
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.background,
        padding:10,
        paddingHorizontal:25,
        marginTop:10,
        alignSelf:"center",
    }}>
        <View style={{
            flexDirection:"column",
            justifyContent:"space-between",
            alignItems:"center",
        }}>
        <Text style={{
            ...FONTS.h1,
            color:COLORS.primary
        }}>{name}</Text>
        <Text style={{
            ...FONTS.h2,
            color:COLORS.primary
        }}>{urdu_name}</Text>
        <Text style={{
            ...FONTS.h3,
            color:COLORS.primary,
            letterSpacing:1
        }}>Ayat: {distance}</Text>
        </View>
        
    </TouchableOpacity>
  )
}