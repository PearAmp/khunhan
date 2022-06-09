import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather";

export default function SchoolDetail( {navigation} ) {
  return (
    <View style={styles.container} >
      <Text >SchoolDetail</Text>
      <TouchableOpacity>
      </TouchableOpacity>

      
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },

});
