import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ToggleButton from '../../components/ToggleButton/index'
import DateTimePicker from '@react-native-community/datetimepicker';
const { width, height } = Dimensions.get('screen')


export const Preference = ({ navigation }) => {
    const showTimepicker = () => {
        showMode('time');
    };
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');

        let time = currentDate.toString().substring(16, 21)
        setCurrentTime(time)
        setCurrentTime2(time)
        setCurrentTime3(time)
        setDate(date);

        // switch () {
        //     case 'wakeUp':
        // }
    };
    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('time');
    const [currentTime, setCurrentTime] = useState('')
    const [currentTime2, setCurrentTime2] = useState('')
    const [currentTime3, setCurrentTime3] = useState('')
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const onSelectSwitch = index => {
        // alert(index === 1 ? 'Switch Off' : 'Switch On')
    }

    const Data = [
        {
            Question: 'What time do you wake up?',
            time: '07:00'
        },
        {
            Question: 'Need a reminder around mid-day',
            time: '12:00'
        },
        {
            Question: 'A reminder in the evening is a game changer. Try it',
            time: '19:00'
        },
    ]
    return (
        <LinearGradient
            colors={['#47465D', '#47465D',]}
            // start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
            style={{
                flex: 1
            }}>
            <StatusBar backgroundColor={'transparent'} translucent={true} />
            <ScrollView
                showsVerticalScrollIndicator={false}

                contentContainerStyle={{
                    flexGrow: 1
                }}
            >
                <View
                    style={styles.crossViewStyle}
                    activeOpacity={0.7}

                >
                    <Icon name="close" size={40} color="#8C8BA5" onPress={() => {
                        navigation.goBack()
                    }} />
                </View>
                <View
                    style={styles.preferenceViewStyle}

                >
                    <Text
                        style={styles.preferenceTextStyle}

                    >PREFERENCES</Text>

                </View>
                <View

                    style={styles.rowViewStyle1}

                >
                    <Text
                        style={styles.dailyTextStyle}

                    >
                        DAILY REMINDERS
                    </Text>
                    <LinearGradient
                        colors={['#D99888', '#F8EAE7',]}
                        start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }}
                        style={styles.linearCircleViewStyle1}

                    >
                        <Image source={require('../../assets/images/group-245.png')} style={{ width: 15.83, height: 17.28 }} />
                    </LinearGradient>
                </View>
                <View
                    style={styles.simpleTextViewStyle1}

                >
                    <Text
                        style={styles.simpleTextStyle1}>
                        Your commitment to yourself is important to us
                    </Text>
                </View>


                {
                    Data.map((item, i) => {
                        return (
                            <View
                                key={i}
                                style={styles.mapMainViewStyle}

                            >
                                <Text
                                    style={styles.questionTextStyle}

                                >
                                    {item.Question}
                                </Text>

                                <View
                                    style={styles.timerMainViewStyle}

                                >
                                    <TouchableOpacity
                                        onPress={showTimepicker}
                                        activeOpacity={0.7}

                                        style={styles.timeIconMainViewStyle}

                                    >
                                        <Text
                                            style={styles.timeTextStyle}

                                        >
                                            {item.time}
                                        </Text>
                                        <Entypo name="chevron-thin-down" size={15} color="#fff" style={{ paddingLeft: 5 }} />
                                    </TouchableOpacity>
                                    {show && (
                                        <DateTimePicker
                                            //   timeZoneOffsetInMinutes={0}
                                            testID="dateTimePicker"
                                            value={date}
                                            mode={mode}
                                            is24Hour={true}
                                            display="default"
                                            onChange={onChange}
                                        />
                                    )}
                                    <ToggleButton selectionMode={2} onSelectSwitch={onSelectSwitch} />
                                </View>
                            </View>
                        )
                    })
                }



                <View
                    style={styles.rowViewStyle1}

                >
                    <Text
                        style={styles.remainderTextStyle}

                    >
                        Add a reminder
                    </Text>
                    <TouchableOpacity activeOpacity={0.8}>

                        <Image source={require('../../assets/images/circleplus.png')} style={{ width: 28, height: 31 }} />

                    </TouchableOpacity>
                    {/* <LinearGradient
                        colors={['#C39290', '#8C8BA5',]}
                        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                        style={styles.linearCircleViewStyle1}

                    >
                        <AntDesign name="plus" size={15} color="#fff" />

                    </LinearGradient> */}
                </View>

                <View

                    style={styles.borderViewStyle}

                >

                </View>


                <View
                    style={styles.rowViewStyle1}

                >
                    <Text
                        style={styles.musicStyleText}

                    >
                        BACKGROUND MUSIC
                    </Text>
                    <ToggleButton selectionMode={2} onSelectSwitch={onSelectSwitch} />

                </View>
                <View

                    style={styles.simpleTextViewStyle1}

                >
                    <Text
                        style={styles.lastTextStyle}

                    >
                        Our beats are designed to {'\n'}encourage relaxation, {'\n'}promote positivity.
                    </Text>

                </View>

            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    crossViewStyle: {
        width: '90%',
        alignSelf: 'center', justifyContent: 'center',
        alignItems: 'flex-end',
        height: height * 0.12,
    },
    preferenceViewStyle: {
        width: '70%',
        alignSelf: 'center',
        // backgroundColor: 'red',
        marginTop: 10

        // height: 200
    },
    preferenceTextStyle: {
        fontSize: 24,
        fontFamily: 'Regulator Nova Medium',
        color: '#8C8BA5'
    },
    rowViewStyle1: {
        width: '70%',
        alignSelf: 'center',
        marginVertical: height * 0.024,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dailyTextStyle: {
        fontSize: 18,
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
    simpleTextViewStyle1: {
        width: '70%',
        alignSelf: 'center'
    },
    simpleTextStyle1: {
        fontSize: 22,
        fontFamily: 'Regulator Nova Medium',
        color: '#D99888'
    },
    mapMainViewStyle: {
        width: '70%',
        alignSelf: 'center',
        marginVertical: 15
    },
    questionTextStyle: {
        fontSize: 16,
        fontFamily: 'Optima-Regular',
        color: '#FFFFFF'
    },
    timerMainViewStyle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timeIconMainViewStyle: {
        width: 80,
        height: 22,
        borderRadius: 11,
        backgroundColor: '#2F2F40',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeTextStyle: {
        fontSize: 16,
        fontFamily: 'Regulator Nova Medium',
        color: '#fff'
    },
    remainderTextStyle: {
        fontSize: 16,
        fontFamily: 'Optima-Regular',
        color: '#FFFFFF'
    },
    borderViewStyle: {
        width: '55%',
        marginRight: height * 0.06,
        alignSelf: 'center',
        borderBottomWidth: 0.8,
        borderColor: '#282836',
    },
    musicStyleText: {
        fontSize: 18,
        fontFamily: 'Regulator Nova Medium',
        color: '#FFFF'
    },
    lastTextStyle: {
        fontSize: 22,
        fontFamily: 'Optima-Regular',
        color: '#D99888',
        marginBottom: 50
    }
})
