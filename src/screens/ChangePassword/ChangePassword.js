import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity } from 'react-native'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '../../utils/fonts';

export const ChangePassword = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/images/LogIn.png')}
            style={styles.container}>

            <View style={{
                height: '30%',
                // backgroundColor: 'red',
                // alignItems: 'center',
                justifyContent: 'flex-end',
                marginBottom: 20
            }}>


                <View style={{ alignItems: "center", marginBottom: 30 }}>
                    <Text style={styles.helloText}>
                        Change Password
                    </Text>

                </View>

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#CFCFDB"
                    style={styles.field}
                ></TextInput>
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor="#CFCFDB"
                    style={styles.field}
                ></TextInput>



            </View>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: '30%' }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('Login')}
                    backgroundColor="#9493AD"
                />
            </View>


        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent:
            "center",
        backgroundColor: "#9493AD",
    },
    helloText: {
        paddingBottom: "18%",
        color: "#fff",
        fontSize: 17,
        fontFamily: 'Regulator Nova Medium'
    },
    field: {
        borderBottomWidth: 1,
        textAlign: "center",
        borderBottomColor: "#CCCBD8",
        fontSize: 22,
        fontFamily: fonts.regulatorLight,
        paddingVertical: 10,
        // marginBottom:20
    }
})