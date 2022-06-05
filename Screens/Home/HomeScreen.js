import {View, Text, FlatList,StyleSheet,Animated,Alert} from 'react-native';
import React from 'react';
import MainCard from '../../Component/mainCard';
import {COLORS,SIZES} from '../../Constants/Theme';
import {Header} from '../../Component/Header';
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavourite, Init } from '../../Store/action';
export default function HomeScreen() {  

  const dispatch = useDispatch()
  const favMasjid = useSelector(state => state.Reducers.favourite);
  React.useEffect(()=>{
    // setInterval(()=>{
      dispatch(Init())
    // },2000)
    
  },[favMasjid]) 
  const xOffset = new Animated.Value(0);
  let Parsed_list=[]
  try{
    Parsed_list=JSON.parse(favMasjid)
    
  }
  catch{
    Parsed_list=favMasjid
  }

  // if (favMasjid.length>0 && favMasjid!=[]){
  //   try{
  //     Parsed_list=JSON.parse(favMasjid)
  //   }
  //   catch{
  //     Parsed_list=favMasjid
  //   }
  // }
  // else{
  //   Parsed_list=[]
  // }
  const transitionAnimation = index => {
    return {
      transform: [
        { perspective: 800 },
        {
          scale: xOffset.interpolate({
            inputRange: [
              (index - 1) * SIZES.width,
              index * SIZES.width,
              (index + 1) * SIZES.width
            ],
            outputRange: [0.25, 1, 0.25]
          })
        },
        {
          rotateX: xOffset.interpolate({
            inputRange: [
              (index - 1) * SIZES.width,
              index * SIZES.width,
              (index + 1) * SIZES.width
            ],
            outputRange: ["45deg", "0deg", "45deg"]
          })
        },
        {
          rotateY: xOffset.interpolate({
            inputRange: [
              (index - 1) * SIZES.width,
              index * SIZES.width,
              (index + 1) * SIZES.width
            ],
            outputRange: ["-45deg", "0deg", "45deg"]
          })
        }
      ]
    };
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Header title={'Masjid مسجد'} />
      <FlatList
      contentContainerStyle={{
        marginTop:SIZES.height*0.05
      }}
      scrollEventThrottle={16}
      // onScroll={Animated.event(
      //   [{ nativeEvent: { contentOffset: { x: xOffset } } }],
      //   { useNativeDriver: true }
      // )}
      pagingEnabled={true}
      data={Parsed_list}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      horizontal
        renderItem={({item, index}) => {
          return( 
        <View key={index} style={[styles.itemWrapper]}>
          <MainCard key={index} name={item.name} urdu_name={item.urdu_name} favourite={item.is_favourite} time={item.time_data} 
          onPress={()=>{
            Alert.alert(
              "Remove Favourite Masjid",
              "پسندیدہ مسجد ہٹانا",
              [
                { text: "Remove ہٹانا", onPress: () => {
                  dispatch(deleteFavourite(Parsed_list,index))
                  // favMasjid = useSelector(state => state.Reducers.favourite);
                } 
              },
              {
                text: "Cancel رد",
                onPress: () => {},
                style: "cancel"
              }
              ]
            );
          }} />
           </View>
          )
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    itemWrapper: {
        width:SIZES.width,
        heigth:SIZES.height
    }
})
