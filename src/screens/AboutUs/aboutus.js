import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView
} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { fonts } from '../../utils/fonts'

export const AboutUs = ({ navigation }) => {
  return (
    <> 
      <ScrollView bounces={false} contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
        <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'light-content'}/>
        <ImageBackground
          style={{ height: 450, width: '100%' }}
          source={require('../../assets/images/aboutUsImg.png')}>
          <View style={styles.topCutButton}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}>
              <Icon name="close" size={40} color="#8C8BA5" />
            </TouchableOpacity>
          </View>
          <View style={styles.logoStyle}>
            <Image
              source={require('../../assets/images/logo-37.5.png')}
              style={{ height: 27, width: 168, tintColor: '#fff' }}
            />
          </View>
        </ImageBackground>
        <View style={styles.TextSectionContainer}>
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                textAlign: 'center',
                // letterSpacing:2,
                padding: 50,
                fontFamily: fonts.regulatorLight
              }}>
              ThirtySevenPointFive is an ideology-driven initiative dedicated to
              providing solutions to address a large spectrum of issues
              concerning Contemporary {'\n'}Wellbeing.
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#49485F',
                fontSize: 16,
                textAlign: 'center',
                paddingBottom: 50,
                fontFamily: fonts.OptimaRegular
              }}>
              Scroll to explore
            </Text>
          </View>
        </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#A1A0B9'
  },
  topCutButton:{
    alignItems: 'flex-end',
    marginTop: 40,
    paddingRight: 20,
  },
  logoStyle: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    paddingTop: 95
  },
  TextSectionContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
