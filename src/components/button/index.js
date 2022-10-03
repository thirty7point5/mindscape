import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

export default function Button ({
title="title",
onPress= () => {},
textStyle = {},
buttonStyle = {}
}){
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button,buttonStyle]} activeOpacity={0.7}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    button : {
        borderColor:"#afafb7",
        borderWidth:1,
        width:150,
        height:32,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
    },
    text:{
        color:"#afafb7"
    }
})