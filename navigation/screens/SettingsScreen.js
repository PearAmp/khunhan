import { View, Text } from 'react-native'
import React from 'react'

export default function SettingsScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}  >SettingsScreen</Text>
    </View>
  )
};