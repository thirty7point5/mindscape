
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import Icon from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Header from '../../../components/Header/index';
import Bottom from '../../../components/Bottom/index'
import { ProgressSteps } from '../../../components/ProgressSteps';
import Slider from 'react-native-slider'

export const MindfullnessData = ({ navigation, step }) => {
    const [state, setState] = useState({
        value: 0.2
    })
    const thumbImage = require('../../../assets/images/play.png')
    const scroll = useRef()
    useEffect(() => {
        if (step >= 3) {
            scroll.current.scrollToEnd({ animated: true })
        } else {
            scroll.current.scrollTo({ x: 0, y: 0, animated: true });
        }
    }, [step])

    return (
        <>
            <ScrollView ref={scroll} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View
                    style={styles.curveViewStyle}>
                    <View
                        style={styles.curveViewStyle2}
                    >
                        <View
                            style={styles.rowViewStyle1}
                        >
                            <Text
                                style={styles.dailyTextStyle}
                            >
                                Connect with your {'\n'}emotions
                            </Text>
                            <LinearGradient
                                colors={['#D99888', '#F8EAE7',]}
                                start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }}
                                style={styles.linearCircleViewStyle1}
                            >
                                <Image source={require('../../../assets/images/group-245.png')} style={{ width: 15.83, height: 17.28 }} />
                            </LinearGradient>
                        </View>


                        <View
                            style={styles.barIconViewStyle}
                        >
                            <Slider
                                thumbImage={thumbImage}
                                minimumTrackTintColor={'#ffffff60'}
                                maximumTrackTintColor={'#ffffff60'}
                                thumbTintColor={'transparent'}
                                trackStyle={{ height: 2 }}
                                thumbTouchSize={{ width: 30, height: 30 }}
                                value={state.value}
                                onValueChange={e => setState({ e })}
                            />
                            {/* <Image source={require('../../../assets/images/play.png')} style={{ height: 25, width: 25, position: 'absolute', top: -10, bottom: 0 }} /> */}
                        </View>
                    </View>
                </View>


                <View style={{
                    // height: 150,
                    backgroundColor: '#B1B1C7',
                    borderBottomWidth: 1.5,
                    // borderColor: '#B3B3BF'
                    borderBottomColor: '#A3A2BA'
                }}>
                    <View style={{
                        width: '80%',
                        alignSelf: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{
                            fontSize: 14,
                            fontFamily: 'Regulator Nova Medium',
                            color: '#575672',
                            fontWeight: 'bold'
                        }}>PROGRESS</Text>

                    </View>
                    <View style={{
                        width: '80%',
                        alignSelf: 'center',
                        // height: height * 0.2
                    }}>
                        <ProgressSteps
                        onPress={()=>navigation.navigate('Dashboard1')}
                            data={[{ key: "01", title: "Get Started", week: "71%" }, { key: "07", title: "Connect", week: "" }, { key: "14", title: "Manage", week: "Milestone Activity 1" }, { key: "21", title: "Discover", week: "Milestone Activity 2" }, { key: "28", title: "Practice", week: "" }, { key: "35", title: "Become", week: "Milestone Activity 3" }]}
                            isIndexShow
                            nonActiveTextColor="#8C8BA5"
                            activeTextColor="#fff"
                            indexStyle={{
                                color: '#8C8BA5'
                            }}
                            indicatorCustomStyle={{
                                linearColor1: '#9C9BB3',
                                // linearColor12: '#fff',
                                stepIndicatorUnFinishedColor: '#B6B5CE',
                                separatorUnFinishedColor: '#A1A0B9',
                                separatorFinishedColor: '#A1A0B9',
                                // stepIndicatorSize: 1
                            }}
                        />
                    </View>
                </View>

                <LinearGradient
                    colors={['#B1B1C7', '#E4CBC7',]}
                    style={{
                        height: height * 0.14,
                        // backgroundColor: 'green'
                        // marginVertical: 5
                    }}
                >
                    <View style={{
                        width: '80%',
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 3,
                        // backgroundColor: 'green'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>

                            <Image source={require('../../../assets/images/tool.png')} style={{ height: 16, width: 27, }} />
                            <Text style={{
                                paddingLeft: 5,
                                fontFamily: 'Regulator Nova Medium',
                                color: '#E39684',
                                fontSize: 14,
                                fontWeight: 'bold'
                            }}>MINDFULNESS TOOLS</Text>
                        </View>
                        <View>
                            <Image source={require('../../../assets/images/mark.png')} style={{ height: 32, width: 28, }} />
                        </View>
                    </View>

                    <LinearGradient
                        colors={['#E59C8B', '#F3BFB4',]}
                        style={{
                            width: '80%',
                            alignSelf: 'center',
                            height: height * 0.065,
                            borderRadius: 25,
                            // alignItems: 'center',
                            justifyContent: 'center',
                            // marginBottom: 15
                            // backgroundColor: 'red'
                        }}
                    >
                        <View style={{
                            width: '65%',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            // marginBottom: 10
                        }}>
                            <Image source={require('../../../assets/images/bottle.png')} style={{ height: 42, width: 19, }} />
                            <Image source={require('../../../assets/images/moon.png')} style={{ height: 35, width: 38, }} />
                            <Image source={require('../../../assets/images/tea.png')} style={{ height: 40, width: 39, }} />
                            <Image source={require('../../../assets/images/circles.png')} style={{ height: 41, width: 41, }} />
                        </View>
                    </LinearGradient>
                </LinearGradient>

                <View style={{
                    height: height * 0.07,
                    backgroundColor: '#EBEBEC',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginBottom: 2,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontFamily: 'Regulator Nova Medium',
                            color: '#575672',
                            fontSize: 14,
                            fontWeight: 'bold'
                        }}>LIBRARY</Text>
                        <Text style={{
                            paddingLeft: 5,
                            fontFamily: 'Regulator Nova Medium',
                            color: '#706F93',
                            fontSize: 14,
                        }}>Read or Hear</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('../../../assets/images/mikes.png')} style={{ height: 16, width: 53, }} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Image source={require('../../../assets/images/plusCir.png')} style={{ height: 32, width: 28, marginLeft: 5}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Bottom 
            textRetrun={'Retrun'}
            navigation={navigation} />
        </>
    )
}



const styles = StyleSheet.create({
    curveViewStyle: {
        // height: 120,
        backgroundColor: '#B1B1C7'
    },
    curveViewStyle2: {
        height: height * 0.16,
        backgroundColor: '#9695AF',
        // elevation: 5,
        borderBottomRightRadius: height * 0.08,
        alignItems: 'center',
        justifyContent: 'center',

    },
    rowViewStyle1: {
        width: '80%',
        alignSelf: 'center',
        // marginVertical: height * 0.03,
        marginBottom: height * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dailyTextStyle: {
        fontSize: 26,
        fontFamily: 'Regulator Nova Medium',
        color: '#FFFFFF'
    },
    linearCircleViewStyle1: {
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    barViewStyle: {
        width: '75%',
        alignSelf: 'center',
        height: 2,
        backgroundColor: '#fff',
        // marginTop: 10
        marginVertical: 10
    },
    barIconViewStyle: {
        width: '76%',
        alignSelf: 'center'
    }
})