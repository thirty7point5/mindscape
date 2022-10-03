import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import Icon from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'

export const Emergency2 = () => {
    return (
        <LinearGradient
            colors={['#E39684', '#CEBFBB',]}
            // start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
            style={{
                flex: 1
            }}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />

            <ScrollView
                showsVerticalScrollIndicator={false}

                contentContainerStyle={{
                    flexGrow: 1
                }}
            >

                <View style={styles.centerTextMainViewStyle}>
                    <Text style={styles.dangerTextStyle}>
                        IF YOU ARE {'\n'}IN DANGER
                    </Text>
                </View>

                <View style={styles.centerTextViewStyle}>
                    <Text style={styles.centerTextStyle}>
                        Tap be to call your local {'\n'}help immediately
                    </Text>
                </View>

                <View style={styles.buttonMainViewStyle}>
                    <TouchableOpacity activeOpacity={0.7}>


                        <LinearGradient

                            colors={['#E39684', '#CEBFBB',]}
                            style={styles.buttonViewStyle}

                        >
                            <Text style={styles.buttonTextStyle}>United Arab Emirates</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>


                <View style={styles.lastViewStytle}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.rowViewStyle}>
                        <Entypo name='chevron-thin-right' size={30} color='#FFFFFF' />
                        <Text style={styles.lestgoTextStyle}>or, continue</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>



        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    centerTextMainViewStyle: {
        width: '80%',
        alignSelf: 'center',
        height: 280,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    dangerTextStyle: {
        fontSize: 46,
        fontFamily: 'Regulator Nova Medium',
        color: '#49485F'
    },
    centerTextViewStyle: {
        width: '60%',
        alignSelf: 'center',
        marginVertical: 15
    },
    centerTextStyle: {
        fontSize: 16,
        fontFamily: 'Optima-Regular',
        color: '#49485F'
    },
    buttonMainViewStyle: {
        width: '60%',
        alignSelf: 'center',
        // height: 200,
        // backgroundColor: 'green'
    },
    buttonViewStyle: {
        width: '75%',
        borderRadius: 20,
        height: 24,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonTextStyle: {
        fontSize: 16,
        fontFamily: 'Regulator Nova Medium',
        color: '#FFF'
    },
    lastViewStytle: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'red',
        // flexDirection: 'row'
    },
    rowViewStyle: {
        width: '45%',
        // alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // backgroundColor: 'red'
    },
    lestgoTextStyle: {
        fontSize: 14,
        paddingLeft: 5,
        // width: '100%',
        // backgroundColor: 'green'
        fontFamily: 'Optima-Regular',
        color: '#49485F'
    }


})