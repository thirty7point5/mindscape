import React from 'react'
import { View, Text, Dimensions, StyleSheet, StatusBar,ImageBackground,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import WelcomeSvg from '../../assets/SVG/WelcomeSvg'
// import WelcomeSvg from '../../assets/images/Welcome.svg'
import { fonts } from '../../utils/fonts'
const {width, height} = Dimensions.get('screen')
export const Breathing = ({navigation}) => {
    return (
        <View style={styles.container}>
        <StatusBar hidden={true} />
        <ImageBackground
         style={{ height: '100%', width: '100%' }}
         source={require('../../assets/images/breathing.png')}
        >
            <View style={{flex:2,paddingTop:"10%",alignSelf:"flex-end",paddingHorizontal:20}}>
            <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.goBack()}
            >
            <Image source={require('../../assets/images/cancel.png')} />
            </TouchableOpacity>
            </View>
            <View style={styles.breath}>
            <Image style={styles.logo} source={require('../../assets/images/hp.png')} />
                <Text style={{paddingVertical:10,fontSize:12,color:"#F8F7F4",fontFamily:fonts.regulatorDemiBold}}>MINDFUL BREATHING</Text>
                <Text style={{fontSize:22,color:"#F8F7F4",fontFamily:fonts.OptimaRegular}}>Oxygenate Your Brain</Text>
                <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('BreathingStarted')} 
                style={styles.btn}>
                    <Text style={{color:"#F8F7F4",fontFamily:fonts.OptimaRegular}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    btn:{
        borderColor:"#F8F7F4",
        width:"70%",
        height:28,
        borderWidth:1,
        paddingHorizontal:22,
        borderRadius:22,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10
    },
    logo:{
        width:50,
        height:50
    },
    breath:{
        flex:1.1,
        alignItems:"center",
        backgroundColor:"#A8A7B490",
        paddingTop:25,
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4.65,
    
        // elevation: 3,
    }
})
