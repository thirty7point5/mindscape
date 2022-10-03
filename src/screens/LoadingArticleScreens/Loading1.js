import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/EvilIcons'
import { imagePicker } from '../../helper/utils'
import { Emergency2 } from './Emergency2'
const { width, height } = Dimensions.get('screen')
import EmergencySvg from '../../assets/SVG/EmergencySvg'
import Button from '../../components/button/index'
import LinearGradient from 'react-native-linear-gradient'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import { fonts } from '../../utils/fonts'

export const Loading1 = ({ navigation }) => {
  return (
    <>
     <LinearGradient
            colors={['#8C8BA5', '#A4A3BC',]}
            start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
            style={{
                flex: 1
            }}>
      <SafeAreaView style={styles.mainContainer}>
          <ImageBackground
           style={{ height: '95%', width: '100%', marginTop:20 }}
           source={require('../../assets/images/loadingBg.png')}
          >

        <StatusBar
          backgroundColor={'transparent'}
          translucent={true}
          barStyle={'dark-content'}
        />
        <View style={styles.sectionContainer}>
          <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center',fontFamily:fonts.regulatorMedium }}>
            You feel…I feel {'\n'}but it’s not the same
          </Text>
          <Text
            style={{
              color: '#706F93',
              fontSize: 20,
              textAlign: 'center',
              marginVertical: 10,
              fontFamily:fonts.OptimaRegular
            }}>
            Each of us experiences {'\n'}emotion in a unique way
          </Text>
          <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center',fontFamily:fonts.OptimaRegular }}>
            3 mins
          </Text>
        </View>

        <View style={styles.backButtonView}>
          <Button
            onPress={() => navigation.navigate('ArticleScreen')}
            title={'Learn More >'}
            buttonStyle={{
              height: 28,
              width: 130,
              backgroundColor: '#fff',
              borderColor: '#fff'
            }}
            textStyle={{ color: '#FECAB6', fontSize: 16,fontFamily:fonts.OptimaRegular }}
          />
          <Button
            onPress={() => navigation.goBack()}
            title={'< Read Later'}
            buttonStyle={{
              height: 28,
              width: 130,
              backgroundColor: 'transparent',
              borderColor: '#fff',
              marginRight: 50,
              marginVertical: 10
            }}
            textStyle={{ color: '#fff', fontSize: 16,fontFamily:fonts.OptimaRegular }}
          />
          <Text style={{ color: '#706F93', fontSize: 12, marginLeft: 10,fontFamily:fonts.OptimaRegular }}>
            The article will be saved {'\n'}in your library
          </Text>
        </View>
        </ImageBackground>
      </SafeAreaView>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  sectionContainer: {
    paddingTop: 100,
    paddingHorizontal: 60
  },
  backButtonView: {
    paddingBottom: 60,
    height: height * 0.38,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft:15
  }
})

