import React, {useState} from 'react'
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Octicon from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {

  const navigation = useNavigation();

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const response = await fetch('http://192.168.0.111:3410/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      })
    })
    const data = await response.json()
    if (data.status === 'ok') {
      
      try {
        await AsyncStorage.setItem(
          'username',
          userName
        );
        console.log("x");
      } catch (error) {
        console.log(error)
      }
      
      navigation.navigate('MainMenuPage', {});
    } else {
      Alert.alert(
          data.status,
          data.message,
          [
            {text: "ok", onPress: () => console.log("ok pressed")}
          ]
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <Image source={require('../assets/Logo_white.png')} style={styles.logo} />
          <Text style={styles.welcomeText}> Cooking is easy. Let's cook and fun!</Text>

          {/* Input username & Password */}
          <View style={styles.inputView}>
            <Octicon style={styles.setIcon} name="person" size={20} color="#C7C7C7"/> 
            <TextInput  
              style={styles.inputText}
              placeholder="Username"
              onChangeText={setUserName}
              value={userName}
              placeholderTextColor="#C7C7C7"/>
          </View>

          <View style={styles.inputView} >
            <FeatherIcon style={styles.setIcon} name="key" size={20} color="#C7C7C7"/> 
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              placeholderTextColor="#C7C7C7"/>
          </View>

          {/* button to Main Page */}
          <TouchableOpacity style={styles.loginBttn} onPress = {() => handleLogin()}>
            <Text style={{color: "#fff", fontWeight: "bold", alignSelf: "center"}}>Login</Text>
          </TouchableOpacity>

          
           {/* ตรงส่วนปุ่มเชื่อมกับ google account ถ้าไม่ใช้แล้วแน่ ๆ ก็ลบออกได้เลย */}
          {/* <View style={{alignItems: "center", flexDirection: 'row', justifyContent: "center", marginVertical: 25}}>
          <View style={{width: "33%", height: 1, backgroundColor: "#FF6464"}} />
          <View>
          <Text style={{width: 40, textAlign: "center", color: "#FF6464", fontSize: 13}}>OR</Text>
          </View>
          <View style={{width: "33%", height: 1, backgroundColor: "#FF6464"}} />
          </View>

          <View style={{alignItems: "center"}}>
            <TouchableOpacity style={styles.synceGoogleBttn}>
            <FontAwesome name="google" size={18} color="#fff"/>
            <Text style={{color: "#fff", fontWeight: "500", marginLeft: 10}}>Login with Google account</Text>
          </TouchableOpacity>
          </View> */}


          {/* Create an account (button to register page) */}
          <View style={styles.bottomContainer}>
              <Text style={{color: "#CFE8A9", fontWeight: "400"}}>Don't have an account?</Text>
            <TouchableOpacity style={{marginLeft: 7}} onPress = {() => navigation.navigate('RegisterPage', {})}> 
              <Text style={{color: "#fff", fontWeight: "500"}}>
              Register here
            </Text></TouchableOpacity>
           
          </View>
         

    </View>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#E64848',
},
text: {
  fontSize: 20,
  textAlign: 'center',
},
logo: {
  width: 160,
  height: 160,
  marginTop: 70,
  justifyContent: "center",
  alignSelf: 'center'
},
welcomeText: {
  color: "#fff", 
  alignSelf: "center", 
  marginBottom: 20
},
inputView:{
  width:"80%",
  height:45,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:"#fff",
  borderRadius:25,
  marginBottom:15,
  justifyContent:"center",
  padding:20,
  alignSelf: 'center'
},
inputText:{
  flex: 1,
  paddingLeft: 5,
  height:50,
  color:"#000",
},
setIcon: {
  padding: 5,
  paddingBottom: 25
},
loginBttn: {
  width: "30%",
  borderRadius: 10,
  height:38,
  alignSelf: "center",
  justifyContent: "center",
  backgroundColor: "#5A9E7C",
  marginTop: 30,
},
synceGoogleBttn: {
  width: "80%",
  height:50,
  borderRadius: 25,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#C21010",
  flexDirection: "row"
},
bottomContainer: {
  flex: 1,
  justifyContent: 'center',
  marginBottom: 40,
  alignItems: "flex-end",
  flexDirection: "row"
},

});

export default LoginPage
