import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../Constants/Theme';
import {IMAGES} from '../Constants/Images';
export default function SettingButton({
    img,
    name,
    urdu_name,
    onPress,
    imgContainer,
    imgStyle,
    container
}) {
  return (
    <TouchableOpacity
      style={{
        height: 40,
        // backgroundColor: COLORS.white,
        width: SIZES.width - 50,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin:4,
        ...container
      }}
      onPress={onPress}
      >
      <View
        style={{
          justifyContent: 'center',
          height: 35,
          width: 35,
          backgroundColor: COLORS.primary,
          borderRadius: 12,
          alignSelf: 'center',
          marginLeft:15,
          ...imgContainer
        }}>
        <Image
          source={img}
          style={{
            height: 21,
            width: 21,
            alignSelf: 'center',
            justifyContent: 'center',
            tintColor: COLORS.background,
            ...imgStyle
          }}
        />
      </View>
      <View style={{
          marginRight:20,
          flexDirection:'row',
          justifyContent:"space-between",
          width:SIZES.width*0.60,
          alignItems:"center",
      }}>
          <Text style={{
              ...FONTS.h3,
              color:COLORS.primary
          }}>
              {name}
          </Text>
          <Text style={{
              ...FONTS.h2,
              color:COLORS.primary
          }}>
              {urdu_name}
          </Text>
      </View>
    </TouchableOpacity>
  );
}
