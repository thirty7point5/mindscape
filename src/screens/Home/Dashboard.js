import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import Icon from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Header from '../../components/Header/index';
import Bottom from '../../components/Bottom/index'
import { ProgressSteps } from '../../components/ProgressSteps';
import { MindfullnessData } from './DashboardScreens/MindfullnessData';
import { CuriosityData } from './DashboardScreens/CuriosityData';
import { TourGuide } from '../../components/TourGuide';
import { fonts } from '../../utils/fonts'
export const Dashboard = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('')
    const [step, setStep] = useState(0)

    return (
        <LinearGradient
            colors={activeTab == 0 ? ['#9695AF', '#9695AF',] : ['#2469A4', '#706F93']}
            // start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
            style={{
                flex: 1
            }}>

            <TourGuide onChangeStep={(step => setStep(step))} />
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <Header onChangeTab={(e) => { setActiveTab(e) }} />
            {
                activeTab == 0 ? <MindfullnessData step={step} navigation={navigation} /> : activeTab == 1 ? <CuriosityData /> : null
            }
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    curveViewStyle: {
        // height: 120,
        backgroundColor: '#B1B1C7'
    },
    curveViewStyle2: {
        height: height * 0.17,
        backgroundColor: '#9695AF',
        // elevation: 5,
        borderBottomRightRadius: height * 0.09,
        alignItems: 'center',
        justifyContent: 'center',

    },
    rowViewStyle1: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: height * 0.024,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dailyTextStyle: {
        fontSize: 26,
        fontFamily: 'Regulator Nova Medium',
        color: '#FFFFFF'
    },
    linearCircleViewStyle1: {
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    barViewStyle: {
        width: '75%',
        alignSelf: 'center',
        height: 2,
        backgroundColor: '#fff',
        // marginTop: 10
        marginVertical: 10
    },
    barIconViewStyle: {
        width: '50%',
        alignSelf: 'center'
    }
})
