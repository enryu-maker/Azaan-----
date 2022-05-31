import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {IMAGES} from '../Constants/Images';

import {COLORS, FONTS, SIZES} from '../Constants/Theme';

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  value = '',
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  maxLength,
  keytype = '',
  onPressIn,
  img,
  onPress,
  labelStyle,
  multiline=false
}) => {
  return (
    <View style={{...containerStyle}}>
      <View
        style={{
          width: SIZES.width - 50,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{color: COLORS.text, ...FONTS.body4, alignSelf: 'flex-start',margin:5,...labelStyle}}>
          {label}
        </Text>
        <Text style={{color: COLORS.red, ...FONTS.body4,alignSelf:"flex-end"}}>{errorMsg}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: 50,
          paddingHorizontal: SIZES.padding,
          // marginTop: 10,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.background,
          width: SIZES.width - 50,
          alignSelf: 'center',
          justifyContent: 'space-evenly',
          ...inputContainerStyle,
        }}>
        {prependComponent}
        <TextInput
          style={{
            flex: 1,
            ...inputStyle,
            marginLeft: 15,
            ...FONTS.h3,
            color: COLORS.primary,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={COLORS.primary}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChangeText={text => onChange(text)}
          returnKeyType="default"
          onPressIn={onPressIn}
          multiline={multiline}
        />
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            backgroundColor: COLORS.primary,
            height: 35,
            width: 35,
            borderRadius: SIZES.base + 5,
            justifyContent: 'center',
          }}
          onPress={onPress}>
          <Image
            source={img}
            style={{
              width: 22,
              height: 22,
              alignSelf: 'center',
              tintColor: COLORS.background,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormInput;
