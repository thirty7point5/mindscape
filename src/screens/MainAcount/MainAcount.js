import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import Icon from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'

export const MainAcount = ({ navigation }) => {


    const Data = [{
        title: 'PROFILE',
        navigateTo: 'Account'
    },
    {
        title: 'SETTING',
        navigateTo: 'AccountSetting'
    }


    ]
    return (
        <LinearGradient
            colors={['#47465D', '#47465D',]}
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

                <View
                    style={styles.crossViewStyle}
                    activeOpacity={0.7}

                >
                    <Icon name="close" size={40} color="#8C8BA5" onPress={() => {
                        navigation.goBack()
                    }} />
                </View>


                <View
                    style={styles.preferenceViewStyle}>
                    <Text
                        style={styles.preferenceTextStyle}>ACCOUNT</Text>

                </View>


                {
                    Data.map((item, i) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    item.navigateTo && navigation.navigate(item.navigateTo)
                                }}
                                activeOpacity={0.7}
                                key={i}
                                style={{
                                    width: '70%',
                                    alignSelf: 'center',
                                    // backgroundColor: 'red',
                                    marginVertical: i == 1 ? 0 : 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}

                            >
                                <View style={{
                                    width: '40%',
                                    height: 40,
                                    // alignSelf: 'center',
                                    borderBottomWidth: 0.8,
                                    borderTopWidth: i == 1 ? 0 : 0.8,
                                    borderColor: '#A4A3BC',
                                    justifyContent: 'center'


                                }}>
                                    <Text style={{
                                        fontSize: 24,
                                        fontFamily: 'Regulator Nova Medium',
                                        color: '#FFF',

                                    }}>{item.title}</Text>

                                </View>
                                <Entypo name='chevron-small-right' size={35} color='#FFFFFF' />
                            </TouchableOpacity>

                        )
                    })
                }





            </ScrollView>



        </LinearGradient>

    )
}


const styles = StyleSheet.create({
    crossViewStyle: {
        width: '90%',
        alignSelf: 'center', justifyContent: 'center',
        alignItems: 'flex-end',
        height: height * 0.12,
    },

    preferenceViewStyle: {
        width: '70%',
        alignSelf: 'center',
        // backgroundColor: 'red',
        marginVertical: 10

        // height: 200
    },
    preferenceTextStyle: {
        fontSize: 24,
        fontFamily: 'Regulator Nova Medium',
        color: '#8C8BA5'
    },


})

