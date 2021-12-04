import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { AppBottomBar } from './Src/Navigation/Index'
import Styles from './Src/Utility/appStyle';
export default function App() {
  return (
     <NavigationContainer>
       <View style={Styles.webTitleView}>
          <Image
              style = { { width: 200, height: 120, borderRadius:10, borderWidth:3, borderColor: '#cee0db', marginVertical:15 } } 
              source = { { uri:'https://i.pinimg.com/originals/4b/79/c9/4b79c9073067d7080a1ad0b4bdc4396b.png' } }
          />
       </View>
       <AppBottomBar />
     </NavigationContainer>
  );
}


