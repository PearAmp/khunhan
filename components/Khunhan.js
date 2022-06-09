import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import districtData from '../assets/data/districtData';
import hospitalData from '../assets/data/hospitalData';
import schoolData from '../assets/data/schoolData';
import durainlavaData from '../assets/data/durainlavaData';
import travelData from '../assets/data/travelData';
import Bottom from './Bottom';

Feather.loadFont();

export default function Khunhan({ navigation }) {
  const renderdistricItem = ({item}) => {
    return (
        <TouchableOpacity >
        <View>
          <Image style={styles.imageList} source={item.image} />
          <View style={{marginTop: 10}}>
            <Text style={styles.listText}>{item.title}</Text>
            <Text style={styles.listText}>{item.title2}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderhospitalItem = ({item}) => {
    return (
      <TouchableOpacity>
          <Image style={styles.imageList} source={item.image} />
          <View style={{marginTop: 10}}>
            <Text style={styles.listText}>{item.title}</Text>
            <Text style={styles.listText}>{item.title2}</Text>
          </View>
      </TouchableOpacity>
    );
  };
  const renderschoolItem = ({item}) => {
    return (
      <TouchableOpacity>
          <Image style={styles.imageList} source={item.image} />
          <View style={{marginTop: 10}}>
            <Text style={styles.listText}>{item.title}</Text>
            <Text style={styles.listText}>{item.title2}</Text>
          </View>
      </TouchableOpacity>
    );
  };

  const renderdurainlavaItem = ({item}) => {
    return (
      <TouchableOpacity>
          <Image style={styles.imageList} source={item.image} />
          <View style={{marginTop: 10}}>
            <Text style={styles.listText}>{item.title}</Text>
            <Text style={styles.listText}>{item.title2}</Text>
          </View>
      </TouchableOpacity>
    );
  };

  const rendertravelItem = ({item}) => {
    return (
      <TouchableOpacity>
          <Image style={styles.imageList} source={item.image} />
          <View style={{marginTop: 10}}>
            <Text style={styles.listText}>{item.title}</Text>
            <Text style={styles.listText}>{item.title2}</Text>
          </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerwrap}>
          <Text style={styles.headerText}>KHUNHAN NEWS</Text>
        </View>
        <Feather
          name="menu"
          size={30}
          style={{marginRight: 20, marginTop: 3}}
        />
      </View>

      {/*  Image Head */}
      <View style={styles.Imagewrap}>
        <Image
          style={styles.imageItem}
          source={require('../assets/images/khunhan.jpeg')}
        />
      </View>

      {/* contant */}
      <View style={styles.contentwrap}>
        <Text style={styles.contentText}>อำเภอขุนหาญ จังหวัดศรีสะเกษ ภาคตะวันออกเฉียงเหนือ</Text>
      </View>

      {/* News Content */}

      <SafeAreaView style={styles.newsContainer}>
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

        <View>
          <View style={styles.newHead}>
            <Text style={styles.newHeadText}>โรงเรียน</Text>
          </View>
          <FlatList
            data={schoolData}
            renderItem={renderschoolItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>

        <View>
          <View style={styles.newHead}>
            <Text style={styles.newHeadText}>ทุเรียนภูเขาไฟ</Text>
          </View>

          <FlatList
            data={durainlavaData}
            renderItem={renderdurainlavaItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>

        <View style={{marginBottom: 30}}>
          <View style={styles.newHead}>
            <Text style={styles.newHeadText}>ท่องเที่ยวและกีฬา</Text>
          </View>

          <FlatList
            data={travelData}
            renderItem={rendertravelItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    fontFamily: 'Montserrat-bould',
    backgroundColor: '#fff',
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
    marginLeft: 60,
    color: '#5DB5F8',
    fontFamily: 'Montserrat-Bold',
    marginVertical: 20,
  },
  imageItem: {
    width: '100%',
    height: 200,
  },
  Imagewrap: {
    marginTop: 20,
  },
  contentText: {
    fontStyle: 'normal',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    color: '#000',
  },
  contentwrap: {
    marginVertical: 16,
  },
  newsContainer: {
    backgroundColor: '#eee',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 'auto',
    marginHorizontal: 20,
  },
  renderContainer: {
    backgroundColor: '#fff',
  },
  imageList: {
      marginTop: 10,
    width: 150,
    height: 150,
    marginLeft: 15,
    marginRight: 5,
    borderRadius: 10,
  },
  listText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#000',
  },
  blockItem: {
    backgroundColor: '#fff',
    marginTop: 20,
   overflow: 'hidden',
    height: 180,
    borderRadius: 16,
    marginRight: 4,
    marginLeft: 15,
  },
  newHead: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  newHeadText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});
