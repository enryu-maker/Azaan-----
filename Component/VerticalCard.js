import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Constants/Theme'
import { Header } from './Header'
import { IMAGES } from '../Constants/Images'

export default function VerticalCard({
  name,
  urdu_name,
  is_favourite=false,
  type="NA",
  distance=0,
  onPress,
  onPress2,
}) {
  return (
    <TouchableOpacity style={{
        backgroundColor:COLORS.background,
        height:112,
        width:SIZES.width-50,
        alignSelf:"center",
        borderRadius:SIZES.radius,
        marginTop:15,
        
    }}
    onPress={onPress2}
    >
      <Header title={name} titleStyle={{
        ...FONTS.h3,
        alignSelf:"flex-start",
        marginLeft:12,
        color:COLORS.text
      }}
      containerStyle={{
        marginTop:-5,
      }}
      rightComponent={ <TouchableOpacity style={{
        alignSelf:"center",
        backgroundColor:COLORS.primary,
        height:30,
        width:30,
        borderRadius:12,
        justifyContent:"center",
        marginRight:20
    }}
    onPress={onPress}
    >
    <Image source={IMAGES.plus} style={{
        width:20,
        height:20,
        alignSelf:"center",
        tintColor:COLORS.background
    }}/>
    </TouchableOpacity>}
      />
      <Header title={urdu_name} titleStyle={{
        ...FONTS.h3,
        alignSelf:"flex-start",
        marginLeft:35,
        color:COLORS.text
      }}
      containerStyle={{
        marginTop:-25,
      }}/>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center"
      }}>
        <View style={{
          backgroundColor:COLORS.primary,
          height:30,
          paddingHorizontal:10,
          borderRadius:12,
          justifyContent:"center",
          marginLeft:20
        }}>
          <Text style={{
            alignSelf:"center",
            ...FONTS.h3,
            color:COLORS.background
          }}>
          {type}
          </Text>
        </View>
        <View style={{
          backgroundColor:COLORS.primary,
          height:30,
          paddingHorizontal:10,
          borderRadius:12,
          justifyContent:"center",
          marginRight:20
        }}>
          <Text style={{
            alignSelf:"center",
            ...FONTS.h3,
            color:COLORS.background
          }}>
          {distance} KM
          </Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}