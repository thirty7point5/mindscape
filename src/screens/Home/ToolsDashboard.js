import React from 'react'
import { View, Text,StyleSheet,Image,StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ToolSvg from '../../assets/SVG/toolSvg'
import NewmorphButton from '../../components/NewmorphButton/index'
import { fonts } from '../../utils/fonts'
export const ToolsDashboard = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ToolSvg 
                style={{
                    position: 'absolute',
                    bottom: 0,

                }}
          />
          <View style={{flex:3,justifyContent:"center",alignItems:"center",paddingHorizontal:20}}>
          <StatusBar hidden={true} />
            <Text style={{color:"#A3A2BA",paddingBottom:20}}>
                TOOLS
            </Text>
            <Text style={{color:"#A3A2BA",paddingBottom:15,fontSize:24,fontFamily:fonts.regulatorLight,paddingLeft:14}}>Virtues are equipped with {'\n'} a set of tools.</Text>
            <Text style={{paddingBottom:10,color:"#E39684",paddingLeft:15,fontSize:16,fontFamily:fonts.OptimaRegular,lineHeight:22}}>These tools are designed and destined to become your life long companion.</Text>
            <View style={{paddingTop:30,alignItems:"center"}}>
            <Image style={{marginTop:8,marginLeft:3}} source={require('../../assets/images/Group276.png')}/>
            <Text style={styles.toolbox}>Toolbox</Text>
            <Text style={{paddingVertical:30,color:"#E39684",fontSize:16,fontFamily:fonts.OptimaRegular}}>DASHBOARD</Text>
            </View>
            </View>
            <View style={{flex:1,alignItems:"center"}}>
            <NewmorphButton
                    onPress={() => navigation.navigate('HomePersona')}
                    // backgroundColor="#9493AD"
                    backgroundColor= {Platform.OS === 'ios' ? "#E9C5BC": "transparent"}
                />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#9493AD",
        paddingHorizontal: 20
    },
    toolbox:{
        position:"absolute",
        zIndex:30,
        top:"55%",
        color:"#fff",
        fontFamily:fonts.OptimaRegular,
        fontSize:18
    }
})