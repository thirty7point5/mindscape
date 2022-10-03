import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Image,Platform, Dimensions, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
import DateTimePicker from '@react-native-community/datetimepicker';
import PersonaSVG from '../../assets/SVG/personaSvg';
import { fonts } from '../../utils/fonts'

export const HomeRoutine = ({ navigation }) => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('time');
    const [currentTime, setCurrentTime]=useState('')
    const [currentTime2, setCurrentTime2]=useState('')
    const [currentTime3, setCurrentTime3]=useState('')
    const [type, setType]=useState('')


    const showTimepicker = (type) => {
        showMode('time');
        setType(type)
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        let time=currentDate.toString().substring(16,21)
        switch (type) {
            case 'wakeup':
                setCurrentTime(time)
                break;
            case 'afternoon':
                setCurrentTime2(time)
                break;
            case 'dinner':
                setCurrentTime3(time)
                break;
            default:
                break;
        }
        setDate(date);
      };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
      
    return (
        <View style={styles.container}>
                      <PersonaSVG 
                        // height={Dimensions.get('screen').height}
                        // width={Dimensions.get('screen').height}
                        style={{
                            position: 'absolute',
                            bottom: 0,

                        }}
                />
            <View style={{ flex: 3, justifyContent: "center", paddingTop: "0%", }}>
                <StatusBar hidden={true} />
                <Text style={styles.text01}>
                    COMMITMENT
                </Text>
                <Text style={{ color: "#D1CDD4", fontSize: 24, paddingVertical: 10,fontFamily:fonts.regulatorLight }}>Lets align with your routine</Text>
                <View style={styles.border}></View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.text02}>What time do you wake up?</Text>
                    <TouchableOpacity
                        onPress={() => {showTimepicker('wakeup')}}
                        style={styles.buttondv}>
                        <Text style={{ color: "#fff" }}>{    currentTime ? currentTime :'07:00'}</Text>
                        <Image style={{ marginTop: 6 }} source={require('../../assets/images/ComponentArrow.png')} />
                    </TouchableOpacity>

                </View>
                <View style={styles.border}></View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.text02} >Least busy hour in the afternoon?</Text>
                    <TouchableOpacity
                        onPress={() => {showTimepicker('afternoon')}}
                        style={styles.buttondv}>
                    <Text style={{ color: "#fff" }}>{    currentTime2 ? currentTime2 :'07:00'}</Text>
                        <Image style={{ marginTop: 6 }} source={require('../../assets/images/ComponentArrow.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.border}></View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={styles.text02}>What time do you have dinner</Text>
                    <TouchableOpacity
                        onPress={() => {showTimepicker('dinner')}}
                        style={styles.buttondv}>
                        <Text style={{ color: "#fff",fontFamily:fonts.regulatorLight,fontSize:16 }}>{    currentTime3 ? currentTime3 :'07:00'}</Text>
                        <Image style={{ marginTop: 6 }} source={require('../../assets/images/ComponentArrow.png')} />
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
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('HomeCommitment')}
                    backgroundColor={Platform.OS === 'ios' ? "#DBD6DA" : "transparent"}
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
        paddingHorizontal: "15%"
    },
    button:{
        backgroundColor:"#2F2F40",
        flexDirection:"row",
        justifyContent:"space-between",
        borderRadius:20,
        paddingHorizontal:10,
        marginTop:"15%",
        width:"80%",
        height:20
    },
    border:{
        backgroundColor:"#fff",
        width:"45%",
        height:0.5
    },
    buttondv: {
        backgroundColor:"#9493AD",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%",
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 20,
    },
    text01:{
        textAlign: "center", 
        paddingBottom: 20, 
        color: "#B6B4C5" ,
        fontSize:16,
        fontFamily: fonts.OptimaRegular
    },
    text02:{
        paddingVertical: 6,
        fontFamily: fonts.OptimaRegular,
        fontSize:16
    }
})