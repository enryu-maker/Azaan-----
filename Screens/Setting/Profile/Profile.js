import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../../Constants/Theme'
import { Header } from '../../../Component/Header'
import { IMAGES } from '../../../Constants/Images'

export default function Profile({
    navigation
}) {
    return (
        <View style={{
          flex:1
        }}>
         <Header title={"Profile پروفائل"}
          titleStyle={{
              marginRight:52
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
        </View>
      )
    }