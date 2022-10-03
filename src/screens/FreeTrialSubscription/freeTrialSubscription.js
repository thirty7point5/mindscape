import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground
} from 'react-native'
import Button from '../../components/button/index'
import PaymentComponent from '../../components/PaymentComponent/index'
import { fonts } from '../../utils/fonts'

export const FreeTrialSubscription = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={{ height: '100%', width: '100%' }}
        source={require('../../assets/images/FTSImg.png')}>
        <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'light-content'} />
        <View style={styles.TextView}>
          <Text
            style={{
              color: '#fff',
              fontSize: 24,
              paddingVertical: 5,
              marginTop: 20,
              fontFamily: fonts.regulatorLight
            }}>
            7 DAY FREE TRIAL
          </Text>
          <Text style={{ color: '#fff', fontSize: 17, fontFamily: fonts.regulatorDemiBold }}>
            SUBSCRIPTION OPTIONS
          </Text>
        </View>

        <PaymentComponent
          title="MONTHLY"
          description="1 Week Complimentary"
          payment="AED 37.5"
        />

        <PaymentComponent
          title="PROGRAM"
          description="Most Popular"
          payment="AED 150"
        />

        <View style={styles.ButtonView}>
          <Button
            onPress={() => navigation.navigate('HomeWelcome')}
            title="Start my 7-day free trial"
            buttonStyle={{
              height: 26,
              width: 235,
              borderWidth: 0,
              backgroundColor: 'rgba(229, 228, 247, .35)',
              marginTop: 25
            }}
            textStyle={{ fontSize: 16, color: 'rgba(255, 255, 255, 1)', fontFamily: fonts.regulatorDemiBold }}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#9493AD'
  },
  TextView: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'rgba(255, 255, 255, .3)',
    borderBottomWidth: 1
  },
  ButtonView: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
