import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


function DoubleButton({
  title1 = 'Yes',
  title2 = 'No',
  onPress1 = () => {},
  onPress2 = () => {},
  textStyle1 = {},
  textStyle2 = {},
  buttonStyle1 = {},  
  buttonStyle2 = {}
}) {
  return (
    <>
      <View style={{ width: '42%', alignItems: 'flex-end', marginVertical: 5 }}>
        <TouchableOpacity onPress={onPress1} activeOpacity={0.7}>
          <LinearGradient
            colors={['#fff', '#EDE7E4']}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.button1, buttonStyle1]}>
            <Text style={[styles.text, textStyle1]}>{title1}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={{ width: '42%', alignItems: 'flex-start', marginVertical: 5 }}>
        <TouchableOpacity onPress={onPress2} activeOpacity={0.7}>
          <LinearGradient
            colors={['#fff', '#EDE7E4']}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[styles.button2, buttonStyle2]}>
            <Text style={[styles.text, textStyle2]}>{title2}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  )
}

function SingleButton({
  title = 'Complete',
  onPress = () => {},
  textStyle = {},
  buttonStyle = {}
}) {
  return (
    <View
      style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <LinearGradient
          colors={['#fff', '#EDE7E4']}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.button1, buttonStyle]}>
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button1: {
    borderColor: '#afafb7',
    borderWidth: 1,
    width: 130,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21,
    backgroundColor: '#fff'
  },
  button2: {
    borderColor: '#afafb7',
    borderWidth: 1,
    width: 130,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21,
    backgroundColor: '#fff'
  },
  text: {
    color: '#A3A2BA',
    fontSize: 16
  }
})

export { DoubleButton, SingleButton }

