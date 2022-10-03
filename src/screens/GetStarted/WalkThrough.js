import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { WalkThroughComponent } from '../../components/Walkthrough'

export const WalkThrough = ({navigation}) => {
    return (
// <<<<<<< HEAD
        <View style={styles.mainContainer}>


        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Text>
                WalkThroug page
            </Text> */}
            {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>
                    NEXT PAGE
                </Text>
            </TouchableOpacity> */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <WalkThroughComponent />
        </View>

            <WalkThroughComponent navigation={navigation} />
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',  
    },
})