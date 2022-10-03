import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ImageBackground,
  SafeAreaView
} from 'react-native'
import Button from '../../components/button'
import { fonts } from '../../utils/fonts'

export const GetstartedMain = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <ImageBackground
        style={{ height: '100%', width: '100%' }}
        source={require('../../assets/images/GetStartImg.png')}>
        <View
          style={{
            flex: 2,
            alignItems: 'flex-end',
            paddingTop: 20,
            paddingRight: 20,
            marginVertical: 20
          }}>
          <Text style={{ color: '#a2a2bc' }}>Skip</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 15, fontFamily: fonts.regulatorLight }}>Learn about</Text>
          <Text style={styles.mindScape}>MINDSCAPE</Text>
          <View style={{ marginVertical: 10 }}>
            <Button
              buttonStyle={{ borderColor: '#c5cbe3' }}
              onPress={() => navigation.navigate('WalkThrough')}
              // onPress={() => navigation.navigate('EmailVerification')}
              title={'Get Started'}
              textStyle={{ color: '#7f83a0', fontFamily: fonts.OptimaRegular }}
            />
          </View>
        </View>
      </ImageBackground>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171634'
  },
  mindScape: {
    paddingBottom: 10,
    fontSize: 32,
    color: '#fff',
    fontFamily: 'Regulator Nova Medium'
  }
})
