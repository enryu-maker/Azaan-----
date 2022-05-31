import { View, Text,Image } from 'react-native'
import React from 'react'
import { COLORS } from './Theme'

export default function Icon(
    img,
    size,
    color=COLORS.black
) {
  return (
    <Image 
    source={img} 
    style={{
        flex:1,
        height:24,
        width:24,
    tintColor:color
    }}
    // resizeMode="contain"
    />
  )
}