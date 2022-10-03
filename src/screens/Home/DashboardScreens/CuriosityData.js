import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Bottom from '../../../components/Bottom/index'

export const CuriosityData = () => {
    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

                <View style={{
                    width: '85%',
                    alignSelf: 'center',
                    marginTop: 20

                }}>


                    <Text style={{
                        fontSize: 24,
                        fontFamily: 'Regulator Nova Medium',
                        color: '#FFFFFF'
                    }}>You’re so curious and we {'\n'}love it! But you need to hold {'\n'}on a little longer, let’s finish {'\n'}mindfulness first, it will be {'\n'}worth it!</Text>
                </View>

            </ScrollView>
            <Bottom 
            textRetrun={'Return'}
            bottomColor='#706F93' />
        </>
    )
}


