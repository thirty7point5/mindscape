import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import NewmorphButton from '../../components/NewmorphButton/index'
import Slider from 'react-native-slider'

export const MindfullnessSong = () => {
    const [state, setState] = useState({
        value: 0.2
    })
    const thumbImage = require('../../assets/images/play.png')
    return (
        <LinearGradient
            colors={['#6a6a8a', '#251839']}

            style={{
                flex: 1
            }}>
            <StatusBar barStyle="dark-content" backgroundColor={'#6a6a8a'} />

            <View style={{
                width: '76%',
                alignSelf: 'center',
                height: '88%',
                justifyContent: 'flex-end',
                // backgroundColor: 'red'
            }}>


                <Slider
                    thumbImage={thumbImage}
                    minimumTrackTintColor={'#ffffff60'}
                    maximumTrackTintColor={'#ffffff60'}
                    thumbTintColor={'transparent'}
                    trackStyle={{ height: 2 }}
                    thumbTouchSize={{ width: 30, height: 30 }}
                    value={state.value}
                    onValueChange={e => setState({ e })}
                />

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10
                }}>
                    <Text style={{
                        textAlign: 'center',
                        // paddingVertical: 20
                        paddingBottom: 10,
                        color: '#FFFF',
                        fontSize: 24,
                        fontFamily: 'Regulator Nova Light'
                    }}>MINDFULNESS</Text>
                    <Text style={{
                        textAlign: 'center',
                        paddingBottom: 10,
                        color: '#FFFF',
                        fontSize: 14,

                        fontFamily: 'Regulator Nova Medium'

                    }}>INTRODUCTION</Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            width: 60,
                            // height: 20,
                            padding: 1,
                            borderRadius: 15,
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderColor: '#707070',
                            alignItems: 'center',
                            justifyContent: 'center'

                        }}>
                        <Text style={{
                            color: '#FFFF',
                            fontSize: 16,
                            fontFamily: 'Regulator Nova Light'
                        }}>
                            SKIP
                        </Text>

                    </TouchableOpacity>
                </View>


            </View>

        </LinearGradient>
    )
}


