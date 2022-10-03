import React from 'react'
import { StyleSheet, View } from 'react-native'


export const Indicator = ({
    data = [],
    currenIndex = 0,
    activeIndicatorStyle={},
    inActiveIndicatorStyle={},
    indicatorContainerStyle={}
}) => {
    return (
        <View style={[styles.main, indicatorContainerStyle]}>
            {data.map((value, index) => {
                if(index == currenIndex) {
                    return <View key={index} style={[styles.activeIndicatorStyle, activeIndicatorStyle]}/>    
                }else {
                    return <View key={index} style={[styles.inActiveIndicatorStyle, inActiveIndicatorStyle]}/>    
                }
            })}
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: "60%",
        left: 0,
        right: 0
    },
    activeIndicatorStyle : {
        height: 8,
        width: 8,
        borderRadius: 100,
        backgroundColor: "#FFF",
        margin: 10
    },
    inActiveIndicatorStyle: {
        height: 8,
        width: 8,
        borderRadius: 100,
        backgroundColor: "rgb(223, 231, 245)",
        margin: 10

    }
})