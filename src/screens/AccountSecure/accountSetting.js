import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import ToggleButton from '../../components/ToggleButton/index'
import Icon from 'react-native-vector-icons/EvilIcons'

export const AccountSetting = ({ navigation }) => {
  const onSelectSwitch = index => {
    // alert(index === 1 ? 'Switch Off' : 'Switch On')
  }

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View style={styles.topCutButton}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}>
            <Icon name="close" size={40} color="#A3A2BA" />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={{ color: '#8C8BA5', fontSize: 24, marginVertical: 8 }}>
            SETTING
          </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, marginVertical: 6 }}>
            PASSWORD
          </Text>
          <Text style={{ color: '#E39684', fontSize: 22, marginVertical: 8 }}>
            Tap to Type
          </Text>
          <View style={{ justifyContent: 'space-between' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>
              Update Password
            </Text>
            <View>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                value={'123456789012'}
                placeholderTextColor="#8C8BA5"
                secureTextEntry={true}
                editable={false}
              />
            </View>
          </View>
          <Text style={{ color: '#E39684', fontSize: 16, marginVertical: 5 }}>
            Forgot Password
          </Text>
          <Text style={{ color: '#E39684', fontSize: 16, marginVertical: 5 }}>
            Change Password
          </Text>
          <View style={styles.BorderView} />
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <View style={{ width: '70%' }}>
              <Text
                style={{ color: '#FFFFFF', fontSize: 18, marginVertical: 8 }}>
                FACE ID
              </Text>
            </View>
            <View style={{ width: '30%', alignItems: 'flex-end' }}>
              <ToggleButton selectionMode={2} onSelectSwitch={onSelectSwitch} />
            </View>
          </View>
          <Text style={{ color: '#E39684', fontSize: 22, marginVertical: 5 }}>
            For faster login
          </Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('Account')}
          activeOpacity={0.7}
            style={{
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <View style={{ width: '70%' }}>
              <Text
                style={{ color: '#FFFFFF', fontSize: 16, marginVertical: 5 }}>
                Refresh your face ID
              </Text>
            </View>
            <View
              style={{ width: '30%', alignItems: 'flex-end', paddingRight: 4 }}>
              <Icon name="chevron-right" size={35} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#49485F'
  },
  sectionContainer: {
    paddingTop: 35,
    paddingHorizontal: 40
  },
  topCutButton:{
    alignItems: 'flex-end',
    marginTop: 40,
    paddingRight: 20
  },
  input: {
    width: 236,
    height: 33,
    marginVertical: 12,
    marginLeft: 2,
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#8C8BA5',
    fontSize: 16,
    padding: 1,
    backgroundColor: '#2F2F40'
  },
  BorderView: {
    borderBottomColor: 'rgba(255, 255, 255, .3)',
    borderBottomWidth: 1.5,
    width: '39%',
    marginVertical: 10
  }
})
