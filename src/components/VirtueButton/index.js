import React from 'react'
import { View, Text, Image,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Neomorph } from 'react-native-neomorph-shadows';
import { fonts } from '../../utils/fonts';

export default function VirtueButton ({
    onPress,
    title='MINDFULNESS',
    imgPath = require('../../assets/images/arrow-right.png'),
    textStyle = {},
    backgroundColor = '#CAC6D1'
}) {
    return(
        <TouchableOpacity 
        activeOpacity={0.7}
        onPress={onPress}
        >
              <Neomorph
                inner
                style={{
                    shadowRadius: 3,
                    // shadowOffset: {width: 2, height: 1},
                    shadowOpacity: 0.6,
                    shadowColor: '#B4B1BB',
                    borderRadius: 30,
                    backgroundColor: backgroundColor,
                    width: 217,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                
            >
                <Text style={[styles.text, textStyle]}>{title}</Text>
            </Neomorph>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    text:{
        color:"#A3A2BA",
        fontSize:16,
        fontFamily:fonts.regulatorMedium
    }
})