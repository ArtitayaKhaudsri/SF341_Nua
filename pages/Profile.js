import React, { useEffect,useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView} from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = () => {

    const navigation = useNavigation();

    var c = 0;
  const [count, setCount] = useState(0);

  const [userName, setUserName] = useState("")

  useEffect(() => {
    fetch('http://192.168.1.37:3410/api/recipes')
    //fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {json.forEach(element => {
      
      if(element.like){
        console.log("x")
        c = c+1;
      }
    });setCount(c);})
    .catch((error) => console.error(error));
      try {
        AsyncStorage.getItem('username').then((value)=>{
          console.log(value);
          setUserName(value);
        });
      } catch (error) {
        console.log(error);
      }   
  }, [])
    
    return (
      <SafeAreaView style = { styles.container }>
        <View>
          <TouchableOpacity> 
            <Image source={require('../assets/vector.png')} style={styles.vector}/>
          </TouchableOpacity>
          <Text style={styles.accname}>{userName}</Text>
        </View>

        <View borderBottomColor= '#c7c7c7' borderBottomWidth= {StyleSheet.hairlineWidth} style={{top:"8%"}}/>

        <View>
            <Octicon name={"heart-fill"} color="#C21010" size={21} style={{paddingLeft: "20%", paddingTop:"25%"}}>
                <View style={styles.Fav}>
                    <Text>Favourite({count})</Text>
                </View>
            </Octicon>
        </View>

        <View>
            <TouchableOpacity style={styles.logoutBttn} onPress={() => onLogout()} >
                <Text style={{color: "#C21010", fontWeight: "bold", alignSelf: "center"}}>Log out</Text>
            </TouchableOpacity>
        </View>
          <View style={styles.bottomNavigatorView}>
              <TouchableOpacity onPress = {() => navigation.navigate('MainMenuPage', {})}>
                  <Image source={require('../assets/home.png')} style={{width: 20, height: 20, marginTop: 20}}/>
              </TouchableOpacity>

              <TouchableOpacity >
                  <Octicon name={"flame"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
              </TouchableOpacity>

              <TouchableOpacity onPress = {() => navigation.navigate('Favarite', {})}>
                  <Octicon name={"heart"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
              </TouchableOpacity>

              <TouchableOpacity onPress = {() => navigation.navigate('Profile', {})}>
                  <Octicon name={"person"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
              </TouchableOpacity>

          </View>

      </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        
      },
      bottomNavigatorView: {
        flew: 1,
        width: '100%',
        height: 65,
        backgroundColor: '#C21010',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-evenly',
        flexDirection: 'row'
      },
      bottomNavigatorIcon: {
        marginTop: 20
      },
      
      vector:{
        width: 101,
        height: 101,
        backgroundColor: '#F5F5F5',
        top: 70,
        left: 60
       },

       accname: {
        fontSize: 20,
        color: '#000000',
        top: 5,
        left: 200,

       },
       
       Fav: {
        fontSize: 15,
        color: '#000000',
        paddingLeft:5
      },

      succ: {
        fontSize: 15,
        color: '#000000',
        paddingLeft:25
      },
      logoutBttn: {
        left:"42%",
        width:"20%",
        fontSize: 15,
        color: '#C21010',
        borderColor:"#C21010",
        borderWidth:2,
        borderRadius: 50,
        top: "50%",
        height: "20%"
      },

    })    

export default Profile
