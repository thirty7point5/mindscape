import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { fonts } from '../../utils/fonts'
const { width, height } = Dimensions.get('screen')

const index = ({
    onChangeTab = (tabIndex) => { }
}) => {
    const [activeTab, setActiveTab] = useState('')
    const Title = [
        {
            title: activeTab == 0 ? 'MINDFULLNESS' : 'Mindfullness',
        },
        {
            title: activeTab == 1 ? 'CURIOSITY' : 'Curiosity',
        },
        {
            title: activeTab == 2 ? 'COURAGE' : 'Courage',
        },
        {
            title: activeTab == 3 ? 'GRATITUDE' : 'Gratitude',
        },
        {
            title: activeTab == 4 ? 'COMPASSION' : 'Compassion',
        },
    ]
    return (
        <>
            <LinearGradient
                colors={activeTab == 0 ? ['#B1B1C7', '#B1B1C7'] : ['#1A68A6', '#1A68A6']}>

                <View
                    style={styles.rowViewStyle}>
                    <View style={{ top: height * 0.01 }} >
                        <Image source={require('../../assets/images/women.png')} style={{
                            width: 80,
                            height: 80,


                        }} />
                    </View>
                    <View style={{
                        marginTop: 50

                    }}>
                        <Text style={{ fontSize: 16, color: activeTab == 0 ? '#706F93' : '#F8F7F4',fontFamily:fonts.regulatorLight }} >DAN’S MINDSCAPE</Text>
                    </View>


                </View>
            </LinearGradient>



            <View style={{
                // width: '100%',
                // height: 60,
                // backgroundColor: 'red',
                flexDirection: 'row'

            }}>
                {
                    Title.map((item, i) => {
                        return (
                            <>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        setActiveTab(i)
                                        onChangeTab(i)
                                    }}
                                    style={{
                                        width: activeTab == i ? '30%' : '17.5%',
                                    }}>
                                    <LinearGradient

                                        colors={i == 1 ? ['#6C84AF', '#9C96CB'] : i == 2 ? ['#5F4789', '#4DB3B0'] : i == 3 ? ['#14256B', '#0BB2A6'] : i == 4 ? ['#115262', '#6D9FAA'] : ['#7C7B9C', '#9E9DB6',]}
                                        style={{

                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: activeTab == i ? 60 : 40
                                            // marginTop: 10
                                        }}
                                    >
                                        <Text style={{ fontSize: activeTab == i ? 12 : 10, fontFamily:fonts.regulatorMedium, color: '#FFFFFF' }}>{item.title}</Text>


                                    </LinearGradient>
                                </TouchableOpacity>
                            </>
                        )
                    })
                }


            </View>
        </>
    )
}


export default index



const styles = StyleSheet.create({
    topViewStyle: {
        // height: height * 0.15,
        // backgroundColor: '#B3B3C9'
    },
    rowViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        alignSelf: 'center',

        marginTop: height * 0.04
    },
    nameTextStyle: {
        paddingBottom: 10, fontSize: 16, color: '#706F93'
    }


})