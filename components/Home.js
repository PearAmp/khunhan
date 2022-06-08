import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import districtData from '../assets/data/districtData';
import hospitalData from '../assets/data/hospitalData';

Feather.loadFont();



  

export default function Home() {
    const renderdistricItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.blockItem}>
            <Image style={styles.imageList} source={item.image} />
           <View style={ {marginTop: 10,} }>
           <Text style={styles.listText}>{item.title}</Text>
            <Text style={styles.listText}>{item.title2}</Text>
           </View>              
            </View>

            </TouchableOpacity>
        );

    };

    const renderhospitalItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={styles.blockItem}>
            <Image style={styles.imageList} source={item.image} />
           <View style={ {marginTop: 10,} }>
           <Text style={styles.listText}>{item.title}</Text>
            <Text style={styles.listText}>{item.title2}</Text>
           </View>              
            </View>

            </TouchableOpacity>
        );

    };

  
    
  return (
    <ScrollView style={styles.container}>
        <View style={styles.header} >
      <View style={styles.headerwrap}>
          <Text style={styles.headerText}>KHUNHAN NEWS</Text>
      </View>    
          <Feather name='settings' size={20} />
    </View>

    {/*  Image Head */}
    <View style={styles.Imagewrap}>
    <Image style={styles.imageItem} source={require('../assets/images/khunhan.jpeg')} />
    </View>

    {/* contant */}
    <View  style={styles.contentwrap}>
        <Text style={styles.contentText}  >อำเภอขุนหาญ จังหวัดศรีสะเกษ </Text>
        <Text style={styles.contentText} >ภาคตะวันออกเฉียงเหนือ</Text>
    </View>

    {/* News Content */}
    
    <SafeAreaView style={styles.newsContainer} >
    <View>
    <View style={styles.newHead}>
        <Text style={styles.newHeadText}>ข่าวอำเภอขุนหาญ</Text>
    </View>
      <FlatList 
      data={districtData}
      renderItem={renderdistricItem}
      keyExtractor={item => item.id}
      horizontal={true}       
      />
    </View>

    <View>
    <View style={styles.newHead}>
        <Text style={styles.newHeadText}>โรงพยาบาลอำเภอขุนหาญ</Text>
    </View>
    <FlatList 

    data={hospitalData}
    renderItem={renderhospitalItem}
    keyExtractor={item => item.id}
    horizontal={true}
     />
      
      
    </View>

    </SafeAreaView>

    {/* News Hospital */}

    







    </ScrollView>
  )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 50,
        fontFamily: 'Montserrat-bould',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerwrap: {
        marginTop: 10,
    },
    headerText: {
        fontSize: 28,
        marginLeft: 50,
        color: '#5DB5F8',
        fontFamily: 'Montserrat-Bold',
        marginVertical: 20,
        
    },
    imageItem: {
        width: '100%',
        height: 200,
        borderRadius: 27,

    },
    Imagewrap: {
        marginTop: 20,
    },
    contentText: {
        fontFamily: 'Montserrat-Bold',
        fontStyle: 'normal',
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 24,
        color: '#000',

    },
    contentwrap: {
        marginVertical: 16,
    },
    newsContainer: {
        backgroundColor: '#5DB5F8',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        height: 500,

    },
    renderContainer: {
        backgroundColor: '#fff',


    },
    imageList: {
        width: 137,
        height: 100,
        borderRadius: 16,
        marginHorizontal: 20,
    },
    listText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#000',

    },
    blockItem: {
        backgroundColor: '#fff',
       marginTop: 20,
       paddingVertical: 20,
       marginLeft: 20,
       height: 180,
       borderRadius: 16,

        
        

    },
    newHead: {
        marginHorizontal: 20,
        marginTop: 20,
        
    },
    newHeadText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#fff',
    },



});