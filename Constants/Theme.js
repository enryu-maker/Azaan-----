import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const COLORS = {
  background: '#D0E3C4',
  // background: '#f7faf9',

  primary: '#67955F',
  // primary: '#D0E3C4',

  red: '#B02E0C',
  text: '#44633F',
  black: '#000000',
  inactive:"#B7ADCF",
  white:"white"
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
const type = { base: (Platform.OS === "ios" ? "Helvetica Neue" : "monospace"), 
bold: (Platform.OS === "ios" ? "HelveticaNeue-Bold" : "monospace"), 
emphasis: (Platform.OS === "ios" ? "HelveticaNeue-Italic" : "monospace") }
export const FONTS = {
    largeTitle: { fontFamily: type.bold, fontSize: SIZES.largeTitle },
    h1: { fontFamily: type.bold, fontSize: SIZES.h1, lineHeight: 36, fontWeight:'bold'},
    h2: { fontFamily: type.bold, fontSize: SIZES.h2, lineHeight: 30 , fontWeight:'bold'},
    h3: { fontFamily: type.bold, fontSize: SIZES.h3, lineHeight: 22 , fontWeight:'bold'},
    h4: { fontFamily: type.bold, fontSize: SIZES.h4, lineHeight: 20 , fontWeight:'bold'},
    h5: { fontFamily: type.bold, fontSize: SIZES.h5, lineHeight: 18 , fontWeight:'bold'},
    body1: { fontFamily: type.base, fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily:type.base, fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily:type.base, fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily:type.base, fontSize: SIZES.body4, lineHeight: 20 },
    body5: { fontFamily:type.base, fontSize: SIZES.body5, lineHeight: 18 },
};
