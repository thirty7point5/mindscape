import React, { useState } from 'react'
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions,Platform } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import NewmorphButton from '../../components/NewmorphButton/index'

const { height, width } = Dimensions.get('screen')
export const TourGuide = ({
    onChangeStep = (step) => {},
    modalVisible = true
}) => {
    const [step, setStep] = useState(0)
    const [visible, setvisible] = useState(modalVisible)

    const onChange = () => {
        if(step == 5) {
            setvisible(false)
        }else {
            onChangeStep(step + 1)
            setStep(step + 1)
        }
    }

    const main = () => {
        return(
            <View style={{flex: 1}}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { setvisible(false) }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> 
                        Learn how you {"\n"}
                        dashboard works
                    </Text>
                </View>

                <TouchableOpacity  onPress={() => onChange()} activeOpacity={.5} style={styles.mainneumorphBtn}>
                    <NewmorphButton backgroundColor="rgba(73, 72, 95, 0.1)"  />
                </TouchableOpacity>
            </View>
        )
    }


    const step1 = () => {
        return(
            <View style={{flex: 1}}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { setvisible(false) }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>
                <View style={styles.step1TargetContainer} /> 

                <View style={styles.step1Line} />
                <View style={{left: width* 0.09, top: 5}}>
                    <Text style={{color: "#fff"}}>
                        OBJECTIVE
                    </Text>
                    <Text style={{color: '#fff'}}>
                        Listen to your instructions for the week.
                    </Text>
                    <Text style={{color: '#E39684'}}>
                        It’s important for you to know what you {"\n"}are doing and why
                    </Text>
                </View>

                <TouchableOpacity  onPress={() => onChange()} activeOpacity={.5} style={styles.mainneumorphBtn}>
                    <NewmorphButton backgroundColor="rgba(73, 72, 95, 0.1)"  />
                </TouchableOpacity>
            </View>
        )
    }


    const step2 = () => {
        return(
            <View style={{flex: 1}}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { setvisible(false) }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>

                <View style={styles.step1TargetContainer}>
                    <View style={styles.step2round} />
                </View> 
                <View style={styles.step2Line} />

                <View style={{left: width/1.8, top:0}}>
                    <Text style={{color: "#fff"}}>
                        OBJECTIVE
                    </Text>
                    <Text style={{color: '#fff'}}>
                        Adjust, add or remove
                    </Text>
                </View>

                <TouchableOpacity  onPress={() => onChange()} activeOpacity={.5} style={styles.mainneumorphBtn}>
                    <NewmorphButton backgroundColor="rgba(73, 72, 95, 0.1)"  />
                </TouchableOpacity>

            </View>
        )
    }


    const step3 = () => {
        return(
            <View style={{flex: 1}}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { setvisible(false) }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>

                <View style={styles.step3Container}>
                    <View style={styles.step3Content}>
                        <Text style={{color: "#fff"}}>
                            TOOLBOX
                        </Text>
                        <Text style={{color: '#fff'}}>
                            All the tools you have explored
                        </Text>
                        <Text style={{color: '#E39684'}}>
                            Revisit
                        </Text>
                    </View>
                    <View style={styles.step3Line} />
                    <View style={styles.step3TargetArea}  />
                </View>

                <TouchableOpacity  onPress={() => onChange()} activeOpacity={.5} style={styles.mainneumorphBtn}>
                    <NewmorphButton backgroundColor="rgba(73, 72, 95, 0.1)"  />
                </TouchableOpacity>
            </View>
        )
    }


    const step4 = () => {
        return(
            <View style={{flex: 1}}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { setvisible(false) }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>

                <View style={styles.step4Container}>
                    <View style={styles.step4Content}>
                        <Text style={{color: "#fff"}}>
                            LIBRARY
                        </Text>
                        <Text style={{color: '#fff'}}>
                            Collection of Articles
                        </Text>
                        <Text style={{color: '#E39684'}}>
                            Read or Listen
                        </Text>
                    </View>
                    <View style={styles.step4Line} />
                    <View style={styles.step4TargetArea}  />
                </View>

                
                <TouchableOpacity  onPress={() => onChange()} activeOpacity={.5} style={[styles.mainneumorphBtn, {bottom: height * 0.4}]}>
                    <NewmorphButton backgroundColor="rgba(73, 72, 95, 0.1)"  />
                </TouchableOpacity>
            </View>
        )
    }

    const step5 = () => {
        return(
            <View style={{flex: 1}}>
                <View style={styles.crossStyle}>
                    <Feather onPress={() => { setvisible(false) }} name={'x'} size={50} color={'#A3A2BA'} />
                </View>

                <View style={styles.step5Container}>
                    <View style={styles.step5Content}>
                        <Text style={{color: "#fff"}}>
                            DASHBOARD
                        </Text>
                        <Text style={{color: '#fff'}}>
                            Dail Tasks
                        </Text>
                        <Text style={{color: '#E39684'}}>
                            Switch
                        </Text>
                    </View>
                    <View style={styles.step5Line} />
                    <View style={styles.step5TargetArea}  />
                </View>

                
                <TouchableOpacity  onPress={() => onChange()} activeOpacity={.5} style={[styles.mainneumorphBtn, {bottom: height * 0.4}]}>
                    <NewmorphButton backgroundColor="rgba(73, 72, 95, 0.1)"  />
                </TouchableOpacity>
            </View>
        )
    }



    return (
        //position: 'absolute', top: 0, bottom: 0,left: 0, right: 0
        <View style={{ }}>
            <Modal
                transparent={true}
                visible={visible}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(73, 72, 95, 0.8)' }}>
                    {step == 0 && main()}
                    {step == 1 && step1()}
                    {step == 2 && step2()}
                    {step == 3 && step3()}
                    {step == 4 && step4()}
                    {step == 5 && step5()}

                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    crossStyle: {
        width: '95%',
        marginTop: height * 0.02,
        alignItems: 'flex-end'
        // position: 'absolute'
    },
    titleContainer: {
        left: width * 0.13,
        marginTop: height * 0.15,
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24
    },
    mainneumorphBtn: {
        position: 'absolute',
        bottom: height * 0.09,
        alignSelf: 'center' ,
    },
    step1TargetContainer: {
        width: width+20,
        right: 10,
        // top: height * 0.10,
        top: Platform.OS === 'ios' ? height * 0.10:height * 0.08,
        height: height * 0.18,
        borderColor: '#fff',
        borderWidth: 1,
        borderBottomRightRadius: height * 0.08,
    },
    step1Line: {
        height: height * 0.09,
        width: 1,
        backgroundColor: '#fff',
        left: width* 0.1,
        marginTop: height * 0.07
    },
    step2round: {
        top:  Platform.OS == "ios" ? height * 0.03 : height * 0.017,
        borderWidth: 1,
        borderColor: '#fff',
        width: 45,
        height:45,
        borderRadius: 100,
        left: width/1.21,
    },
    step2Line: {
        height: height * 0.03,
        width: 1,
        backgroundColor: '#fff',
        left: Platform.OS == "ios" ? width* 0.86 : width* 0.86,
        marginTop: Platform.OS == "ios" ? height * 0.0029 : -height * 0.028
    },
    step3Container: {
        position: 'absolute', 
        bottom: (height * 0.07) + (height * 0.065) + (height * 0.122), 
        width: '100%' 
    },
    step3TargetArea : {
        borderRadius: 40, 
        borderWidth: 1, 
        borderColor: "#fff", 
        width: '80%', 
        height: height * 0.065, 
        top: (height * 0.03), 
        alignSelf: "center",
    },
    step3Line: {
        height: height * 0.06,
        width: 1,
        backgroundColor: '#fff',
        left: width* 0.2,
        top: (height * 0.03),
    },
    step3Content: {
        left: width* 0.18,
        top: (height * 0.02),
    },
    step4TargetArea : {
        borderTopWidth: 1, 
        borderTopColor: "#fff", 
        borderBottomWidth: 1, 
        borderBottomColor: "#fff", 
        width: '100%', 
        height: height * 0.07,
        top: (height * 0.01), 
        alignSelf: "center",
    },
    step4Line: {
        height: height * 0.06,
        width: 1,
        backgroundColor: '#fff',
        left: width* 0.2,
        top: (height * 0.01), 
    },
    step4Container: {
        position: 'absolute', 
        bottom: (height * 0.07) + (height * 0.065), 
        width: '100%' 
    },
    step4Content: {
        left: width* 0.18,
        top: (height * 0.01),
    },
    step5TargetArea: {
        borderWidth: 1, 
        borderColor: "#fff", 
        width: 45, 
        height: 45,
        top: (height * 0.01), 
        alignSelf: "flex-start",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
    },
    step5Container: {
        position: 'absolute', 
        bottom: (height * 0.045) , 
        width: '80%',
        alignSelf: 'center' 
    },
    step5Content: {
        left: width* 0.01,
    },
    step5Line: {
        height: height * 0.06,
        width: 1,
        backgroundColor: '#fff',
        left: width* 0.06,
        top: (height * 0.01), 
    },
})