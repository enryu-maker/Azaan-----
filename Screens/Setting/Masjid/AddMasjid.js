import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../../Constants/Theme';
import {Header} from '../../../Component/Header';
import {IMAGES} from '../../../Constants/Images';
import FormInput from '../../../Component/InputForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextButton from '../../../Component/TextButton';
import PickerType from '../../../Component/Picker';
import {Type} from '../../../Constants/dummyData';
import {Picker, onOpen} from 'react-native-actions-sheet-picker';

export default function AddMasjid({navigation}) {
  const [name, setName] = React.useState('');
  const [addr, setAddr] = React.useState('');
  const [num, setNumber] = React.useState(0);
  const [showc, setshowc] = React.useState(false);
  const [showu, setshowu] = React.useState(false);
  const [pic, setPic] = React.useState('');
  const [profile_pic, setprofile_pic] = React.useState([]);
  const [picdata, setPicdata] = React.useState([]);
  const [selected, setSelected] = React.useState(undefined);
  const [query, setQuery] = React.useState('');

  function renderHeader() {
    return (
      <Header
        title={'Add جمع کرنا'}
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
  function renderForm() {
    return (
      <>
        <PickerType
          show={showc}
          setshow={setshowc}
          setPic={setPic}
          setPicdata={setPicdata}
          setprofile_pic={setprofile_pic}
          setshowc={setshowu}
        />
        <TouchableOpacity
          style={{
            margin: 10,
            height: 180,
            backgroundColor: COLORS.background,
            width: SIZES.width - 50,
            alignSelf: 'center',
            borderRadius: SIZES.padding,
            justifyContent: 'center',
          }}
          onPress={() => {
            setshowc(true);
          }}>
          <Image
            source={pic==''?IMAGES.gallery : { uri : pic } }
            resizeMode={'cover'}
            style={pic==''?{
              height: 80,
              width: 80,
              alignSelf: 'center',
              tintColor: COLORS.text,
            }:{
              width: SIZES.width - 50,
              height: 180,
              borderRadius: SIZES.padding,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
        <FormInput
          label={'Masjid Name'}
          placeholder={'Name مسجد کا نام'}
          value={name}
          onChange={text => {
            setName(text);
          }}
          img={IMAGES.pen}
        />
        <View>
          <Text
            style={{
              ...FONTS.body4,
              width: SIZES.width - 50,
              color: COLORS.text,
              alignSelf: 'center',
              marginTop: 5,
              margin: 5,
            }}>
            Type
          </Text>
          <TouchableOpacity
            style={{
              width: SIZES.width - 50,
              alignSelf: 'center',
              height: 50,
              backgroundColor: COLORS.background,
              borderRadius: SIZES.radius,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            onPress={() => {
              onOpen('country');
            }}>
            <Text
              style={{
                ...FONTS.h4,
                marginLeft: 45,
                color: COLORS.primary,
                alignSelf: 'center',
              }}>
              {selected != undefined ? selected.label : ''}
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                backgroundColor: COLORS.primary,
                height: 35,
                width: 35,
                borderRadius: SIZES.base + 5,
                justifyContent: 'center',
                marginRight: 25,
              }}>
              <Image
                source={IMAGES.down}
                style={{
                  width: 22,
                  height: 22,
                  alignSelf: 'center',
                  tintColor: COLORS.background,
                }}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <Picker
          id="country"
          data={Type}
          inputValue={query}
          label="Select Type"
          setSelected={setSelected}
        />
        <FormInput
          label={'Masjid Address'}
          placeholder={'Address مسجد خطاب'}
          value={addr}
          multiline={true}
          onChange={text => {
            setAddr(text);
          }}
          inputStyle={{
            textAlignVertical: 'top',
          }}
          img={IMAGES.location}
          inputContainerStyle={{
            height: 80,
          }}
        />
        <FormInput
          label={'Masjid Phone Number'}
          placeholder={'Phone فون نمبر'}
          value={name}
          onChange={text => {
            setNumber(text);
          }}
          img={IMAGES.phone}
          keyboardType={'numeric'}
        />
      </>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}>
      {renderHeader()}
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 40,
        }}>
        {renderForm()}
      </KeyboardAwareScrollView>
      <TextButton
        label={'Add جمع کرنا'}
        icon={IMAGES.mosque}
        buttonContainerStyle={{
          marginBottom: 30,
          width: SIZES.width - 50,
        }}
      />
    </View>
  );
}
