import {View, Text, FlatList,Image,Animated,Alert,ActivityIndicator} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../Constants/Theme';
import {Header} from '../../Component/Header';
import VerticalCard from '../../Component/VerticalCard';
import {data} from '../../Constants/dummyData';
import FormInput from '../../Component/InputForm';
import {IMAGES} from '../../Constants/Images';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavourite } from '../../Store/action';
import Geolocation from '@react-native-community/geolocation';
export default function Search({
  navigation
}) {
  const[Loading,setLoading] = React.useState(false)
  const getLocation = () => {
    setLoading(true)
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        console.log(position);
        setLoading(false)
      },
      error => {
        console.log(error.code, error.message);
        setLoading(false)
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  React.useEffect(()=>{
    getLocation()
  },[])
  const [search,setSearch] = React.useState('')
  const dispatch=useDispatch()
  let Parsed_list=[]
  const current_List=useSelector(state => state.Reducers.favourite);
    try{
      Parsed_list=JSON.parse(current_List)
    }
    catch{
      Parsed_list=current_List
    }
  
 
  return (
    <View
      style={{
        flex: 1,        
      }}>
      <Header title={'Search تفص'} />
      <FormInput
        prependComponent={<View style={{
          justifyContent:"center",
          height:35,
          width:35,
          backgroundColor:COLORS.primary,
          borderRadius:12,
          alignSelf:"center",
          
        }}>
          <Image source={IMAGES.search} style={{
            height:22,
            width:22,
            alignSelf:"center",
            justifyContent:"center",
            tintColor:COLORS.background
          }}/> 
        </View>}
        placeholder={'search... تفص'}
        img={IMAGES.filter}
        value={search}
        onChange={(text)=>{
          setSearch(text)
        }}
        containerStyle={{
          marginBottom:10
        }}
      />
      {
        Loading?
        <View style={{
          flex:1,
          justifyContent:"center"
        }}>
        <ActivityIndicator size={"large"} color={COLORS.primary} animating={Loading}/>
        <Text style={{
          ...FONTS.h3,
          alignSelf:"center"
        }}>
          Loading...
        </Text>
        </View>
      :
      <Animated.FlatList
        style={{
          marginBottom: SIZES.height < 700 ? 20 : 10,
        }}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return( 
            <Animated.View 
          >
          <VerticalCard key={index} name={item.name} urdu_name={item.urdu_name} is_favourite={item.is_favourite} distance={item.distance} type={item.type}
          onPress={()=>{
            Alert.alert(
              "Add Favourite Masjid",
              "پسندیدہ مسجد ہٹانا",
              [
                { text: "Add جمع کرنا", onPress: () => {
                  dispatch(updateFavourite(Parsed_list,item))
                } 
              },
              {
                text: "Cancel رد",
                onPress: () => {},
                style: "cancel"
              }
              ]
            );
          }}
          onPress2={()=>{
            navigation.navigate('Info',{
              data:item
            })
          }}
          />
          </Animated.View>
        
          )
        }}
      />
}
    </View>
  );
}
