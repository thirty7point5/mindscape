import React, { useState,useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, Image, StatusBar, FlatList, ScrollView, Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CircleButton from '../../components/circleButton/index'
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('screen')
import Modal from 'react-native-modal';
import { fonts } from '../../utils/fonts'
export const Dashboard1 = ({ navigation }) => {
    const [reason, setReason] = useState([{ title: "01", },
    { title: "02", },
    { title: "03", },
    { title: "04", },
    { title: "05", },
    { title: "06", },
    { title: "07", }
    ])
    const [loop, setLoop] = useState([
        {
            image: require('../../assets/images/drink.png')
        },
        {
            image: require('../../assets/images/drink.png')
        },
        {
            image: require('../../assets/images/drink.png')
        },
        {
            image: require('../../assets/images/drink.png')
        },
        {
            image: require('../../assets/images/drink.png')
        },
        {
            image: require('../../assets/images/drink.png')
        }
    ])
    const [tick, setTick] = useState()
    const [tick2, setTick2] = useState()
    const [tick3, setTick3] = useState()
    const [drink, setDrink] = useState()
    const [modalVisible, setModalVisible] = useState(false);
    const [changeImage, setChangeImage] = useState ()
    console.log(modalVisible)
    useEffect(() => {
        setTimeout(() => {
            require('../../assets/images/logo01.png')
        }, 2000);
      }, []);

      const doubleCall = () => {
        setChangeImage(!changeImage);
        require('../../assets/images/logo01.png')
    }
    return (
        <LinearGradient style={styles.container}
        colors={['#707091', '#A1A0B9']}
         >
            <StatusBar hidden={true} />
            {/* <ImageBackground
                style={{ height: '100%', width: '100%' }}
                source={require('../../assets/images/bg.png')}> */}

            <ScrollView style={{ flex: 1.2, paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                <View style={{ paddingTop: 20 }}>
                    <Text style={{ textAlign: "center", color: "#fff", paddingVertical: 20,fontFamily:fonts.regulatorLight,fontSize:16 }}>
                        HEY DANIEL
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <Image style={styles.plus} source={require('../../assets/images/plusCircle.png')} />
                            <View style={{ marginLeft: 15 }}>
                                <CircleButton
                                onPress={() => navigation.navigate('PYT1')}
                                    backgroundColor={"transparent"}
                                />
                            </View>
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: "#575672", fontWeight: "bold", fontSize: 12,fontFamily:fonts.regulatorBold }}>THINK</Text>
                            <Text style={styles.stay}>Picture Your</Text>
                            <Text style={styles.connect}>Connect with your emotions</Text>
                            <TouchableOpacity
                                onPress={() => setTick(!tick)}
                                activeOpacity={0.9}
                                style={styles.circle} >
                                {tick ? <Image source={require('../../assets/images/path02.png')} />
                                    : <Image source={require('../../assets/images/path01.png')} />}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ color: "#575672", fontWeight: "bold", fontSize: 12,fontFamily:fonts.regulatorBold }}>NOURISH</Text>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('NotificationScreen1')}
                    >
                    <Text style={styles.stay}>Stay hydrated & stay focused</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 20 }}>
                        {
                            loop.map((item, i) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={() => setDrink(i)}
                                        key={i}
                                    >
                                        {drink >= i ? <Image
                                            style={{ tintColor: "#fff" }}
                                            source={item.image}
                                        /> :
                                            <Image
                                                // style={{tintColor:"red"}}
                                                source={item.image}
                                            />
                                        }
                                    </TouchableOpacity>
                                )

                            })
                        }
                        <Text style={styles.tap}>Tap to fill</Text>
                        <View style={styles.smallCircle}>
                            <Image style={{ marginLeft: 2 }} source={require('../../assets/images/que.png')} />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => setTick2(!tick2)}
                        activeOpacity={0.9}
                        style={styles.circle} >
                        {tick2 ? <Image source={require('../../assets/images/path02.png')} />
                            : <Image source={require('../../assets/images/path01.png')} />}
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <Image style={styles.plus} source={require('../../assets/images/plusCircle.png')} />
                            <View style={{ marginLeft: 15 }}>
                                <CircleButton
                                    backgroundColor={"transparent"}
                                    imgPath={require('../../assets/images/circleRound.png')}
                                />
                            </View>
                        </View>
                        <View style={{ paddingLeft: 10 }}>
                            <Text style={{ color: "#575672", fontWeight: "bold", fontSize: 12 }}>flex</Text>
                            <Text style={styles.stay}>Take a deep breathe</Text>
                            <Text style={styles.connect}>Reenergize & refocus in{'\n'}
                                180 seconds</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => setTick3(!tick3)}
                        activeOpacity={0.9}
                        style={styles.circle} >
                        {tick3 ? <Image source={require('../../assets/images/path02.png')} />
                            : <Image source={require('../../assets/images/path01.png')} />}
                    </TouchableOpacity>
                </View>
            </ScrollView>         
            <ImageBackground
                style={{ height: 398, width: '100%', flex: 0.9,}}
                source={require('../../assets/images/bgShadow3.png')}
            >
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ paddingTop: "20%" }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", top: 20, }}>
                            <TouchableOpacity
                                style={{ top: 16 }}
                                activeOpacity={0.9}
                                onPress={() => navigation.navigate('Breathing')}
                            >
                                <Image source={require('../../assets/images/hp.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => setModalVisible(true)}
                            >
                                <Image source={require('../../assets/images/small.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => doubleCall()}
                            >
                                <Image source={require('../../assets/images/exclaim.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ top: 16 }}
                                activeOpacity={0.9}
                                onPress={()=>navigation.navigate('MorningMessage')}
                            >
                                <Image source={require('../../assets/images/chand.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.june}>30 june 2021</Text>
                        <View style={{ width: "38%", alignSelf: "center" }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", paddingVertical: 10 }}>
                                <View>
                                <Image style={{ top: 14, right: 10 }} source={require('../../assets/images/leftArrow.png')} />
                                </View>
                                <View>
                                <FlatList
                                // style={{width:"100%"}}
                                    keyExtractor={(item, index) => index}
                                    horizontal={true}
                                    data={reason}
                                    showsHorizontalScrollIndicator={false}
                                    // onViewableItemsChanged={onViewRef.current}
                                    // viewabilityConfig={viewConfigRef.current}
                                    pagingEnabled
                                    renderItem={({ item }) => {
                                        return (
                                            <View>
                                                <Text style={styles.tittle}>{item.title}</Text>

                                            </View>
                                        )
                                    }}>
                                </FlatList>
                                </View>
                                <View>
                                <Image style={{ top: 14,left:8 }} source={require('../../assets/images/rightArrow.png')} />
                                </View>
                                
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Image source={require('../../assets/images/dashboardIcon.png')} />
                            <View>
                                <Text style={{ fontSize: 18, color: "#626178", textAlign: "center",fontFamily:fonts.regulatorLight }}>LEVEL 01</Text>
                                <Text style={{ fontSize: 18, color: "#626178", textAlign: "center",fontFamily:fonts.regulatorLight }}>MINDFULNESS</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.9}
                            >
                                <Image source={require('../../assets/images/menuIcon.png')} />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ImageBackground>
            {/* </ImageBackground> */}
            <Modal
                animationIn="zoomIn"
                animationOut="zoomOut"
                backdropColor="#717192"
                animationInTiming={600}
                animationOutTiming={600}
                transparent={true}
                isVisible={modalVisible}
                onBackButtonPress={() => setModalVisible(!modalVisible)}
                onBackdropPress={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={{ alignSelf: "flex-end",marginRight:10 }}
                        activeOpacity={0.9}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Image source={require('../../assets/images/cancel.png')} />
                    </TouchableOpacity>
                    <LinearGradient
                        colors={['#D5D5DF', '#9493AD']}
                        style={styles.LinearGradient}>
                        <Image style={{ width: 25, height: 50, transform: [{ rotate: '12deg' }] }} source={require('../../assets/images/small.png')} />
                        <Text style={styles.modalText}>Hydrating {'\n'}
                            Mindfully</Text>
                        <Text style={styles.modalText1}>Hydration improves sleep quality, cognition, and mood</Text>
                        <Text style={styles.modalText1}>Scientific research has shown that drinking half a litres of water every hour increases your energy, enhances focus, and boosts your metabolism.
                        </Text>
                        <Text style={styles.modalText1}>Here each bottle represents half litres, Goal of this activity is to log at least four bottles a day.</Text>
                        <Text style={styles.modalText1}>Grab your bottle and put your kidneys to work.</Text>
                        <Text style={styles.modalText2}>Tap to fill</Text>
                    </LinearGradient>
                </View>
            </Modal>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    plus: {
        position: "absolute",
        zIndex: 20,
        right: "65%"
    },
    circle: {
        // width: 19,
        // height: 19,
        // borderWidth: 1,
        // borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#797994",
        alignSelf: "flex-end",
        marginTop: 10,
    },
    circle0: {
        width: 19,
        height: 19,
        borderWidth: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#49485F",
        alignSelf: "flex-end",
        marginTop: 10,
    },
    circle2: {
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center"
    },
    circle3: {
        width: 19,
        height: 19,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#797994",
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center"
        // marginTop: 10,
    },
    tap: {
        paddingTop: 10,
        color: "#FFAE9B",
        fontSize: 13,
        fontWeight: "bold"
    },
    stay: {
        color: "#fff",
        fontSize: 22,
        fontFamily:fonts.regulatorLight
    },
    connect:{
        paddingTop: 18, color: "#FFAE9B", 
        fontWeight: "bold", fontSize: 13,
        fontFamily:fonts.OptimaBold
    },
    smallCircle: {
        width: 17,
        height: 17,
        borderRadius: 40,
        borderColor: "#706F93",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12
    },
    june: {
        textAlign: "center",
        top: "17%",
        fontSize: 12,
        color: "#49485F"
    },
    tittle: {
        fontSize: 84,
        color: "#fff",
        top: 14,
        paddingHorizontal:10,
        // fontFamily:fonts.regulatorThin,
        fontWeight:"bold"
    },
    modalView: {
        // backgroundColor: 'transparent',
        // backgroundColor:"#70709290",
        // borderRadius: 15,
        // paddingTop: "4%",
    },
    LinearGradient: {
        width: '100%', 
        height: height * 0.8, 
        borderRadius: (height * 0.8) / 2,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        opacity: 0.8,
        paddingHorizontal: 20,

    },
    modalText: {
        paddingVertical: 10,
        color: "#706F93",
        fontSize: 24,
        fontFamily:fonts.OptimaRegular,
        textAlign: 'center'
    },
    modalText1: {
        paddingVertical: 10,
        textAlign: "center",
        color: "#706F93",
        fontSize: 16,
        fontFamily:fonts.regulatorMedium,
        width: '80%'
    },
    modalText2: {
        color: "#49485F",
        fontSize: 13,
        fontWeight: "bold",
        fontFamily:fonts.OptimaBold,
        top: '5%'
    }
})
 