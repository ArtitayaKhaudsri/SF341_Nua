import { StatusBar } from 'expo-status-bar';
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
        <View>

        </View>
        {/* ใส่เป็นไอคอนที่แนบไปให้ */}
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('MainMenuPage', {})}>
                <MaterialCommunityIcons name={"arrow-left-circle"} color="#000" size={28} style={styles.backArrow} />
            </TouchableOpacity>
        </View>

      {/* TITLE CONTAINER */}
      {/* ชื่ออาหาร */}
      <View style={styles.topContent}>
        {/* ใส่รูปตรงนี้ */}
          <FlatList
              data = {data}
              keyExtractor = {({id}, index) => id}
              renderItem = {({ item }) => (
                  <FlatList>





                  </FlatList>
              )}
          />
        {/* Icon ที่ตองบอกเดี๋ยว Back มาใส่ */}

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
                <Text>1.{item.steps1}{"\n"}
                  2.{item.steps2}{"\n"}
                  3.{item.steps3}{"\n"}
                  4.{item.steps4}{"\n"}
                </Text>

            )}
        />
      </View>


      <View style={styles.forButton} >
        <Button title="LET'S COOK!" color={'#83cc61'} onPress = {() => navigation.navigate('ProcessNoClock', {})}/>
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
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    viewTextStyle: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 93
    },
    textStyle: {
        color: "#000",
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
    labelStyle: {
        backgroundColor: "#E64848",
        width: "80%",
        height: 200,
        borderRadius: 10,
        shadowColor: "#000",
        elevation: 5, /* only worked on andriod */
        marginBottom: 20,
        paddingBottom:30

        /* below props only worked on ios */
        //  shadowOpacity: 100,
        //  shadowRadius: 4,
        //  shadowOffset: {
        //   width: 30,
        //   height: -5
        //  }
    },
    foodPicStyle: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        alignSelf: "flex-start",
        width: "100%",
        height: 130
    },
    descriptionStyle: {
        color: "#000",
        marginLeft: 20,
        marginTop: 10,
        fontSize: 12
    },
    detailStyle: {
        flexDirection: "row",
        marginTop: 7,
        justifyContent: 'space-between'
    }

});
