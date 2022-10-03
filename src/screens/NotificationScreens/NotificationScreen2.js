import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import NewmorphButton from '../../components/NewmorphButton/index'
import Feather from 'react-native-vector-icons/Feather'

export const NotificationScreen2 = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={'#F1F0F0'} />

            <LinearGradient
                style={styles.LinearGradient1}
                colors={['#F1F0F0', '#AFADBF']}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => {
                        navigation.goBack()
                    }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <LinearGradient
                    style={styles.LinearGradient2}
                    colors={['#EBBFB4', '#DFDEE5']}   >
                    <Text style={styles.discliamerTextStyle}>WELL DONE</Text>

                    <View style={styles.centerTextViewStyle}>
                        <Text style={styles.centerTextStyle}>
                            Target{'\n'}
                            Achieved
                        </Text>
                    </View>
                    <View style={{
                        // width: '20%',
                        // alignSelf: 'center',
                        // backgroundColor: 'red'
                    }}>
                        <View
                            style={styles.buttonViewStyle}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Dashboard')}
                                style={styles.Button}
                                activeOpacity={0.8}>
                                <Text style={{ color: '#A3A2BA', fontSize: 14, fontFamily: 'Optima-Regular' }}>Back to Homepage</Text>
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
        alignItems: 'flex-end'
    },
    LinearGradient2: {
        width: '80%', height: height * 0.75, borderRadius: height / 2, backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    discliamerTextStyle: {
        color: '#6B6B8D',
        fontSize: 22,
        fontFamily: 'Optima-Regular',
        textAlign: 'center',
        top: 30
    },
    centerTextViewStyle: {
        marginVertical: height * 0.18,
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