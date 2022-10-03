import React from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')

const index = ({
    navigation,
    bottomColor = '#EBEBEC',
    borderTop = 1,
    borderColor = "#9393AE",
    iconText = '04',
    textRetrun = ''
}) => {
    return (
        <View
            style={{
                width: '100%',
                height: height * 0.122,
                backgroundColor: bottomColor,
                alignItems: 'center',
                justifyContent: 'center',
                // position: 'absolute',
                bottom: 0,
                borderTopWidth: borderTop,
                borderTopColor: borderColor
            }}

        >
            <View
                style={styles.mainView2Style}

            >
                <View
                    style={styles.rowImgTextStyle}

                >
                    <ImageBackground source={require('../../assets/images/imgback.png')}
                        style={styles.imgBackStyle}

                    >
                        <Text
                            style={styles.centerTextStyle}

                        >{iconText}</Text>
                    </ImageBackground>
                    <Text
                        style={styles.returnTextStyle}

                    >
                        {textRetrun}
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {
                    navigation.openDrawer()
                }}>
                    <Image source={require('../../assets/images/menu.png')} style={{ height: 25, width: 32, }} />

                </TouchableOpacity>
            </View>
        </View>

    )
}

export default index


const styles = StyleSheet.create({
    mainViewStyle: {
        width: '100%',
        height: height * 0.122,
        backgroundColor: '#EBEBEC',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'absolute',
        bottom: 0
    },
    mainView2Style: {
        flexDirection: 'row',
        width: '80%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowImgTextStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgBackStyle: {
        width: 46, height: 46,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerTextStyle: {
        fontSize: 24,
        fontFamily: 'Regulator Nova Medium',
        color: '#F7F7F7',
        paddingRight: 5
    },
    returnTextStyle: {
        fontSize: 16,
        fontFamily: 'Optima-Regular',
        color: '#E27E67',
        paddingLeft: 5
    }


})