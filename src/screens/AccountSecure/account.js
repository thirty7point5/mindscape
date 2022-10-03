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
import { imagePicker } from '../../helper/utils'
import { fonts } from '../../utils/fonts'

export const Account = ({ navigation }) => {
  const [image, setImage] = useState()
  const imageSelector = async () => {
    try {
      const url = await imagePicker(false)
      setImage(url[0])
      console.log('url', url)
    } catch (error) {}
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
          <Text style={{ color: '#8C8BA5', fontSize: 24, marginVertical: 8, fontFamily: fonts.regulatorMedium }}>
            ACCOUNT
          </Text>
          <Text style={{ color: '#FFFFFF', fontSize: 18, marginVertical: 6, fontFamily: fonts.regulatorMedium}}>
            LOGIN INFORMATION
          </Text>
          <Text style={{ color: '#E39684', fontSize: 22, marginVertical: 8, fontFamily: fonts.OptimaRegular }}>
            Tap to Type
          </Text>
          <View style={{ justifyContent: 'space-between' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: fonts.OptimaRegular }}>Name</Text>
            <View>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={'123456789012'}
                placeholder="Dan"
                placeholderTextColor="#8C8BA5"
                keyboardType="default"
              />
            </View>
          </View>
          <View style={{ justifyContent: 'space-between' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: fonts.OptimaRegular }}>Email</Text>
            <View>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={'123456789012'}
                placeholder="daniel.nehme1@icloud.com"
                placeholderTextColor="#8C8BA5"
                keyboardType="email-address"
              />
            </View>
          </View>
          <View style={{ justifyContent: 'space-between' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: fonts.OptimaRegular }}>Contact</Text>
            <View>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={'123456789012'}
                placeholder="+971 55 8477 327"
                placeholderTextColor="#8C8BA5"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View
            
            style={{
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <View style={{ width: '70%' }}>
              <Text
                style={{ color: '#FFFFFF', fontSize: 16, marginVertical: 5, fontFamily: fonts.OptimaRegular }}>
                Refresh Your Silhouette
              </Text>
            </View>
            <TouchableOpacity
            // onPress={() => navigation.navigate('AccountSetting')}
            activeOpacity={0.7}
              style={{ width: '30%', alignItems: 'flex-end', paddingRight: 4 }}>
              <Image source={require('../../assets/images/group-244.png')} />
              <Image
                source={require('../../assets/images/group-245.png')}
                style={{ position: 'absolute', top: 5, right: 10, bottom: 0 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <View style={{ width: '40%', marginVertical: 10 }}>
              <View
                style={{
                  borderWidth: 1.5,
                  borderColor: '#9493AD',
                  width: 105,
                  height: 105,
                  borderRadius: 52.5,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Image
                  style={{ height: 104, width: 100, resizeMode: 'stretch' }}
                  source={require('../../assets/images/group-243.png')}
                />
              </View>
            </View>
            <View style={{ width: '60%', marginLeft: 10 }}>
              <TouchableOpacity
                onPress={() => imageSelector()}
                activeOpacity={0.7}
                style={{
                  marginTop: 25,
                  width: 100,
                  height: 35,
                  borderRadius: 20,
                  backgroundColor: '#2F2F40',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Text style={{ color: '#8C8BA5', fontSize: 16, fontFamily: fonts.regulatorMedium }}>Upload</Text>
              </TouchableOpacity>
              <Text style={{ color: '#E39684', fontSize: 14, marginTop: 10, fontFamily: fonts.OptimaRegular }}>
                *update within {'\n'}24 hours
              </Text>
            </View>
          </View>
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
  topCutButton:{
    alignItems: 'flex-end',
    marginTop: 40,
    paddingRight: 20
  },
  sectionContainer: {
    paddingTop: 35,
    paddingHorizontal: 50,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  input: {
    width: "88%",
    height: 33,
    marginVertical: 12,
    borderRadius: 25,
    paddingHorizontal: 14,
    color: '#FFF',
    fontSize: 16,
    padding: 1,
    backgroundColor: '#2F2F40'
  },
  BorderView: {
    borderBottomColor: 'rgba(255, 255, 255, .3)',
    borderBottomWidth: 1.5,
    width: '45%',
    marginVertical: 10
  }
})
