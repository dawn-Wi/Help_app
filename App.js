/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment,Component,useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet,Text,View,Image,Button, PushNotificationIOS,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}/>
      <View style={styles.container}>
      <View style={styles.elem}>
      <Button
          title="패스트 푸드"
          onPress={() => navigation.navigate('패스트푸드')}
        />
        <View style={styles.content}/>
        <Button
          title="카페"
          onPress={() => navigation.navigate('카페')}
        />
        <View style={styles.content}/>
        <Button
          title="음식점"
          onPress={() => navigation.navigate('음식점')}
        />
        <View style={styles.content}/>
        <Button
          title="은행"
          onPress={() => navigation.navigate('은행')}
        />
        <View style={styles.content}/>
        <Button
          title="편의점"
          onPress={() => navigation.navigate('편의점')}
        />
      </View>
      </View>
        
        <View style={styles.footer}>
        <View style={styles.container2}>
        <Button
          title="사용법 알아보기"
          onPress={() => navigation.navigate('사용법알아보기')}
        />
        <View style={styles.content2}/>
        <Button
          title="모의사용"
          onPress={() => navigation.navigate('모의사용')}
        />
        </View>
        </View>
    </View>

  );
}

function 패스트푸드Screen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}/>
      <View style={styles.container}>
      <View style={styles.elem}>
      <Button
          title="맥도날드"
          onPress={() => navigation.navigate('맥도날드')}
        />
        <View style={styles.content}/>
        <Button
          title="롯데리아"
          onPress={() => navigation.navigate('카페')}
        />
        <View style={styles.content}/>
        <Button
          title="도미노피자"
          onPress={() => navigation.navigate('음식점')}
        />
        <View style={styles.content}/>
        <Button
          title="버거킹"
          onPress={() => navigation.navigate('은행')}
        />
        <View style={styles.content}/>
        <Button
          title="맘스터치"
          onPress={() => navigation.navigate('편의점')}
        />
        <View style={styles.content}/>
        <Button
          title="KFC"
          onPress={() => navigation.navigate('편의점')}
        />
      </View>
      </View>
        
        <View style={styles.footer}>
        <View style={styles.container2}>
        <Button
          title="사용법 알아보기"
          onPress={() => navigation.navigate('사용법알아보기')}
        />
        <View style={styles.content2}/>
        <Button
          title="모의사용"
          onPress={() => navigation.navigate('모의사용')}
        />
        </View>
        </View>
    </View>
  );
}
function 카페Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>카페 Screen</Text>
    </View>
  );
}
function 음식점Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>음식점 Screen</Text>
    </View>
  );
}
function 은행Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>은행 Screen</Text>
    </View>
  );
}
function 편의점Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>편의점 Screen</Text>
    </View>
  );
}

function 사용법알아보기Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>사용법알아보기 Screen</Text>
    </View>
  );
}

function 모의사용Screen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>모의사용 Screen</Text>
    </View>
  );
}

function 맥도날드Screen() {
  return (
    <View>
      <View style = {styles.container}>
      <Image source={require('./photo.png')} resizeMode='contain' style={{width:410, height:500,alignItems:'center',justifyContent:'center', flexDirection:'row',paddingTop:10}}></Image>
      <View style={styles.footer}>
      <Text>              1. 화면을 터치하세요.</Text>
      </View>
      </View>
      
    </View>
  );
}


const Stack = createStackNavigator();

const App = () =>{
    useEffect(()=>{
      SplashScreen.hide();
    },[]);
    return (
      
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Help 키오스크" component={HomeScreen} />
        <Stack.Screen name="패스트푸드" component={패스트푸드Screen} />
        <Stack.Screen name="카페" component={카페Screen} />
        <Stack.Screen name="음식점" component={음식점Screen} />
        <Stack.Screen name="은행" component={은행Screen} />
        <Stack.Screen name="편의점" component={편의점Screen} />
        <Stack.Screen name="사용법알아보기" component={사용법알아보기Screen} />
        <Stack.Screen name="모의사용" component={모의사용Screen} />

        <Stack.Screen name="맥도날드" component={맥도날드Screen} />
      </Stack.Navigator>
      
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    height:50,
  },
  footer:{
    height:60,
  },
  lefter:{
    width:10,
  },
  content:{
    paddingBottom: 30,
  },
  container2:{
    flex:1,
    flexDirection:'row',
    height:100,
    alignItems:'center',
    justifyContent:'center',
  },
  content2:{
    paddingRight:10,
    paddingLeft:10,
  },
  elem:{
    justifyContent:'space-between',
    padding:5,
  },
});

export default App;
