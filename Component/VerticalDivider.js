import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../Constants/Theme'

export default function VerticalDivider({
  LineDesign
}) {
  return (
    <View
    style={{
        width:SIZES.width-120,
        alignSelf:"flex-end",
        backgroundColor:COLORS.primary,
        height:0.8,
        marginRight:10,
        ...LineDesign
    }}
    />
      
    
  )
}