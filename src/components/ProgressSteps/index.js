import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import StepIndicator from 'react-native-step-indicator';
import { fonts } from '../../utils/fonts';

export const ProgressSteps = ({
    data = [],
    currentPosition = 2,
    isIndexShow = false,
    titleStyle = {},
    weekStyle = {},
    indexStyle = {},
    indicatorCustomStyle = {},
    activeTextColor = "#E39684",
    nonActiveTextColor = '#ADAABC',
    onPress= () => {}

}) => {

    const customStyles = {
        stepIndicatorSize: 18,
        currentStepIndicatorSize: 18,
        separatorStrokeWidth: 1,
        currentStepStrokeWidth: 2,
        stepStrokeCurrentColor: 'transparent',
        stepStrokeWidth: 2,
        stepStrokeFinishedColor: 'transparent',
        stepStrokeUnFinishedColor: '#ADAABC',
        separatorFinishedColor: '#ADAABC',
        separatorUnFinishedColor: 'transparent',
        stepIndicatorFinishedColor: '#ADAABC',
        stepIndicatorUnFinishedColor: 'transparent',
        stepIndicatorCurrentColor: 'transparent',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: 'transparent',
        stepIndicatorLabelFinishedColor: 'transparent',
        stepIndicatorLabelUnFinishedColor: 'transparent',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#ADAABC',
        linearColor1: '#E39684',
        linearColor2: '#fff',
    }

    return (
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
            {isIndexShow && <View>
                {data.map((value, index) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0}
                            // onPress={() => { onStepPress() }}
                            style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                            <Text style={[{ color: "#E39684", fontSize: 15, fontWeight: "bold", fontSize: 15, paddingRight: 5 }, indexStyle]}>{value.key}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>}
            <View style={{ flex: 1 }}>
                <StepIndicator
                    stepCount={data.length > 0 ? data.length : 2}
                    customStyles={{ ...customStyles, ...indicatorCustomStyle }}
                    currentPosition={currentPosition - 1}
                    direction={'vertical'}
                />
            </View>
            <View style={{ flex: 8 }}>
                {data.map((value, index) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => { onPress() }}
                            style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
                            <Text style={[{ color: (((index + 2 == currentPosition)) ? activeTextColor : nonActiveTextColor), fontSize: 15, fontWeight: "bold", fontSize: 15,fontFamily:fonts.OptimaBold }, titleStyle]}>{value.title}</Text>
                            <Text style={[{ color: (((index + 2 == currentPosition)) ? activeTextColor : nonActiveTextColor), fontSize: 15, fontWeight: "bold", fontSize: 15,fontFamily:fonts.OptimaBold }, weekStyle]}>{value.week}</Text>
                        </TouchableOpacity>
                        //  || (index + 1 < currentPosition)
                        //  || (index + 1 < currentPosition)
                    )
                })}
            </View>
        </View>
    )
}