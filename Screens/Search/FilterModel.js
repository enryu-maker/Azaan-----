import React from 'react';
import {
    View,
    Text,
    Animated,
    ScrollView,
    TouchableWithoutFeedback,
    Modal,
    Platform,
    KeyboardAvoidingView
} from 'react-native';

import TextButton from '../../Component/TextButton';
import { IMAGES } from '../../Constants/Images';
import { COLORS, SIZES, FONTS  } from '../../Constants/Theme';
import { Type } from '../../Constants/dummyData';
// import VerticalDivider from '../../Component/VerticalDivider';
import TwoPointSlider from '../../Component/TwoPointSlider';
const Section = ({ containerStyle, title, children }) => {
    return (
        <View
            style={{
                marginTop: SIZES.padding,
                ...containerStyle
            }}
        >
            <Text style={{ ...FONTS.h3 }}>{title}</Text>

            {children}
        </View>
    )
}

const FilterModal = ({ isVisible, onClose }) => {

    const modalAnimatedValue = React.useRef(new Animated.Value(0)).current

    const [showFilterModal, setShowFilterModal] = React.useState(isVisible)

    const [deliveryTime, setDeliveryTime] = React.useState("")
    const [ratings, setRatings] = React.useState("")
    const [tags, setTags] = React.useState("")

    React.useEffect(() => {
        if (showFilterModal) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start(() => onClose());
        }
        // console.log(isVisible)
    }, [showFilterModal])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height > 700 ? SIZES.height - 680 : SIZES.height - 580]
    })
    function renderDistance() {
        return (
            <Section
                title="Masjid Distance"
            >
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <TwoPointSlider
                        values={[0, 5]}
                        min={1}
                        max={20}
                        postfix="km"
                        onValuesChange={(values) => console.log(values[1])}
                    />
                </View>
            </Section>
        )
    }
    function renderTags() {
        return (
            <Section
                title="Masjid Type "
            >
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >
                    {Type.map((item, index) => {
                        return (
                            <TextButton
                                key={`Tags-${index}`}
                                icon={IMAGES.mosque}
                                iconStyle={{
                                    tintColor:item.id == tags ? COLORS.background : COLORS.white
                                }}
                                label={item.name}
                                labelStyle={{
                                    color: item.id == tags ? COLORS.background : COLORS.white,
                                    ...FONTS.body3
                                }}
                                buttonContainerStyle={{
                                    height: 50,
                                    margin: 5,
                                    paddingHorizontal: SIZES.padding,
                                    alignItems: 'center',
                                    borderRadius: SIZES.base,
                                    backgroundColor: item.id == tags ? COLORS.primary : COLORS.background
                                }}
                                onPress={() => {
                                    setTags(item.id)
                                    console.log(item.label)}}
                            />
                        )
                    })}
                </View>
            </Section>
        )
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.background
                }}
            >
                {/* Transparent Background */}
                <TouchableWithoutFeedback
                    onPress={() => setShowFilterModal(false)}
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    />
                </TouchableWithoutFeedback>

                <Animated.View
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: modalY,
                        width: "100%",
                        height: "100%",
                        padding: SIZES.padding,
                        borderTopRightRadius: SIZES.padding,
                        borderTopLeftRadius: SIZES.padding,
                        backgroundColor: COLORS.white,
                        // paddingBottom:30
                    }}
                >
                    <View style={{flex:1}}>
                    <ScrollView
        // style={{flex:1}}
        contentContainerStyle={{paddingBottom:250}}
        showsVerticalScrollIndicator={false}
        
        >
                        <KeyboardAvoidingView behavior="position">
                    {renderDistance()}
                    {renderTags()}
                        </KeyboardAvoidingView>
                    
                    </ScrollView>
                    </View>
                    
                    {/* Apply Button */}
                    <View
                        style={{
                            position: 'absolute',
                            bottom: Platform.OS === 'ios' ? (SIZES.height > 700 ? 190 : 80) : 80,
                            left: 0,
                            right: 0,
                            height: 110,
                            paddingHorizontal: SIZES.padding,
                            paddingVertical: SIZES.radius,
                            backgroundColor: COLORS.white
                        }}
                    >
                        <TextButton
                            label="Apply Filters"
                            icon={IMAGES.filter}
                            buttonContainerStyle={{
                                height: 50,
                                borderRadius: SIZES.base,
                                backgroundColor: COLORS.primary
                            }}
                            onPress={() => setShowFilterModal(false)}
                        />
                    </View>
                </Animated.View>
            </View>
        </Modal>
    )
}

export default FilterModal;