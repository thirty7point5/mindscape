import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, Switch } from 'react-native'
import ToggleButton from '../../components/ToggleButton/index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

export const EmailVerification = ({ navigation }) => {
  const onSelectSwitch = index => {
      // alert(index === 1 ? 'close' : 'open') ;
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity  onPress={() => navigation.navigate('AccountSetting')}>
            <Text>Next page</Text>
        </TouchableOpacity>
      <View style={{ alignItems: 'center', margin: 20 }}>
 
         <ToggleButton
          selectionMode={2}
          onSelectSwitch={onSelectSwitch}
        />      
         <ToggleButton
          selectionMode={2}
          onSelectSwitch={onSelectSwitch}
        /> 
         <ToggleButton
          selectionMode={1}
          onSelectSwitch={onSelectSwitch}
        />   

      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
