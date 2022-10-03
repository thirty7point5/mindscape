import React from 'react'
import { View, Text, StyleSheet, TextInput,Dimensions, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
// import PersonaSVG from '../../assets/images/Name.svg'
import SetNameSvg from '../../assets/SVG/setNameSVG'
import { fonts } from '../../utils/fonts'
export const HomeSetName = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SetNameSvg
                // width={"100%"}
                // width={Dimensions.get('screen').width}
                // height={Dimensions.get('screen').height}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    //  top: 0,
                    //  right: 0,
                    //  left: 0

                }}
            />
            <View style={{ flex: 2, justifyContent: "center", paddingTop: "30%",paddingLeft:20, overflow: 'hidden' }}>
                <Text style={{fontFamily: fonts.OptimaRegular}}>
                    So Daniel,
                </Text>
                <Text style={{fontFamily: fonts.OptimaRegular}}>What do your friends call you?</Text>
                <TextInput
                    placeholder="Nick Name"
                    placeholderTextColor="#9493AD"
                    style={styles.field}
                ></TextInput>
                <Text numberOfLines={1} ellipsizeMode="clip" style={{color: "#9493AD", top: -15, paddingVertical: Platform.OS == "ios" ? 10 : 0}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
            </View>
            <View style={{ flex: 0.5, alignItems: "center", }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('HomeSetCountry')}
                    backgroundColor= {Platform.OS === 'ios' ? "#A4A3BC": "transparent"}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        // backgroundColor: "#9493AD",
        paddingHorizontal: "15%"
    },
    field: {
        // borderLeftColor: "red",
        // borderWidth: 1,
        // borderBottomWidth: 1,
        borderRadius: 1,
        borderBottomColor: "#000",
        // borderStyle:"dashed",
        fontSize: 22,
        fontFamily: fonts.regulatorLight
    }
})