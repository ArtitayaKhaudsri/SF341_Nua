import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';
import RecipeLabel from './RecipeLabel';
import Octicon from 'react-native-vector-icons/Octicons';
import TopNavigator from './TopNavigator';

const MenuBoiledPage = () => {

    const navigation = useNavigation();

    return (
    <SafeAreaView style={styles.container}>
        
        <Image source={require('../assets/Logo_red.png')} style={styles.logo}/>

        
        <View style={{width: "100%", height: 1, backgroundColor: "#DFDFDF"}} /> 
        <TopNavigator selected = '3'/>
        <View style={{width: "100%", height: 1, backgroundColor: "#DFDFDF", marginBottom: 30}}/> 


       
        <ScrollView>
          <RecipeLabel 
          difficult={2}
          pic= {require('../assets/food/kaomankai.png')}
          title="ผัด"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="ไก่"
          />

      </ScrollView>

      {/* Bottom navigator */}
      <View style={styles.bottomNavigatorView}>
        <TouchableOpacity>
        <Image source={require('../assets/home-fill.png')} style={{width: 20, height: 20, marginTop: 20}}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <Octicon name={"flame"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <Octicon name={"heart"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <Octicon name={"person"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
        </TouchableOpacity>

      </View>

    </SafeAreaView>    
      
    );
  }
  
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignSelf: 'center'
  },
  viewTextStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 93
  }
  ,
  textStyle: {
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: {
        width: 1,
        height: 2
    },
    textShadowRadius: 6,
    shadowOpacity: 0.1,
    fontSize: 23,
    fontWeight: "500"
  },
  descriptionStyle: {
    color: "#fff",
    marginLeft: 20,
    marginTop: 10,
    fontSize: 12
  },
  detailStyle: {
    flexDirection: "row",
    marginTop: 7,
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
  }
  });
  
  export default MenuBoiledPage
























