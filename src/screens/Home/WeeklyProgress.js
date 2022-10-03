import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet, StatusBar, ImageBackground, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Bottom from '../../components/Bottom/index'
// import WeeklyProgressSvg from '../../assets/SVG/WeeklyProgressSvg'
const { width, height } = Dimensions.get('screen')
export const WeeklyProgress = ({ navigation }) => {
    const [think, setThink] = useState([
        { image: require('../../assets/images/path02.png') },
        { image: require('../../assets/images/path02.png') },
        { image: require('../../assets/images/path02.png') },
        { image: require('../../assets/images/path02.png') },
        { image: require('../../assets/images/path02.png') },
        { image: require('../../assets/images/round.png') },
        { image: require('../../assets/images/round.png') },
    ])
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground
                style={{ height: '100%', width: '100%' }}
                source={require('../../assets/images/WeeklyProgress.png')}
            >
                <ScrollView>
                <View style={styles.btns}>
                    <TouchableOpacity
                        style={styles.btn}
                    >
                        <Text style={{ fontSize: 16, color: "#FFFFFF",fontFamily:'Regulator Nova' }}>MINDFULNESS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circle}></TouchableOpacity>
                    <TouchableOpacity style={styles.circle1}></TouchableOpacity>
                    <TouchableOpacity style={styles.circle1}></TouchableOpacity>
                    <TouchableOpacity style={styles.circle1}></TouchableOpacity>
                    <TouchableOpacity style={styles.circle1}></TouchableOpacity>
                </View>
                <View style={styles.div}>
                    <Text style={styles.text0}>Week 1: Progress</Text>
                    <Text style={styles.text1}>Progress is measured by your participation and level of commitment</Text>
                    <View style={styles.row1}>
                        <View style={{flex:1}}>
                        <View></View>
                        </View>
                        <View style={{flex:2,flexDirection:"row",justifyContent:"space-around"}}>
                        <Text>1</Text>
                        <Text>2</Text>
                        <Text>3</Text>
                        <Text>4</Text>
                        <Text>5</Text>
                        <Text>6</Text>
                        <Text>7</Text>
                        </View>
                    </View>
                    <View style={styles.think}>
                        <View style={{flex:1}}>
                        <Text style={styles.text2}>THINK</Text>
                        </View>
                        <View style={{flex:2,flexDirection:"row",justifyContent:"space-around"}}>
                        {think.map((item, i) => {
                            return (
                                <TouchableOpacity key={i}>
                                    <Image
                                        // style={{tintColor:"red"}}
                                        source={item.image}
                                    />
                                </TouchableOpacity>
                            )
                        })
                        }
                        </View>
                    </View>
                    <View style={styles.think}>
                        <View style={{flex:1}}>
                        <Text style={styles.text2}>NOURISH</Text>
                        </View>
                        <View style={{flex:2,flexDirection:"row",justifyContent:"space-around"}}>
                        {think.map((item, i) => {
                            return (
                                <TouchableOpacity key={i}>
                                    <Image
                                        // style={{tintColor:"red"}}
                                        source={item.image}
                                    />
                                </TouchableOpacity>
                            )
                        })
                        }
                        </View>
                    </View>
                    <View style={styles.think}>
                        <View style={{flex:1}}>
                        <Text style={styles.text2}>FLEX</Text>
                        </View>
                        <View style={{flex:2,flexDirection:"row",justifyContent:"space-around"}}>
                        {think.map((item, i) => {
                            return (
                                <TouchableOpacity key={i}>
                                    <Image
                                        // style={{tintColor:"red"}}
                                        source={item.image}
                                    />
                                </TouchableOpacity>
                            )
                        })
                        }
                        </View>
                    </View>
                    <View style={{paddingVertical:18,justifyContent:"center",alignItems:"center"}}>
                        <Text style={styles.text3}>70%</Text>
                        <Text style={styles.text5}>COMMITMENT</Text>
                    </View>
                    <View>
                        <View style={styles.summary}>
                            <Text style={styles.textSum}>SUMMARY</Text>
                            <Image source={require('../../assets/images/total.png')} />
                        </View>
                        <Text style={styles.text4}>Well done! You mindfully connected with your thoughts, hydrated, and completed most of your stretching. Let us aim to stretch more next week! </Text>
                        <View style={styles.border}></View>
                        <Text style={styles.text4}>Check your email for the detailed report. </Text>
                        <View style={{paddingVertical:20,justifyContent:"center",alignItems:"center"}}>
                            <TouchableOpacity 
                            style={styles.continueBtn}
                            activeOpacity ={0.9}
                            onPress={() => navigation.navigate('WeeklyProgress2')}
                            >
                                <Text style={styles.continueText}>CONTINUE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </ScrollView>
                <View>
                    <Bottom 
                    bottomColor={"treansparent"}
                    borderColor = {"#EFEFEF"}
                    iconText = {'07'}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        borderColor: "#FFFFFF",
        borderRadius: 20,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 4
    },
    btns: {
        flexDirection: "row",
        paddingTop: "10%",
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
        alignItems: "center"
    },
    circle: {
        backgroundColor: "#FC7400",
        width: 14,
        height: 14,
        borderRadius: 20
    },
    circle1: {
        width: 14,
        height: 14,
        borderRadius: 20,
        borderColor: "#FC7400",
        borderWidth: 1
    },
    div: {
        paddingHorizontal: 25
    },
    text1: {
        borderBottomWidth: 1,
        borderBottomColor: "#FFFFFF",
        color: "#6B6B8D",
        fontSize: 16,
        lineHeight: 22,
        marginLeft: 15,
        paddingVertical: 6,
        fontFamily:'Optima'
    },
    text0: {
        paddingVertical: 6,
        paddingLeft: 20,
        fontFamily:'Regulator Nova',
        color:"#FFFFFF",
        fontSize:30
    },
    row1: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical:6,
        marginTop:10
    },
    think:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingVertical:6
    },
    text2:{
        color:"#838297",
        fontSize:14,
        fontWeight:"bold",
        paddingHorizontal:10,
        fontFamily:'Regulator Nova'
    },
    text3:{
        fontWeight:"bold",
        fontSize:80,
        color:"#575672",
        fontFamily: 'Optima',
    },
    summary:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:6
    },
    border:{
        backgroundColor:"#6B6B8D",
        height:1,
        width:"80%",
        marginVertical:10
    },
    text4:{
        color:"#6B6B8D",
        fontSize:16,
        fontFamily: 'Optima',
    },
    text5:{
        fontSize:14,
        fontWeight:"300",
        color:"#6B6B8D",
        fontFamily:'Regulator Nova'
    },
    textSum:{
        color:"#575672",
        fontFamily:'Regulator Nova',
        fontSize:14,
        fontWeight:"300",
    },
    continueBtn:{
        backgroundColor:"#F4F0EF",
        paddingVertical:6,
        paddingHorizontal:"10%",
        borderRadius:20,
        marginBottom:10
    },
    continueText:{
        fontSize:16,
        fontFamily: 'Optima',
        color:"#A3A2BA"
    }
})
