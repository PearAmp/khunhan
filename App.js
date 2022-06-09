import { View, Text } from 'react-native'
import React from 'react'
import MainContainer from './navigation/MainContainer'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SchoolDetail from './components/SchoolDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <View style={{flex: 1,}}>
     <MainContainer />
   
   
   </View>
   
  )
};




























// import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Home from './components/Home';
// import SchoolDetail from './components/SchoolDetail';


// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <Stack.Screen
//           name="SchoolDetail"
//           component={SchoolDetail}
//           options={{
//             headerShown: false,
//           }}
//         />
       
//       </Stack.Navigator>
      
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({});
