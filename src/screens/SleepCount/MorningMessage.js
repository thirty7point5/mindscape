import React,{useEffect} from 'react'
import { View, Text, Dimensions, StyleSheet, ImageBackground, Image} from 'react-native'
import WomenSvg from '../../assets/SVG/womenSvg.svg'

const {height, width} = Dimensions.get('screen')
export const MorningMessage = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SleepHours')
        }, 2000);
      }, []);
    return(
        <View style={{flex: 1}}>
            <ImageBackground source={require('../../assets/images/start.png')} style={{height: height, width: width}}>
                <View style={styles.bodyContainerStyle}>
                    <Text style={styles.textStyle}>
                        GOOD MORNING DANIEL
                    </Text>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 35, left: 0, right: 0}}>
                    <WomenSvg
                        style={{ height: 284, width: 280, resizeMode: 'stretch' }}
                    />
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
    }
})