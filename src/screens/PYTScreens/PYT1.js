import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, Platform } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import NewmorphButton from '../../components/NewmorphButton/index'
export const PYT1 = ({ navigation }) => {

    const Images = [
        {
            img: require('../../assets/images/flame.png'),
        },
        {
            img: require('../../assets/images/sea.png'),
        },
        {
            img: require('../../assets/images/tree.png'),
        },
        {
            img: require('../../assets/images/sky.png'),
        },
        {
            img: require('../../assets/images/earth.png'),
        }
    ]

    return (
        <LinearGradient
            colors={['#EEE9E6', '#F8F7F4',]}
            // start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
            style={{
                flex: 1
            }}
        >
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

                <View
                    style={styles.centerTextViewStyle}

                >
                    <Text
                        style={styles.centerTextStyle}

                    >
                        Today My Thoughts {'\n'}looks like
                    </Text>

                    {
                        Images.map((item, i) => {
                            return (
                                <View
                                    style={styles.imgViewStyle}
                                    key={i}

                                >
                                    <Image source={item.img} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                </View>
                            )
                        })
                    }

                    <View
                        style={styles.buttonViewStyle}

                    >

                        <NewmorphButton
                            onPress={() => navigation.navigate('PYT2')}
                            backgroundColor='#EBE5DA'
                            backgroundColor={Platform.OS == "ios" ? "#EBE5DA" : "transparent"}
                        />
                    </View>

                </View>



            </ScrollView>
        </LinearGradient>
    )
}


const styles = StyleSheet.create({

    centerTextViewStyle: {
        width: '80%',
        height: '110%',
        alignSelf: 'center',
        // height: 150,
        alignItems: 'center',

        justifyContent: 'center',
        // marginTop: 70
        // marginBottom: 30,
        // backgroundColor: 'red'
    },
    centerTextStyle: {
        textAlign: 'center',
        // paddingTop: '30%',
        fontSize: 24,
        color: '#686584',
        paddingBottom: height * 0.04,
        fontFamily: 'Regulator Nova Medium',
    },
    imgViewStyle: {
        width: height * 0.35,
        height: height * 0.095
    },
    buttonViewStyle: {
        marginTop: height * 0.035
    }

})