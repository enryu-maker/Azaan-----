import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { Header } from '../../Component/Header'
import { COLORS, FONTS } from '../../Constants/Theme'
import { IMAGES } from '../../Constants/Images'
import axios from 'axios'
import SoundPlayer from 'react-native-sound-player'
export default function SurahScreen({
    navigation,
    route
}) {
    const [surah, setSurah] = React.useState([])
    const [surahDetail, setSurahDetail] = React.useState([])
    React.useEffect(() => {
        setSurah(route.params.data)
        axios.get(`https://api.alquran.cloud/v1/surah/${route.params.data.number}/ar.alafasy`)
            .then((res) => {
                console.log(res.data.data)
                setSurahDetail(res.data.data.ayahs)
            }
            )
            .catch((err) => {
                console.log(err)
            }
            )
    }, [])
    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Header
                titleStyle={{
                    marginRight: 52
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
                            marginLeft: 15
                        }}
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
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
                title={surah.name + " " + surah.englishName}
            />
            <Text
                style={{
                    ...FONTS.body3,
                    color: COLORS.text,
                    alignSelf: "center",
                }}
            >
                Press the button to listen to the surah
            </Text>
            <Text
                style={{
                    ...FONTS.body2,
                    color: COLORS.text,
                    alignSelf: "center",
                }}
            >
                سورت سننے کے لئے بٹن دبائیں
            </Text>

            <FlatList
                data={surahDetail}
                keyExtractor={(item) => item.number.toString()}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                marginVertical: 10,
                                borderRadius: 10,
                                flexDirection: 'row',
                                width: "88%",
                                justifyContent: 'space-between',
                                backgroundColor: COLORS.background,
                                alignSelf: 'center',
                                padding: 10
                            }}
                            onPress={() => {
                                SoundPlayer.playUrl(item.audio)
                            }
                            }
                        >
                            <Text
                                style={{
                                    ...FONTS.h1,
                                    color: COLORS.text,
                                    width: "80%",
                                    letterSpacing: 1,
                                }}
                            >
                                {item.text}
                            </Text>
                            <TouchableOpacity
                                style={{
                                    justifyContent: 'center',
                                    height: 40,
                                    width: 40,
                                    backgroundColor: COLORS.primary,
                                    borderRadius: 12,
                                    alignSelf: 'center',
                                    marginLeft: 15
                                }}
                                onPress={() => {
                                    SoundPlayer.playUrl(item.audio)
                                }
                                }
                            >
                                <Image
                                    source={IMAGES.play}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        tintColor: COLORS.background,
                                    }}
                                /></TouchableOpacity>
                        </View>

                    )
                }
                }
            />

        </View>
    )
}