import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, BackHandler, Dimensions, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo'
const { width, height } = Dimensions.get('screen')

export const CustomDrawer = ({ navigation }) => {
    const Data = [
        {
            title: 'PREFERENCES',
            navigateTo: 'Preference'
        },
        {
            title: 'ACCOUNT',
            navigateTo: 'MainAcount'
        },
        {
            title: 'EMERGENCY',
            navigateTo: 'Emergency'
        },
        {
            title: 'HELP CENTER',
            navigateTo: 'HelpCenter'
        },
        {
            title: 'SUBSCRIPTION',
            navigateTo: 'Subscription'
        },
        {
            title: 'ABOUT US',
            navigateTo: 'AboutUs'
        },
        {
            title: 'PRIVACY',
            navigateTo: 'PrivacyPolicy'
        },
        {
            title: 'TERMS OF USE',
            navigateTo: 'TermsCondition'
        },
        {
            title: 'CONTACT US',
            navigateTo: 'ContactUs'
        },
    ]


    return (
        <LinearGradient
            colors={['#F0C6BC', '#F8E4E0',]}
            start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
            style={{
                flex: 1,
            }}>

            <View
                style={styles.mainView}
            >

                {
                    Data.map((item, i) => {
                        return (

                            <TouchableOpacity
                                onPress={() => {
                                    item.navigateTo &&
                                        navigation.navigate(item.navigateTo);
                                    // alert('Navigate')
                                }}
                                activeOpacity={0.7}
                                key={i}
                                style={styles.dataMapView}
                            >

                                <View
                                    style={styles.borderView}
                                >
                                    <Text
                                        style={styles.textTitleStyle}
                                    >{item.title}</Text>
                                </View>
                                <View>
                                    <Entypo name='chevron-small-right' size={35} color='#FFFFFF' />
                                </View>
                            </TouchableOpacity>


                        )
                    })
                }
            </View>
            <TouchableOpacity
                onPress={() => navigation.closeDrawer()}
                style={
                    styles.lastViewStyle
                }
                activeOpacity={0.7}
            >
                <Entypo name='chevron-thin-left' size={30} color='#C6C5D0' />
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    mainView: {
        height: height * 0.67,
        // backgroundColor: 'red',
        justifyContent: 'flex-end',
    },
    dataMapView: {
        flexDirection: 'row',
        width: '70%',
        alignSelf: 'center',
        // backgroundColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 3
    },
    borderView: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#FFFFFF'
    },
    textTitleStyle: {
        fontSize: 24,
        fontFamily: 'Regulator Nova Medium',
        color: '#6B6B8D',
        paddingBottom: 5
    },
    lastViewStyle: {
        // marginTop: 50,
        height: height * 0.15,
        // backgroundColor: 'green',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})

