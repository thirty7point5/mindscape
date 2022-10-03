import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { fonts } from '../../utils/fonts'

export default function PaymentComponent({
  title = 'title',
  payment = 'AED payment',
  description = 'description',
  onPress = () => { },
  textStyle = {}
}) {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={styles.SectionContainer}
        activeOpacity={0.8}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              flex: 1,
              fontSize: 22,
              color: '#fff',
              alignItems: 'flex-start',
              paddingVertical: 3,
              marginTop: 15,
              fontFamily: fonts.regulatorDemiBold
            }}>
            {title}
          </Text>
          <View
            style={{
              fontSize: 20,
              color: '#fff',
              alignItems: 'flex-end',
              marginTop: 15
            }}>
            <Text style={{ fontSize: 20, color: '#fff', paddingVertical: 3, fontFamily: fonts.regulatorLight}}>
              {payment}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1, fontSize: 16, color: '#E39684', fontFamily: fonts.regulatorLight}}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.BorderView} />
    </>
  )
}

const styles = StyleSheet.create({
  SectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '12%'
  },
  BorderView: {
    borderBottomColor: 'rgba(255, 255, 255, .3)',
    borderBottomWidth: 1
  }
})
