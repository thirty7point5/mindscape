import React from 'react'
import { View, Text, Dimensions, StyleSheet, StatusBar, Image, ImageBackground,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
import Bottom from '../../components/Bottom/index'
import { fonts } from '../../utils/fonts'
const { width, height } = Dimensions.get('screen')
export const BreathingStarted = ({ navigation }) => {
    return (
        <LinearGradient colors={['#837F9D', '#D8D6DD']} style={styles.container} >
            <StatusBar hidden={true} />
            <View>
                <ImageBackground
                    // resizeMode={"cover"}
                    style={{ height: 280, width: '100%' }}
                    source={require('../../assets/images/yoga.png')}  >
                        <TouchableOpacity 
                        activeOpacity={0.8}
                        onPress={() =>navigation.goBack()}
                        >
                    <Image style={styles.arrowIcon} source={require('../../assets/images/cancel.png')} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <ScrollView style={{ paddingHorizontal: 18,marginLeft:15 }}>
                <Text style={styles.text0}>Flex</Text>
                <View style={styles.div}>
                    <Image style={styles.hpLogo} source={require('../../assets/images/hp.png')} />
                    <Text style={styles.text1}>MINDFUL</Text>
                </View>
                <Text style={styles.text2}>Mindful Breathing is a lifestyle Tool designed to integrate in your everyday life.
                </Text>
                <Text style={styles.text3}>Achieved through a set of simple stretches and movements that enhance your breathing rhythm and help oxygenate your muscles, brain, and heart.</Text>
                <View style={{height:40}}></View>
            </ScrollView>
            <Bottom
            bottomColor={"treansparent"}
            textRetrun = "Return"
            />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    arrowIcon: {
        alignSelf: "flex-end",
        marginTop: 24,
        marginRight: 20
    },
    div: {
        flexDirection: "row",
        paddingBottom:20
    },
    hpLogo: {
        width: 60,
        height: 60
    },
    text1: {
        fontSize: 22,
        fontWeight: "600",
        color: "#F6F5F4",
        paddingLeft:10,
        paddingTop:10,
        fontFamily:fonts.OptimaRegular
    },
    text0: {
        fontSize:12,
        paddingVertical:20,
        color:"#F8F7F4",
        fontFamily:fonts.regulatorDemiBold
    },
    text2:{
        color:"#FFFFFF",
        fontSize:20,
        paddingVertical:10,
        fontFamily:fonts.regulatorLight,
        lineHeight:20
    },
    text3:{
        fontSize:15,
        color:"#FFFFFF",
        fontFamily:fonts.regulatorLight,
        lineHeight:20
    }
    ,
    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})
