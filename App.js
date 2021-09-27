/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment,Component,useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';


const App = () =>{

    useEffect(()=>{
      SplashScreen.hide();
    },[]);

    return (
      <View>
        <Image source={require('./android/app/src/main/res/drawable/image.png')}/>
      </View>
    );
};


const styles = StyleSheet.create({
  
});

export default App;
