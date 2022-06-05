import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import {COLORS, SIZES, FONTS} from '../Constants/Theme';
import {IMAGES} from '../Constants/Images';
import ImagePicker from 'react-native-image-crop-picker';
import React from 'react';
export default function PickerType({
  show,
  setshow,
  setPic,
  setPicdata,
  setprofile_pic,
  setshowc,
}) {
  const [Loading, setLoading] = React.useState(false);
  function openLibrary() {
    setLoading(true);
    setTimeout(() => {
      ImagePicker.openPicker({
        width: SIZES.width - 50,
        height: 150,
        cropping: true,
        compressImageQuality: true,
      })
        .then(image => {
          setLoading(false);
          const uriParts = image.path.split('.');
          const fileType = uriParts[uriParts.length - 1];
          setPic(image.path);
          setprofile_pic({
            type: `image/${fileType}`,
            uri: image.path,
            name: `photo.${fileType}`,
          });
          setshowc(true);
        })
        .catch(() => {
          setLoading(false);
        });
    }, 2000);
  }
  function openCamera() {
    setLoading(true);
    setTimeout(() => {
      ImagePicker.openCamera({
        width: SIZES.width - 50,
        height: 150,
        cropping: true,
        compressImageQuality: true,
      })
        .then(image => {
          setLoading(false);
          const uriParts = image.path.split('.');
          const fileType = uriParts[uriParts.length - 1];
          setPic(image.path);
          setprofile_pic({
            type: `image/${fileType}`,
            uri: image.path,
            name: `photo.${fileType}`,
          });
          setshowc(true);
        })
        .catch(() => {
          setLoading(false);
        });
    }, 2000);
  }
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={show}
      onRequestClose={() => {
        setshow(false);
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#00000040',
          justifyContent: 'flex-end',
          alignSelf: 'center',
          alignItems: 'center',
          width: SIZES.width,
        }}
        onStartShouldSetResponder={() => setshow(false)}>
          <ActivityIndicator style={{
            justifyContent:"center",
            alignSelf:"center",
            marginBottom:SIZES.height*0.3

          }}
          animating={Loading}
          size={"large"}
          color={COLORS.white}
          />
        <View
          style={{
            height: 120,
            width: SIZES.width - 50,
            backgroundColor: COLORS.white,
            alignSelf: 'center',
            borderRadius: SIZES.padding,
            marginBottom: 30,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
            <>
              <TouchableOpacity
                onPress={() => {
                  setshow(false);
                  openCamera();
                }}>
                <Image
                  source={IMAGES.cam}
                  style={{
                    height: 45,
                    width: 45,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    tintColor: COLORS.primary,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.h4,
                  }}>
                  Camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setshow(false);
                  openLibrary();
                }}>
                <Image
                  source={IMAGES.picture}
                  style={{
                    height: 45,
                    width: 45,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    tintColor: COLORS.primary,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.h4,
                  }}>
                  Library
                </Text>
              </TouchableOpacity>
            </>
        </View>
      </View>
    </Modal>
  );
}
