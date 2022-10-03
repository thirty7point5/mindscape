import React from 'react'
import { View, Text, Dimensions, StyleSheet, StatusBar,ImageBackground,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import WelcomeSvg from '../../assets/SVG/WelcomeSvg'
const {width, height} = Dimensions.get('screen')
export const WeeklyProgress2 = ({navigation}) => {
    return (
        <>
        <StatusBar hidden={true} />
        <ImageBackground
                style={{ height: '100%', width: '100%' }}
                source={require('../../assets/images/WeeklyProgress2.png')}
            >
                <View style={{flex:1,paddingHorizontal:20}}>
                    <TouchableOpacity 
                    style={{paddingVertical:20}}
                    activeOpacity={0.9}
                    onPress={() => navigation.goBack()}
                    >
                         <Image style={{alignSelf:"flex-end"}} source={require('../../assets/images/cancel.png')} />
                    </TouchableOpacity>
               
                
                <View style={styles.div}>
                    <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={styles.text0}>We can help you do</Text>
                    </View>
                    <View style={{flex:1}}>
                    <Text style={styles.text1}>ADD A REMINDER</Text>
                    <Image style={{alignSelf:"center",marginVertical:10}} source={require('../../assets/images/total.png')} />
                    <Text style={styles.text1}>ADD A CALENDER</Text>
                    </View>
                    <View style={{flex:1}}>
                    <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={()=> navigation.navigate('Loading1')} 
                    style={styles.btn}>
                        <Text style={{color:"#A3A2BA"}}>CONTINUE</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}> 
                <ImageBackground source={require('../../assets/images/imgback.png')}
                        style={styles.imgBackStyle}

                    >
                        <Text
                            style={styles.centerTextStyle}

                        >07</Text>
                    </ImageBackground>
                    <Image  source={require('../../assets/images/menu.png')} />
                </View>
                </View>
  </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    div:{
        width: '84%', height: height * 0.75, borderRadius: height / 2, backgroundColor: 'transparent',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        marginLeft:28,
        borderColor:"#FFFFFF"
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
    footer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10
    },
    btn:{
        backgroundColor:"#F5F2F0",
        paddingVertical:6,
        paddingHorizontal:"15%",
        borderRadius:20,
        alignItems:"center"
    },
    text1:{
        color:"#575672",
        fontSize:14,
        fontFamily:'Regulator Nova',
        fontWeight:"bold"
    },
    text0:{
        color:"#6B6B8D",
        fontSize:22,
        fontFamily:'Optima'
    }
})