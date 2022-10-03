import React, { useState } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import Button from '../../components/button/index'
import { fonts } from '../../utils/fonts'

export const AccountSecure = ({ navigation }) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={styles.TextView}>
          <Text
            style={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 24,
              textAlign: 'center',
              fontFamily: fonts.regulatorLight
            }}>
            KEEP YOUR {'\n'}ACCOUNT SECURE
          </Text>
        </View>
        <View style={styles.EmptyView} />
        <View style={styles.ButtonView}>
          <Button
            // onPress={() => navigation.navigate('FreeTrialSubscription')}
            title="YES, PROTECT WITH FACE ID"
            buttonStyle={{
              height: 26,
              width: 250,
              backgroundColor: 'rgba(229, 228, 247, .35)',
              marginVertical: 15
            }}
            textStyle={{ fontSize: 16, color: 'rgba(255, 255, 255, 1)', fontFamily: fonts.regulatorDemiBold }}
          />
          <Button
            onPress={() => navigation.navigate('FreeTrialSubscription')}
            title="May be later"
            buttonStyle={{
              height: 26,
              width: 250,
              borderColor: 'rgba(255, 255, 255, 1)',
            }}
            textStyle={{ fontSize: 16, color: 'rgba(255, 255, 255, 1)', fontFamily: fonts.regulatorDemiBold }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#9493AD'
  },
  TextView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  EmptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
