import React, {useEffect,useState} from "react";
import {StyleSheet, Text, Image, View, Platform, Button, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import RecipeLabel from "./RecipeLabel";
import TopNavigator from "./TopNavigator";
import RecipeLabel2 from "./RecipeLabel2";
import {NavigationActions as navigation} from "react-navigation";
import {useNavigation} from "@react-navigation/native";




export default function App() {
  const [loading,setLoading]= useState(true);
  const [data,setData]= useState([]);
  console.log(data);
  const navigation = useNavigation();
  useEffect(()=>{
    fetch('http://192.168.0.111:3410/api/recipes')
        .then((response)=>response.json())
        .then((json) => {
          let data = json.filter(i => i.menuName === 'ไข่เจียวหมูสับ');
          setData(data)
        })
        .catch((error)=>console.error(error))
        .finally(()=>setLoading(false));
  },[])

  return (
    <View style={styles.container}>
      {/* TOP NAVIGATION */}
      <View style={styles.topNaigationView}>
        <Text style={styles.stepText}>STEP 1</Text>
        <FlatList
          data = {data}
          keyExtractor = {({id}, index) => id}
          renderItem = {({ item }) => (

              <Text style={styles.menuText}>

                {"\n"}{item.menuName}</Text>
          )}
        />
      </View>

      {/* BACK BUTTON */}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('RecipePage', {})}>
          <Octicon name={"arrow-left"} color="#fff" size={28} style={styles.backArrow} />
        </TouchableOpacity>
      </View>

      <View>
        <Image source={require('../assets/egg.png')} style={{width:180,height:180,paddingTop:"30%"}}/>
      </View>

      {/* NEXT BUTTON */}
      <View style={styles.forButton}>
        <Button title='ถัดไป  >' color={'#83cc61'}/>
      </View>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNavigatorView}>
        <TouchableOpacity onPress = {() => navigation.navigate('MainMenuPage', {})}>
          <Octicon name={"home"} color="#fff" size={21} style={styles.bottomNavigatorIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name={"fire"} color="#fff" size={21} style={styles.bottomNavigatorIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => navigation.navigate('Favorite', {})}>
          <Octicon name={"heart"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => navigation.navigate('Profile', {})}>
          <Octicon name={"person"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%'
  },
  
  topNaigationView: {
    flex: 1,
    width: '100%',
    top: 0,
    height: 126,
    backgroundColor: '#C21010',
    position: 'absolute',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center'
  },

  backArrow: {
    position: 'absolute',
    left: 30.04,
    top: 70,
    width: 18.96,
  },

  stepText: {
    top: 20,
    color: '#fff'
  },

  menuText: {
    top: 5,
    justifyContent:"center",
    color: '#fff'
  },

  forButton:{
    flex: 1,
    width: 95,
    height: 35,
    position: 'absolute',
    bottom: 90,
    right: 20,
    justifyContent: 'center',
    borderRadius: 100
  },

  bottomNavigatorView: {
    flex: 1,
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
  stepImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems:"center",

  }
});
