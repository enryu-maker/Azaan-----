import {View, Text, TouchableOpacity, Image, ScrollView,StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../Constants/Theme';
import {Header} from '../../Component/Header';
import {IMAGES} from '../../Constants/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InfoItem from '../../Component/InfoItem';
import { Marker, } from "react-native-maps";
import MapView from 'react-native-maps';
import MainCard from '../../Component/mainCard';
export default function InfoScreen({navigation, route}) {
    const tokyoRegion = {
        latitude: 35.6762,
        longitude: 139.6503,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    let {data} = route.params;
    setData(data);
  }, []);
  function renderHeader() {
    return (
      <Header
        title={'Info معلومات'}
        titleStyle={{
          marginRight: 55,
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
              marginLeft: 15,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
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
    );
  }
  function renderData() {
    return (
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.itemWrapper]}>
        <View
          style={{
            margin: 10,
            height: 180,
            backgroundColor: COLORS.background,
            width: SIZES.width - 50,
            alignSelf: 'center',
            borderRadius: SIZES.padding,
            justifyContent: 'center',
          }}>
          <Image
            source={IMAGES.m1}
            resizeMode={'cover'}
            style={{
              width: SIZES.width - 50,
              height: 180,
              borderRadius: SIZES.padding,
              alignSelf: 'center',
            }}
          />
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: COLORS.background,
            width: SIZES.width - 50,
            alignSelf: 'center',
            borderRadius: SIZES.padding,
            justifyContent: 'center',
            padding: 15,
          }}>
          <InfoItem title={'Name'} data={'نام'} />
          <InfoItem title={data.name} />
          <InfoItem data={data.urdu_name} />
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: COLORS.background,
            width: SIZES.width - 50,
            alignSelf: 'center',
            borderRadius: SIZES.padding,
            justifyContent: 'center',
            padding: 15,
          }}>
          <InfoItem title={'Type'} data={'طرز'} />
          <InfoItem title={data.type} data={data.type_urdu} />
        </View>        
      </ScrollView>
    );
  }
  function renderTime(){
    return(
      <View style={[styles.itemWrapper]}>
      <MainCard name={data.name} urdu_name={data.urdu_name} time={data.time_data} show={false}/>
      </View>
    )
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      {renderHeader()}

      <KeyboardAwareScrollView
      style={[styles.itemWrapper]}
      horizontal={true}
      pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          marginTop: SIZES.radius,
        }}>
          {/* <View style={[styles.itemWrapper]}> */}
        {renderData()}
        {renderTime()}
        {/* </View> */}
      </KeyboardAwareScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  itemWrapper: {
      width:SIZES.width,
      heigth:SIZES.height,
  }
})
