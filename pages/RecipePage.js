import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from "react";
import {StyleSheet, Text, Image, View, Platform, Button, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
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
  const handlerfav = async () => {
      try {

          await fetch('http://192.168.0.111:3410/fav', requestOptions)
              .then(response => {
                  response.json()
                      .then(data => {
                          console.log(data);
                      });
                })
        } catch (error) {
            console.error(error);
        }
    };

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
      <View style={styles.topNaigationView}/>
      {/* BACK BUTTON */}
      <View >
        {/* ใส่เป็นไอคอนที่แนบไปให้ */}
      </View>

      {/* TITLE CONTAINER */}
      {/* ชื่ออาหาร */}
      <View style={styles.topContent}>
        {/* ใส่รูปตรงนี้ */}
          <FlatList
              data = {data}
              keyExtractor = {({id}, index) => id}
              renderItem = {({ item }) => (
                  <RecipeLabel2
                      difficult={item.level}
                      pic= {item.picture}
                      title={item.menuName}
                      description={item.title}
                      time="ไม่เกิน 30 นาที"
                      allergy= {item.foodAllergy}

                  />
              )}
          />
        {/* Icon ที่ตองบอกเดี๋ยว Back มาใส่ */}
        <View>

        </View>
      </View>

      {/* LINE */}
      <View style={{ borderBottomColor: '#c7c7c7', borderBottomWidth: StyleSheet.hairlineWidth}}/>

      {/* วัตถุดิบ */}
      <View style={styles.rawMaterials}>
      <Text style={{paddingTop: 10,paddingLeft:10}}>วัตถุดิบ </Text>
      </View>
      {loading ? <Text> Loading...</Text> : (
          <View style = {{padding: 10}}>

            <FlatList
                data = {data}
                keyExtractor = {({id}, index) => id}
                renderItem = {({ item }) => (
                    <Text>{item.rawMaterial}</Text>



                )}
            />
          </View>
      )}

      {/* LINE */}
      <View borderBottomColor= '#c7c7c7' borderBottomWidth= {StyleSheet.hairlineWidth}/>

      {/* ขั้นตอนการทำ */}
      <View style={{paddingTop:10,paddingLeft:10}}>
        <Text style={styles.rawMaterials}>ขั้นตอนการทำ</Text>
      </View>
      <View style = {{padding: 10}}>

        <FlatList
            data = {data}
            keyExtractor = {({id}, index) => id}
            renderItem = {({ item }) => (
                <Text>1.{item.step1}{"\n"}
                  2.{item.step2}{"\n"}
                  3.{item.step3}{"\n"}
                  4.{item.step4}{"\n"}
                </Text>

            )}
        />
      </View>


      <View style={styles.forButton} onPress = {() => navigation.navigate('ProcessNoClock', {})}>
        <Button title="LET'S COOK!" color={'#83cc61'}/>
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
    height: 25,
    backgroundColor: '#C21010',
    position: 'absolute'
  },

  topContent: {
    flex: 1,
    top: 50,
    flexWrap: 'wrap'
  },

  content: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    flexWrap: 'wrap'
  },

  nameFont: {
    marginLeft: 30
  },

  plainText: {
    marginTop: 8,
    marginLeft: 50
  },

  forButton:{
    flex: 1,
    bottom: 30,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
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
  menuNames: {
        padding: 10,
        fontSize: 20,
        fontWeight:'4000'
  },
    titles: {
        padding: 5,
        fontSize: 15
    },
    rawMaterials: {
        fontSize: 15
    }

});
