import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput,Image,Dimensions, StatusBar,Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
import SetNameSvg from '../../assets/SVG/setNameSVG'
import CountryPicker from 'react-native-country-picker-modal'
import { fonts } from '../../utils/fonts'

export const HomeSetCountry = ({ navigation }) => {
    const [country, setCountry] = useState('Pakistan')
    const [visible, setvisible] = useState(false)

    return (
        <View style={styles.container}>
            <SetNameSvg
                // width={100}
                // width={Dimensions.get('screen').width}
                // height={Dimensions.get('screen').height}
                style={{
                    position: 'absolute',
                    bottom: 0,
                }}
            />
             <CountryPicker 
                    onClose={() => {
                        setvisible(false)
                    }}
                    visible={visible}
                    placeholder={''}
                    onSelect={(country) => {
                        setvisible(false)
                        setCountry(country.name)
                    }}
                />
            <View style={{ flex: 2, justifyContent: "center", paddingTop: "30%",paddingLeft:20 }}>
                <StatusBar hidden={true}/>
                <Text style={{fontFamily: fonts.OptimaRegular}}>
                    So Daniel,
                </Text>
                <Text style={{fontFamily: fonts.OptimaRegular}}>Which country are you based in?</Text>
                <TouchableOpacity onPress={() => setvisible(true)}  style={styles.button}>
                    <Text style={{color:"#fff", fontFamily: fonts.regulatorLight}}>{country}</Text>
                    <Image style={{marginTop:2, marginLeft: "10%", }} source={require('../../assets/images/ComponentArrow.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.5, alignItems: "center", }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('HomeWarning')}
                    backgroundColor= {Platform.OS === 'ios' ? "#A4A3BC": "transparent"}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: "#9493AD",
        paddingHorizontal: "15%"
    },
    button:{
        backgroundColor:"#2F2F40",
        flexDirection:"row",
        // alignContent: "space-between",
        justifyContent:"space-between",
        borderRadius:20,
        paddingHorizontal:10,
        marginTop:"15%",
        height:26,
        alignItems:"center"
    }
})