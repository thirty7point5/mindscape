import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView , Platform,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient';
import StepIndicator from 'react-native-step-indicator';
import { ProgressSteps } from '../../components/ProgressSteps';
import { fonts } from '../../utils/fonts'
export const HomeProgram = ({ navigation }) => {
    const [currentPosition, setCurrentPosition] = useState(3);
    const [renderLabel, setRenderLabel] = useState();
    const onStepPress = (position) => {
        setCurrentPosition(currentPosition);
    };
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 2,
        stepStrokeCurrentColor: 'transparent',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: 'transparent',
        stepStrokeUnFinishedColor: 'transparent',
        separatorFinishedColor: '#ADAABC',
        separatorUnFinishedColor: '#ADAABC',
        stepIndicatorFinishedColor: '#ADAABC',
        stepIndicatorUnFinishedColor: '#ADAABC',
        stepIndicatorCurrentColor: 'red',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: 'transparent',
        stepIndicatorLabelFinishedColor: 'transparent',
        stepIndicatorLabelUnFinishedColor: 'transparent',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#ADAABC',
        linearColor1: '#E39684',
        linearColor2: '#fff'
    }
    return (
        <LinearGradient style={styles.container} colors={['#EDE7E4', '#9B98B0']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: "14%", paddingTop: "18%" }}>
                    <Text style={{ paddingVertical: 4, color: "#A3A2BA", fontSize: 24,fontFamily:fonts.regulatorLight }}>PROGRAM</Text>
                    <View style={styles.border}></View>
                    <Text style={{ color: "#A3A2BA", fontSize: 14,fontFamily:fonts.regulatorMedium }}>VIRTUE 1</Text>
                    <Text style={{ color: "#706F93", fontWeight: "bold", fontSize: 24,fontFamily:fonts.regulatorBold }}>MINDFULNESS</Text>

                    <ProgressSteps
                        data={[{ title: 'Connect', week: 'w1' }, { title: 'Manage ', week: 'w2' }, { title: 'Discover', week: 'w3' }, { title: 'Practice', week: 'w4' }, { title: 'Become', week: 'w5' }]}
                    />

                </View>
                <View style={styles.textBorder}>
                    <Text style={styles.text01}>VIRTUE 2</Text>
                    <Text style={styles.text02}>CURIOSITY</Text>
                </View>
                <View style={styles.textBorder}>
                    <Text style={styles.text01}>VIRTUE 3</Text>
                    <Text style={styles.text02}>COURAGE</Text>
                </View>
                <View style={styles.textBorder}>
                    <Text style={styles.text01}>VIRTUE 4</Text>
                    <Text style={styles.text02}>GRATITUDE</Text>
                </View>
                <View style={styles.textBorder}>
                    <Text style={styles.text01}>VIRTUE 5</Text>
                    <Text style={styles.text02}>COMPASSION</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", paddingVertical: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Dashboard')}
                        style={styles.buttondv}
                    >
                        <Text style={{ color: "#A3A2BA",fontFamily:fonts.OptimaRegular,fontSize:16 }}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 30 }}></View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    border: {
        backgroundColor: "#E5DFDF",
        height: 1,
        width: "36%",
        marginVertical: 10
    },
    circle: {
        backgroundColor: "red",
        width: 14,
        height: 14,
        borderRadius: 30,
        overflow: "hidden"
    },
    textBorder: {
        borderTopWidth: 1,
        borderTopColor: "#CECBD3",
        paddingVertical: 20,
        paddingLeft: "15%"
    },
    buttondv: {
        backgroundColor: "#ffffff",
        width: 150,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    text01:{
        color: "#BCBAC8", fontWeight: "bold", 
        fontSize: 14,fontFamily:fonts.regulatorBold
    },
    text02:{
        color: "#8E8CA7",
        fontSize: 24,
        fontFamily:fonts.regulatorLight ,
    }
})

