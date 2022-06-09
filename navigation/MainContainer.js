import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import Khunhan from '../components/Khunhan';
import SchoolDetail from '../components/SchoolDetail';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// 
const homeName = 'home';
const detailsName = 'Details';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();
Feather.loadFont();


export default function MainContainer() {
  return (
    <NavigationContainer>
        <View style={styles.container}>
        <Tab.Navigator 
        initialRouteName={homeName}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color,size}) => {
                let iconName;
                let rn = route.name;
                 
                 if (rn === homeName) {
                     iconName = focused ? 'home' : 'home'
                 } else if (rn === detailsName) {
                    iconName = focused ? 'list' : 'list'
                 } else if (rn === settingsName) {
                    iconName = focused ? 'settings' : 'settings'

                 }

                 return <Feather name={iconName} size={size} color={color} />

            },

        })}>
        <Tab.Screen name={homeName} component={Khunhan}  />
        <Tab.Screen name={detailsName} component={SchoolDetail} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />


        </Tab.Navigator>
        </View>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: -100,
    },

});