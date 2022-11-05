import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-navigation';

const RegisterPage = () => {

    const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>

            {/* Back button to Login page */}
            <TouchableOpacity onPress = {() => navigation.navigate('LoginPage', {})}>
                <Icon style={{marginLeft: 30, marginTop: 40}} name="arrow-left" size={25} color="#fff"/>
            </TouchableOpacity>


            <Image source={require('../assets/Logo_white.png')} style={styles.logo} />
            <Text style={styles.welcomeText}>Let's have an account!</Text>
            
            {/* Input username, Password & Confirm password */}
            <View style={styles.inputView}>
              <TextInput  
                style={styles.inputText}
                placeholder="Username" 
                placeholderTextColor="#C7C7C7"/>
            </View>
  
            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Password" 
                placeholderTextColor="#C7C7C7"/>
            </View>

            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputText}
                placeholder="Confirm password" 
                placeholderTextColor="#C7C7C7"/>
            </View>
  
            {/* button to Main Page */}
            <TouchableOpacity style={styles.loginBttn} onPress = {() => navigation.navigate('MainMenuPage', {})}>
              <Text style={{color: "#fff", fontWeight: "bold", alignSelf: "center"}}>Register</Text>
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
              <Icon name="google" size={18} color="#fff"/>
              <Text style={{color: "#fff", fontWeight: "500", marginLeft: 10}}>Login with Google account</Text>
            </TouchableOpacity>
            </View> */}
      </View>
    </SafeAreaView>   
      
    );
  }
  
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: '#E64848',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    width: 160,
    height: 150,
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
  }
  });
  
  export default RegisterPage