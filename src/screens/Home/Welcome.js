import React from 'react'
import { View, Text, Dimensions, StyleSheet, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import WelcomeSvg from '../../assets/SVG/WelcomeSvg'
import { fonts } from '../../utils/fonts'
// import WelcomeSvg from '../../assets/images/Welcome.svg'
const {width, height} = Dimensions.get('screen')
export const HomeWelcome = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
        <StatusBar hidden={true} />
            <WelcomeSvg 
                // width={Dimensions.get('window').width}
                // height={Dimensions.get('window').height}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    // left: 0
                }}
          />

          <View style={styles.containerText}>
                <Text style={styles.text1}>
                    Welcome to your
                </Text>
                <Text style={styles.text2}>
                    Mindscape Daniel
                </Text>
                <Text onPress={() => navigation.navigate("HomeSetName")} style={styles.text3}>
                    Setup to begin
                </Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerText: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: height/15,
        alignItems: 'center'
    },
    text1: {
        color: "#fff",
        fontSize: 18,
        fontFamily: fonts.regulatorLight
    },
    text2: {
        color: "#fff",
        fontSize: 24,
        fontFamily: fonts.regulatorLight
    },
    text3: {
        color: "#fff",
        fontSize: 16,
        fontFamily: fonts.regulatorLight
    }
})
