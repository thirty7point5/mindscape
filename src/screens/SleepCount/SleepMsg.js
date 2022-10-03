import React from 'react'
import { View, Text, Dimensions, StyleSheet, ImageBackground, Image} from 'react-native'
import WomenSvg from '../../assets/SVG/womenSvg.svg'
import { fonts } from '../../utils/fonts'
import NewmorphButton from '../../components/NewmorphButton/index'
const {height, width} = Dimensions.get('screen')
export const SleepMsg = ({navigation}) => {

    return(
        <View style={{flex: 1}}>
            <ImageBackground source={require('../../assets/images/start.png')} style={{height: height, width: width}}>
                <View style={styles.rememberContainer}>
                    <ImageBackground
                        source={require('../../assets/images/remember.png')}
                        style={styles.rememberImg}
                    >
                       <View style={styles.rememberMsgContainer}>
                            <Text style={styles.rememberHeading}> 
                                REMEMBER 
                            </Text>
                            <Text style={styles.rememberMsg}>
                                How you sleep at night {"\n"}determines how well {"\n"}you do in the day. 
                            </Text>
                       </View>
                    </ImageBackground>
                    <View style={styles.smallCircle}>
                    <Text style={styles.text4}>4</Text>
                    </View>
                    <View style={{top: "12%"}}>
                    <NewmorphButton
                    onPress={() => navigation.navigate('Dashboard1')}
                    // backgroundColor="#9493AD"
                    backgroundColor= {Platform.OS === 'ios' ? "#D4CFD6": "transparent"}
                />
                </View>
                </View>
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    bodyContainerStyle : {flex: 1, alignItems: 'center', marginTop: "40%"},
    textStyle: {
        color: "#fff",
        fontFamily: "Regulator Nova Medium",
        fontSize: 18
    },
    rememberContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    rememberImg:  { 
        height: 234,
        width: 230, 
        resizeMode: 'stretch' 
    },
    rememberHeading: {
        color: "#E39684",
        // fontSize: 14
    },
    rememberMsg: {
        color: "#fff",
        fontSize: 16
    },
    rememberMsgContainer: {
        position: "absolute",
        top: height/9.5,
        left: width/9.5        
    },
    text4:{
        fontFamily:fonts.regulatorMedium,
        fontSize:16,
        color:"#ffffff"
    },
    smallCircle:{
        borderColor:"#FFFFFF",
        borderWidth:0.5,
        borderRadius:20,
        paddingHorizontal:12,
        paddingVertical:6,
        left:"27%",
        bottom:30
    }
})