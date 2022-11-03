import React, { Profiler } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation(false);
  
    return (
        <View style = { styles.container }>
          
          <TouchableOpacity> 
            <Image source={require('../img/vector.png')} style={styles.vector}/>
          </TouchableOpacity>

          <View> 
            <Text style={styles.accname}>Account name</Text>
  <Text>Test</Text>

          </View>

          <Image 
            style={{width: 390, height: 2, top: 80,
              left: 0}}
            source={require('../img/line.jpg')}
            />
        
          <View style={styles.Fav}>
              <Text style={{color: "#000000", fontWeight: "bold"}}>Favorite</Text>
              <Image style={{width: 35, height: 20, top: -15, left: -35}}
              source={require('../img/heart.png')}/>
          </View>

          <TouchableOpacity style={styles.succ} onPress = {() => navigation.navigate('Success', {})}>
              <Text style={{color: "#000000", fontWeight: "bold"}}>Success</Text>
              <Image style={{width: 20, height: 20, top: -18, left: -27}}
              source={require('../img/success.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutBttn} onPress = {() => navigation.navigate('Login', {})}>
            <Text style={{color: "#C21010", fontWeight: "bold", alignSelf: "center"}}>Log out</Text>
          </TouchableOpacity>

          <View style={styles.bottomNavigatorView}> 
            <TouchableOpacity>
              <Octicon name={"home"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
              <Octicon name={"flame"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
            </TouchableOpacity>

            <TouchableOpacity onPress = {() => navigation.navigate('Favorite', {})}>
              <Octicon name={"heart"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
              <Octicon name={"person-fill"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
            </TouchableOpacity>

          </View>
        </View>
        
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
        top: 110,
        left: 100,
      },

      succ: {
        fontSize: 15,
        color: '#000000',
        top: 120,
        left: 100,
        
      },
      logoutBttn: {
        fontSize: 15,
        color: '#FF7F00',
        top: 213,
        left: 0,
        
      },

    })    

export default Profile
