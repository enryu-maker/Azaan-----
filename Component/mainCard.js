import { View, Text,Animated,TouchableOpacity,Image,FlatList } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../Constants/Theme'
import { Header } from './Header'
import { IMAGES } from '../Constants/Images'
import SubCard from './SubCard'


export default function MainCard({
    name,
    urdu_name,
    time,
    onPress,
    show=true
}) {
  return (
    <Animated.View >
      <View style={{
          backgroundColor:COLORS.primary,
          height:520,
          width:SIZES.width-30,
          alignSelf:"center",
          borderRadius:SIZES.padding,
          marginTop:15,
          justifyContent:"flex-end"
      }}>
        <Header title={name} containerStyle={{
        marginTop:0
        }}
        titleStyle={{
          color:COLORS.background
        }}
        />
        <Header title={urdu_name} containerStyle={{
        marginTop:-20
        }}
        titleStyle={{
          color:COLORS.background
        }}
        />
        <View style={{
          backgroundColor:COLORS.background,
          height:410,
          width:SIZES.width-50,
          alignSelf:"center",
          borderRadius:SIZES.padding,
          marginBottom:10
        }}>
        <Header title={"Time وقات"} containerStyle={{
        marginTop:0
        }}
         titleStyle={{
          ...FONTS.h3,
          marginLeft:show?60:0,
          alignSelf:"center"
        }}
        rightComponent={
            show?
          <>
          <TouchableOpacity style={{
            alignSelf:"center",
            backgroundColor:COLORS.background,
            height:30,
            width:30,
            borderRadius:12,
            justifyContent:"center",
            marginRight:20,
            borderColor:COLORS.primary,
            borderWidth:1
        }}
        onPress={onPress}
        >
        <Image source={IMAGES.delete} style={{
            width:20,
            height:20,
            alignSelf:"center",
            tintColor:COLORS.red
        }}/>
        </TouchableOpacity>
        </>
        :null
        }
        />
        <FlatList
        data={time}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index})=>{
          return(
            <SubCard name={item.name} urdu_name={item.urdu_name} time={item.time}/>
          )
        }}
        />
        </View>
      </View>
    </Animated.View>
  )
}