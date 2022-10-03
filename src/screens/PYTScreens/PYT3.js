import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import NewmorphButton from '../../components/NewmorphButton/index'
import Feather from 'react-native-vector-icons/Feather'

export const PYT3 = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={'#FFFFFF'} />

            <LinearGradient
                style={styles.LinearGradient1}
                colors={['#FFFFFF', '#EDE7E4']}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => {
                        //  navigation.navigate('BOB')
                    }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <View
                    style={styles.LinearGradient2}
                >
                    <ImageBackground source={require('../../assets/images/pyt3.png')} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{
                            height: height * 0.45,
                            // backgroundColor: 'red',
                            justifyContent: 'space-between'

                        }}>


                            <Text style={styles.discliamerTextStyle}>
                                Tomorrow will be
                                {'\n'}a better day
                                {'\n'}For now...
                            </Text>

                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate('PYT4')}
                                >
                                    <Text
                                        style={styles.footerTextStyle}

                                    >
                                        Take a deep breathe
                                    </Text>
                                </TouchableOpacity>
                                <Text
                                    style={styles.lineStyle}

                                >
                                    ___
                                </Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                >
                                    <Text
                                        style={styles.footerTextStyle}

                                    >
                                        Call a close friend
                                    </Text>
                                </TouchableOpacity>
                                <Text
                                    style={styles.lineStyle}

                                >
                                    ___
                                </Text>
                                <Text
                                    style={styles.footerTextStyle}

                                >
                                    Play your favorite music
                                </Text>

                            </View>


                        </View>




                    </ImageBackground>
                </View>

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
        alignItems: 'flex-end'
    },
    LinearGradient2: {
        width: '80%', height: height * 0.75, borderRadius: height / 2, backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff'
    },
    discliamerTextStyle: {
        color: '#FFFF',
        fontSize: 20,
        fontFamily: 'Optima-Regular',
        textAlign: 'center'
    },
    footerTextStyle: {
        color: '#FFFF',
        fontSize: 18,
        fontFamily: 'Regulator Nova Medium',
        textAlign: 'center'
    },
    lineStyle: {
        color: '#F8F7F4',
        fontSize: 15,
        fontFamily: 'OPTIMA',
        textAlign: 'center',
        lineHeight: 15,
        opacity: 0.5
    }

})