import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import NewmorphButton from '../../components/NewmorphButton/index'
import Entypo from 'react-native-vector-icons/Entypo'

export const PYT2 = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />

            <LinearGradient
                style={styles.LinearGradient1}
                colors={['#FFFFFF', '#EDE7E4']}>
                <View style={styles.crossStyle}>
                    <Entypo onPress={() => {
                        //  navigation.navigate('BOB')
                    }} name={'chevron-thin-right'} size={30} color={'#A3A2BA'} />
                </View>
                <LinearGradient
                    style={styles.LinearGradient2}
                    colors={['#C0BFCE', '#FAF9F8']}   >
                    <Image source={require('../../assets/images/circleyes.png')} style={{ width: 22, height: 22, top: 25 }} />
                    <Text style={styles.discliamerTextStyle}>Activity
                        {'\n'}Completed</Text>

                    <View style={styles.centerTextViewStyle}>
                        <Text style={styles.centerTextStyle}>
                            You selected a low
                            {'\n'}mood picture.
                            {'\n'}Is everything okay?
                        </Text>
                    </View>
                    <View style={{
                        width: '30%',
                        // alignSelf: 'center',
                        // backgroundColor: 'red'
                    }}>
                        <View
                            style={styles.buttonViewStyle}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('PYT3')}
                                style={styles.Button}
                                activeOpacity={0.8}>
                                <Text style={{ color: '#A3A2BA', fontSize: 16, fontFamily: 'Optima-Regular', }}>Yes</Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                    <View style={{
                        width: '60%',
                        // alignSelf: 'center',
                        // backgroundColor: 'red'
                    }}>
                        <View
                            style={styles.buttonViewStyle}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('PYT1')}
                                style={styles.Button}
                                activeOpacity={0.8}>
                                <Text style={{ color: '#A3A2BA', fontSize: 16, fontFamily: 'Optima-Regular', }}>No</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </LinearGradient>

            </LinearGradient>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    LinearGradient1: {
        flex: 1, alignItems: 'center'
    },
    crossStyle: {
        width: '85%',

        marginTop: height * 0.02,
        alignItems: 'flex-end',
    },
    LinearGradient2: {
        width: '80%', height: height * 0.75, borderRadius: height / 2, backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    discliamerTextStyle: {
        color: '#6B6B8D',
        fontSize: 22,
        fontFamily: 'Optima-Regular',
        textAlign: 'center',
        top: 30
    },
    centerTextViewStyle: {
        marginVertical: height * 0.15,
        width: '80%',
        // fontFamily: 'Optima'
    },
    centerTextStyle: {
        color: '#706F93',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 27,
        fontFamily: 'Regulator Nova Medium',
    },
    buttonViewStyle: {
        marginTop: height * 0.01
    },
    Button: {
        height: 24,
        width: 131,
        backgroundColor: '#EEE8E5',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1
    }

})