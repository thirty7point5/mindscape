import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet, Alert, TouchableOpacity, Image, ImageBackground } from 'react-native'

const { height, width } = Dimensions.get('screen')
export const SleepHours = ({navigation}) => {
    const [selectedHours, setselectedHours] = useState("4")

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../assets/images/start.png')} style={{height: height, width: width}}>
            <View style={styles.bodyContainerStyle}>
                <Text style={styles.textStyle}>
                    How many hours {"\n"} did you sleep last night
                </Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <View>
                    <Image source={require('../../assets/images/elipse.png')} style={{right: 5}}  />
                </View>
                {/* <Svg position="absolute" height="100%" width="100%"
                    viewBox="-20 -60 300 300">
                    <Defs>
                        <LinearGradient
                        id="prefix__a"
                        x1={1.046}
                        y1={-0.125}
                        x2={0}
                        y2={0.59}
                        gradientUnits="objectBoundingBox"
                        >
                        <Stop offset={0} stopColor="#a1a0b9" />
                        <Stop offset={1} stopColor="#6b6b8d" />
                        </LinearGradient>
                    </Defs>
                    <G id="elipse">
                        <Path
                            data-name="Path 514"
                            d="M175.815 19.712a111.129 111.129 0 00-11.956-10.348 110.375 110.375 0 01-154.5 154.5A110.38 110.38 0 10175.815 19.712z"
                            transform="translate(-9.364 -9.364)"
                            fill="url(#prefix__a)"
                        />
                    </G>
                    <SvgText fill="#000" fontSize="14" wordSpacing="8">
                        <TextPath href="#elipse">
                            <TSpan dx="80" dy={-50}>
                                <TSpan stroke="red" fontSize={50} dx={100} dy={-45} rotate={270}  onPressIn={() => Alert.alert('3')}>
                                    3
                                </TSpan>
                                <TSpan  dx={15} fontSize={20} rotate={230}>
                                    4
                                </TSpan>
                                <TSpan dx={15} fontSize={20} rotate={230}>
                                    5
                                </TSpan>
                                <TSpan dx={15} fontSize={20} rotate={230}>
                                    6
                                </TSpan>
                                <TSpan dx={15} dy={-5} fontSize={20} rotate={210}>
                                    7
                                </TSpan>
                                <TSpan dx={17} fontSize={20} rotate={190}>
                                    8
                                </TSpan>
                                <TSpan dx={20} fontSize={20} rotate={190}>
                                    9
                                </TSpan>
                                <TSpan dx={20} dy={5} fontSize={20} rotate={180} onPressIn={() => Alert.alert('10+')}>
                                    +01
                                </TSpan>
                                 3  4  5  6  7  8  9  10+
                            </TSpan>
                        </TextPath>
                    </SvgText>
                </Svg> */}
                <View style={{position: 'absolute', right: width/6.6, }}>
                    <TouchableOpacity  style={{ right: 15}} onPress={() => setselectedHours('3')}>
                        <Text style={[styles.textStyle, selectedHours == "3" && styles.activeText ]}>
                            3
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>  
                    
               {
                   navigation.navigate('SleepMsg')
                setselectedHours('4')
               }
                
                } style={{top: 20, right: 5}}>
                        <Text style={[styles.textStyle, selectedHours == "4" && styles.activeText ]}>
                            4
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setselectedHours('5')} style={{top: 40, right: 5}}>
                        <Text style={[styles.textStyle, selectedHours == "5" && styles.activeText ]}>
                            5
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setselectedHours('6')} style={{top: 60, right: 15}}>
                        <Text style={[styles.textStyle, selectedHours == "6" && styles.activeText ]}>
                            6
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setselectedHours('7')} style={{top: 80, right: 45}}>
                        <Text style={[styles.textStyle, selectedHours == "7" && styles.activeText ]}>
                            7
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setselectedHours('8')} style={{top: 80, right: 80}}>
                        <Text style={[styles.textStyle, selectedHours == "8" && styles.activeText ]}>
                            8
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setselectedHours('9')} style={{top: 70, right: 130}}>
                        <Text style={[styles.textStyle, selectedHours == "9" && styles.activeText ]}>
                            9
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setselectedHours('10+')} style={{top: 50, right: 190}}>
                        <Text style={[styles.textStyle, selectedHours == "10+" && styles.activeText ]}>
                            10+
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bodyContainerStyle}>
            </View>
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    bodyContainerStyle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    textStyle: {
        color: "#fff",
        fontFamily: "Regulator Nova Medium",
        fontSize: 18,
        textAlign:'center'
    },
    activeText: {borderColor: "#fff", borderWidth: 0.3, borderRadius: 100, height: 20, width: 20}
})