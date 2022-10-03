import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Neomorph } from 'react-native-neomorph-shadows';
import Entypo from 'react-native-vector-icons/Entypo'


const CircleButton = ({
    onPress,
    iconName = 'chevron-right',
    iconColor = '#fff',
    imgPath = require('../../assets/images/think.png'),
    imgStyle = {},
    backgroundColor = '#fff'
}) => {
    return (

        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Neomorph
                inner
                style={{
                    shadowRadius: 2,
                    shadowColor: backgroundColor,
                    borderRadius: 50,
                    backgroundColor: backgroundColor,
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image source={imgPath} style={[{ height: 50, width: 50 }, imgStyle]} />
            </Neomorph>
        </TouchableOpacity>
    )
}

export default CircleButton
