import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';


export default function Bottom({ navigation }) {
  return (
    <View style={styles.container}>
       <TouchableOpacity >
        <Feather name="home" size={20} color={'#000'} style={{alignSelf: 'center'}} />
        <Text style={{textAlign: 'center'}}>หน้าหลัก</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="search" size={20} color={'#000'} style={{alignSelf: 'center'}} />
        <Text style={{textAlign: 'center'}}>หน้าหลัก</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="play-circle" size={20} color={'#000'} style={{alignSelf: 'center'}} />
        <Text style={{textAlign: 'center'}}>หน้าหลัก</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="mail" size={20} color={'#000'} style={{alignSelf: 'center'}} />
        <Text style={{textAlign: 'center'}}>หน้าหลัก</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image  source={require('../assets/images/profile.png')} style={{width: 22, height: 22, borderRadius: 50, alignSelf: 'center'}} />
        <Text style={{textAlign: 'center'}}>หน้าหลัก</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
    marginHorizontal: 30,
     alignItems: 'center',

  },
});
