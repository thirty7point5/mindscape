import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NewmorphButton from '../../components/NewmorphButton/index'
import LinearGradient from 'react-native-linear-gradient';
import { fonts } from '../../utils/fonts';
export const SignUp = ({ navigation }) => {
    return (
        // <View style={styles.container}>
        <LinearGradient
            colors={['#E5E4F7', '#9493AD', '#9493AD', '#9493AD','#9493AD', ]}
            start={{ x: 1, y: 0 }} end={{ x: 1, y: 1}}
            style={styles.container}>
            <View style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.helloText}>
                    Hello!
                </Text>
                <TouchableOpacity  >
                    <Text style={{ paddingBottom: 6, fontFamily: fonts.OptimaRegular}}>
                        Tap to type
                    </Text>
                </TouchableOpacity>
            </View>
            <TextInput
                placeholder="First Name"
                placeholderTextColor="#CFCFDB"
                style={styles.field}
            ></TextInput>
            <TextInput
                placeholder="Email Address"
                placeholderTextColor="#CFCFDB"
                style={styles.field}
            ></TextInput>
            <TextInput
                placeholder="Password"
                placeholderTextColor="#CFCFDB"
                style={styles.field}
            ></TextInput>
            <TextInput
                placeholder="Retype Password"
                placeholderTextColor="#CFCFDB"
                style={styles.field}

            ></TextInput>
            <View style={{ flex: 0, justifyContent: "center", alignItems: "center", top: "13%" }}>
                <NewmorphButton
                    onPress={() => navigation.navigate('OtpVerification')}
                    backgroundColor="#9493AD"
                />
            </View>
        </LinearGradient>
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
        paddingVertical: 10
    }
})