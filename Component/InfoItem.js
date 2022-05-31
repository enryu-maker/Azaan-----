import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../Constants/Theme'
import VerticalDivider from './VerticalDivider'

export default function InfoItem({
    title,
    data
}) {
  return (
      <>
    <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:12
    }}>
        <Text style={{
            ...FONTS.h3,
            marginLeft:20,
            color:COLORS.text
        }}>{title}</Text>
        <Text style={{
            ...FONTS.h3,
            marginRight:20,
            color:COLORS.text
        }}>{data}</Text>
    </View>
    <VerticalDivider LineDesign={{
        backgroundColor:COLORS.primary,
        height:1,
        alignSelf:"center",
        marginRight:0
    }}/>
    </>
  )
}