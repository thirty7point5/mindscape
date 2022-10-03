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
const { width, height } = Dimensions.get('window')
import LinearGradient from 'react-native-linear-gradient'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import Slider from 'react-native-slider'
import Entypo from 'react-native-vector-icons/Entypo'
import { fonts } from '../../utils/fonts'
export const ArticleScreen = ({ navigation }) => {
  const [state, setState] = useState({
    value: 0.2
  })
  

  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
          <StatusBar
            backgroundColor={'transparent'}
            translucent={true}
            barStyle={'light-content'}
          />

          <View>
            <ImageBackground
              style={{height: height}}
              source={require('../../assets/images/artBg1.png')}>
              <View style={styles.section1}>
                <View>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 12,
                      textAlign: 'center',
                      fontFamily:fonts.regulatorDemiBold
                    }}>
                    THINK
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 22,
                      textAlign: 'center',
                      marginTop: 10,
                      fontFamily:fonts.OptimaRegular
                    }}>
                    A unique experience of {'\n'}a common emotion
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 14,
                      textAlign: 'center',
                      fontFamily:fonts.OptimaRegular
                    }}>
                    Orlando Bloom
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 14,
                      textAlign: 'center',
                      fontFamily:fonts.OptimaRegular
                    }}>
                    3 mins
                  </Text>
                </View>


                <View style={{top: (height/2.28) + 35}}>
                  <View style={styles.sliderView}>
                    <Slider
                      thumbImage={require('../../assets/images/play1.png')}
                      minimumTrackTintColor={'#ffffff'}
                      maximumTrackTintColor={'#ffffff98'}
                      thumbTintColor={'transparent'}
                      trackStyle={{ height: 2 }}
                      thumbTouchSize={{ width: 40, height: 60 }}
                      value={state.value}
                      onValueChange={e => setState({ e })}
                    />
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 14,
                        textAlign: 'center',
                        fontFamily:fonts.regulatorDemiBold
                      }}>
                      03:21
                    </Text>
                  </View>

                  <View style={styles.libraryView}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => navigation.goBack()}>
                      <Entypo
                        name="chevron-thin-left"
                        size={30}
                        color="#FFFFFF"
                      />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7}>
                      <Text style={styles.lestgoTextStyle}>LIBRARY</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.section2}>
            <LinearGradient
              colors={['#707070', '#ECE4E0']}
              start={{ x: 6, y: 9 }}
              end={{ x: 3, y: 0 }}>
              <View>
                <LinearGradient
                  colors={['#EDE7E46E', '#ffffff', '#EDE7E460']}
                  start={{ x: 1, y: 1 }}
                  end={{ x: 1, y: 0 }}
                  style={{paddingVertical:20}}                >
                  <Text
                    style={{
                      color: '#706F93',
                      fontSize: 12,
                      textAlign: 'center',
                      fontFamily:fonts.regulatorDemiBold
                    }}>
                    THINK
                  </Text>
                  <Text
                    style={{
                      color: '#706F93',
                      fontSize: 22,
                      textAlign: 'center',
                      marginTop: 10,
                      fontFamily:fonts.OptimaRegular
                    }}>
                    A unique experience of {'\n'}a common emotion
                  </Text>
                  <Text
                    style={{
                      color: '#A3A2BA',
                      fontSize: 14,
                      textAlign: 'center',
                      fontFamily:fonts.OptimaRegular
                    }}>
                    Orlando Bloom
                  </Text>
                </LinearGradient>
              </View>

              <View style={styles.sliderView2}>
                <Slider
                  thumbImage={require('../../assets/images/play.png')}
                  minimumTrackTintColor={'#706F93'}
                  maximumTrackTintColor={'#706F9390'}
                  thumbTintColor={'transparent'}
                  trackStyle={{ height: 2 }}
                  thumbTouchSize={{ width: 40, height: 60 }}
                  value={state.value}
                  onValueChange={e => setState({ e })}
                />
                <Text
                  style={{
                    color: '#A3A2BA',
                    fontSize: 12,
                    textAlign: 'center',
                    marginVertical: 20,
                    fontFamily:fonts.OptimaRegular
                  }}>
                  Narration by Latifa Soobeydar
                </Text>
              </View>
              <View style={styles.textView}>
                <Text
                  style={{
                    color: '#706F93',
                    fontSize: 22,
                    textAlign: 'center',
                    marginVertical: 10,
                    fontFamily:fonts.OptimaRegular
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  lorem odio, mollis id aliquet non, accumsan ac ipsum. Sed a
                  rutrum lorem.
                </Text>
                <Text style={styles.ParaTextStyle}>
                  Duis feugiat urna id aliquam tristique. In magna ligula,
                  eleifend sit amet vulputate sit amet, vehicula eget justo.
                  Etiam imperdiet, erat vel sagittis mattis, sapien diam tempus
                  tortor, nec imperdiet nulla mauris ac urna. Ut et orci
                  sodales, elementum purus non, dignissim mauris. Nulla quis
                  ipsum dapibus, molestie nisl at, mattis mauris. Ut bibendum
                  rutrum neque, in iaculis lorem accumsan quis.
                </Text>
                <Text style={styles.ParaTextStyle}>
                  In iaculis finibus eleifend. Aenean in euismod justo. Etiam
                  tincidunt erat a nisi lobortis, eu ultrices sem posuere.
                  Aenean id feugiat sapien. Nunc et consectetur nisl, vitae
                  cursus lorem. Vivamus dolor est, scelerisque ac hendrerit vel,
                  interdum ut mi. Mauris vulputate varius purus. Nulla mattis
                  rutrum magna, varius finibus mi iaculis id.
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 70,
                  marginBottom: 20
                }}>
                <Image
                  source={require('../../assets/images/artBg2.png')}
                  style={{ height: 250, width: '100%' }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    color: '#fff',
                    fontSize: 22,
                    textAlign: 'center',
                    paddingHorizontal: 100
                  }}>
                  In iaculis finibus eleifend. Aenean in euismod justo.
                </Text>
              </View>

              <View style={styles.textView}>
                <Text style={styles.ParaTextStyle}>
                  In iaculis finibus eleifend. Aenean in euismod justo. Etiam
                  tincidunt erat a nisi lobortis, eu ultrices sem posuere.
                  Aenean id feugiat sapien. Nunc et consectetur nisl, vitae
                  cursus lorem. Vivamus dolor est, scelerisque ac hendrerit vel,
                  interdum ut mi. Mauris vulputate varius purus. Nulla mattis
                  rutrum magna, varius finibus mi iaculis id.
                </Text>
              </View>
              <View
                style={{
                  marginVertical: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf:"center",
                }}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={{ fontSize: 22, color: '#706F93',fontFamily:fonts.OptimaRegular }}>SHARE</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  section1: {
    // justifyContent: 'space-between',
    paddingTop: 100,
    width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height
  },

  sliderView: {
    justifyContent: 'center',
    paddingHorizontal: 60,
    // marginTop: '80%'
  },
  sliderView2: {
    justifyContent: 'center',
    paddingHorizontal: 60,
    marginTop: 10
  },
  libraryView: {
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    top: height/24
  },

  lestgoTextStyle: {
    fontSize: 12,
    color: '#fff',
    fontFamily:fonts.regulatorDemiBold,
    paddingTop:20
  },
  section2: {
    paddingTop: 60,
    backgroundColor: '#ECE4E0'
  },
  textView: {
    paddingHorizontal: 40
  },
  ParaTextStyle: {
    color: '#706F93',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 28,
    marginVertical: 15,
    fontFamily:fonts.OptimaRegular
  }
})
