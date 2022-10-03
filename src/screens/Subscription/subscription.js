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
import { ScrollView } from 'react-native-gesture-handler'

export const Subscription = ({ navigation }) => {
  const [image, setImage] = useState()
  const imageSelector = async () => {
    try {
      const url = await imagePicker(false)
      setImage(url[0])
      console.log('url', url)
    } catch (error) { }
  }

  return (
    <>
      <ScrollView bounces={false} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.mainContainer}>
          <StatusBar backgroundColor={'transparent'} translucent={true} />
          <View style={styles.topCutButton}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
            >
              <Icon name="close" size={40} color="#8C8BA5" />
            </TouchableOpacity>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={{ color: '#8C8BA5', fontSize: 24, marginVertical: 8, fontFamily: 'Regulator Nova Medium' }}>
              SUBSCRIPTION
            </Text>
            <Text style={{ color: '#FFFFFF', fontSize: 18, marginVertical: 6, fontFamily: 'Regulator Nova Medium' }}>
              YOUR MEMBERSHIP
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", fontFamily: 'Optima-Regular' }}>
              <Text style={{ color: '#E39684', fontSize: 22, marginVertical: 8 }}>
                Monthly
              </Text>
              <Text style={{ color: '#A4A3BC90', fontSize: 16, margin: 8, fontFamily: 'Regulator Nova Medium' }}>
                Change Plan
              </Text>

            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Optima-Regular' }}>Renewal Date</Text>
              <View>
                <Text style={styles.input}>25/9/2022</Text>
              </View>
              <View style={styles.BorderView} />
            </View>
            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Optima-Regular' }}>App User ID</Text>
              <View>
                <Text style={styles.input}>Xxxxxxx</Text>
              </View>
            </View>
            <View>
              <Text style={{ color: '#E39684', fontSize: 22, marginVertical: 8, fontFamily: 'Optima-Regular' }}>
                Validate your Student ID
              </Text>
              <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Optima-Regular' }}>
                  Institution Name
                </Text>
                <View>
                  <Text style={styles.input}>Xxxxxxx</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'space-between' }}>
                <Text style={{ color: '#FFFFFF', fontSize: 16, fontFamily: 'Optima-Regular' }}>
                  Student Identification Number
                </Text>
                <View>
                  <Text style={styles.input}>Xxxxxxx</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
              }}>
              <View style={{ width: '45%', }}>
                <TouchableOpacity
                  onPress={() => imageSelector()}
                  activeOpacity={0.7}
                  style={{
                    marginTop: 15,
                    width: 100,
                    height: 35,
                    borderRadius: 20,
                    backgroundColor: '#2F2F40',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <Text style={{ color: '#8C8BA590', fontSize: 16, fontFamily: 'Regulator Nova Medium' }}>Upload</Text>
                </TouchableOpacity>
              </View>
              <View style={{ width: '50%', justifyContent: 'flex-end', }}>
                <Text style={{ color: '#E39684', fontSize: 14, fontFamily: 'Optima-Regular' }}>
                  Wait for our response via your email
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 70,
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}
              >
                <Image
                  style={{
                    height: 30,
                    width: 15,
                    tintColor: '#A3A2BA',
                    transform: [{ rotate: '180deg' }]
                  }}
                  source={require('../../assets/images/arrow-right.png')}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#49485F'
  },
  topCutButton: {
    alignItems: 'flex-end',
    marginTop: 40,
    paddingRight: 20
  },
  sectionContainer: {
    paddingTop: 35,
    paddingHorizontal: 60
  },
  input: {
    width: 191,
    height: 24,
    marginVertical: 5,
    color: '#8C8BA590',
    fontSize: 16,
    fontFamily: 'Regulator Nova Medium'
  },
  BorderView: {
    borderBottomColor: '#9493AD90',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 16
  }
})
