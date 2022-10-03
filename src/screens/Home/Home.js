import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, Platform, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import NewmorphButton from '../../components/NewmorphButton/index'

export const Home = () => {
    return (
        <ImageBackground source={require('../../assets/images/home.png')}

            style={{
                flex: 1,
                // '#ACACC4'
            }}>
            <StatusBar barStyle="dark-content" backgroundColor={'#ACACC4'} />
            <View style={{
                height: '30%',
                justifyContent: 'flex-end',
                // backgroundColor: 'red'
            }}>
                <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'Regulator Nova Bold', color: '#49485F' }}>Week{'\n'}01</Text>
                <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'Regulator Nova Light', color: '#FFFFFF' }}>MINDFULNESS</Text>
                <Text style={{ textAlign: 'center', fontSize: 36, fontFamily: 'Regulator Nova Light', color: '#FFFFFF' }}>Connect with
                    {'\n'}your emotions</Text>


            </View>
            <View style={{
                height: '55%',
                justifyContent: 'flex-end',
                // backgroundColor: 'red',
                alignItems: 'center'
            }}>
                <NewmorphButton
                    // onPress={() => navigation.navigate('Login')}
                    backgroundColor="transparent"
                />


            </View>



        </ImageBackground>

    )
}


