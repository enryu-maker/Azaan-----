import {View, Text,ImageBackground,Image,StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../Constants/Theme';
import {Header} from '../../Component/Header';
import CompassHeading from 'react-native-compass-heading';
import Geolocation from '@react-native-community/geolocation';
export default function CompassScreen() {
  const[compassHeading,setCompassHeading] = React.useState(0);
  const[Loading,setLoading]  = React.useState(false)
  const[qiblaD,setQiblaD] = React.useState(0);
  const calculate = (latitude, longitude) => {
    const PI = Math.PI;
    let latk = (21.4225 * PI) / 180.0;
    let longk = (39.8264 * PI) / 180.0;
    let phi = (latitude * PI) / 180.0;
    let lambda = (longitude * PI) / 180.0;
    let qiblad =
      (180.0 / PI) *
      Math.atan2(
        Math.sin(longk - lambda),
        Math.cos(phi) * Math.tan(latk) -
          Math.sin(phi) * Math.cos(longk - lambda),
      );
      console.log(qiblad)
    setQiblaD(qiblad);
    setLoading(false)
  };
  const getLocation = () => {
    setLoading(true)
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        calculate(latitude, longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  React.useEffect(()=>{
    getLocation();
    const degree_update_rate = 3;
    CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
      setCompassHeading(heading);
    });
    return () => {
      CompassHeading.stop();
    };
  },[])
  // console.log(Loading)
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: COLORS.background,
      }}>
      <Header title={'Qibla قبلہ'} />

      <Image
          source={require('../../assets/qiblaloc.png')}
          style={[
            styles.image,
            {transform: [{rotate: `${qiblaD}deg`}]},
          ]}/>



    </View>
  );
}
const styles = StyleSheet.create({
  image: {width: '90%', resizeMode: 'contain', alignSelf: 'center',tintColor:COLORS.primary},
  container: {backgroundColor: '#fff', flex: 1},
});
