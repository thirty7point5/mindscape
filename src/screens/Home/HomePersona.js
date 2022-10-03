import React, {Component, useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput,Image,ImageBackground,StatusBar, Dimensions,TouchableOpacity } from 'react-native'
import PersonaSVG from '../../assets/SVG/personaSvg';
// import PersonaSVG from '../../assets/images/Step1.svg'
import NewmorphButton from '../../components/NewmorphButton/index'
import { imagePicker } from '../../helper/utils';
import { fonts } from '../../utils/fonts';
const { width, height } = Dimensions.get('screen')
// import Svg, {
//     Use,
//     Images as SvgImag
//   } from 'react-native-svg';
export const HomePersona = ({ navigation }) => {

 const[image, setImage]= useState()
  const imageSelector = async () => {
      try {
          const url = await imagePicker(false)
          setImage(url[0])
          console.log("url", url)
      } catch (error) {
        
      }
  }
    return (
        <View style={{flex: 1,}}>
            {/* <Text>Hello</Text> */}
            <PersonaSVG 
                style={{
                    position: 'absolute',
                    bottom: 0,

                }}
          />
           
        <View style={{flex: 1,paddingHorizontal:"12%"}}>
        <StatusBar hidden={true} />
            <View style={{ flex: 3, justifyContent: "center" }}>
                <Text style={{color:"#A3A2BA",textAlign:"center",fontSize:16,fontFamily:fonts.OptimaRegular}}>
                    PERSONA
                </Text>
                <Text style={{fontSize:24,color:"#BEBBC9",paddingVertical:10,paddingLeft:10,fontFamily:fonts.regulatorLight}}>Upload your picture to help us customize your Mindscape</Text>
                <View style={styles.circle}>
            <Image style={styles.img}  source= {require('../../assets/images/group243.png')}/>
            <View style={{flex:0,alignItems:"center",position:"absolute",top:"95%",left:"36%"}}>
            <TouchableOpacity 
            onPress={()=> imageSelector()}
            style={styles.btn}>
                <Text style={{textAlign:"center",fontSize:16,color:"#6E6E84",fontFamily:fonts.regulatorLight}}>Upload</Text>
            </TouchableOpacity>
            </View>
            </View>
            <Text style={{fontSize:14,color:"#E39684",textAlign:'center',paddingTop:30,fontFamily:fonts.OptimaRegular}}>It takes up to 24hrs to  {'\n'} update your persona</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('PersonaVirtue')}
                    // backgroundColor="#9493AD"
                    backgroundColor= {Platform.OS === 'ios' ? "#D4CFD6": "transparent"}
                />
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#9493AD",
        paddingHorizontal: "12%"
    },
    button:{
        backgroundColor:"#2F2F40",
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:20,
        paddingHorizontal:10,
        marginTop:"15%",
        width:"80%",
        height:20
    },
    circle:{
        borderWidth:1,
        borderRadius:190,
        borderColor:"#A09EB4",
        width:"85%",
        height:"40%",
        marginTop:10,
        flex:0,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:17
    },
    btn:{
        backgroundColor:"#2F2F40",
        width:70,
        paddingVertical:6,
        borderRadius:30,
        paddingHorizontal:2
    },
    img:{
        width:"90%",
        height:"100%",
        marginLeft:10
    }
})