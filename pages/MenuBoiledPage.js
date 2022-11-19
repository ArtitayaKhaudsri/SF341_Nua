import {React, useEffect, useState} from 'react';
import { View, Text,StyleSheet, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import RecipeLabel from './RecipeLabel';
import Octicon from 'react-native-vector-icons/Octicons';
import TopNavigator from './TopNavigator';
import { useNavigation } from '@react-navigation/native';

const MenuBoiledPage = () => {

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('http://192.168.1.34:3410/api/recipes')
    //fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      let data = json.filter(i => i.type === 'boiled');
      setData(data)
    })
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
    
  }, [])

    return (
    <SafeAreaView style={styles.container}>
        
        <Image source={require('../assets/Logo_red.png')} style={styles.logo}/>

        {/* Category Navigation tab */}
        <View style={{width: "100%", height: 1, backgroundColor: "#DFDFDF"}} /> 
        <TopNavigator selected = '2'/>
        <View style={{width: "100%", height: 1, backgroundColor: "#DFDFDF", marginBottom: 30}}/> 


        {/* Recipe order 
            แต่ละ Recipe จะรับค่าข้อมูลเข้าไปใส่ใน component ที่อยู่อีกไฟล์ (RecipeLabel.js)
            difficult={ระดับความยาก มี 3 ระดับ (1, 2, 3)}
            toPage = "ชื่อหน้าที่จะลิงค์ไป"
            pic= {ที่อยู่รูปภาพ}
            title="ชื่ออาหาร"
            description="คำอธิบายสั้น ๆ เกี่ยวกับอาหาร"
            time="เวลาโดยประมาณที่ใช้ในการทำอาหาร"
            allergy="อาหารที่แพ้ ไม่มีใส่ -"
        */}
        

        <ScrollView>
          {loading ? <Text> Loading...</Text> : (
            <View style = {{paddingBottom: 60}}>
              
              <FlatList
              data = {data}
              keyExtractor = {({id}, index) => id}
              renderItem = {({ item }) => (
                
                <RecipeLabel
                difficult={item.level}
                toPage = {item.topage}
                pic= {item.picture}
                title={item.menuName}
                description={item.title}
                time="ไม่เกิน 30 นาที"
                allergy= {item.foodAllergy}
                />
              
              )}
              />
            </View>
          )}
        </ScrollView>

      {/* Bottom navigator */}
      <View style={styles.bottomNavigatorView}>
        <TouchableOpacity onPress = {() => navigation.navigate('MainMenuPage', {})}>
        <Image source={require('../assets/home-fill.png')} style={{width: 20, height: 20, marginTop: 20}}/>
        </TouchableOpacity>

        <TouchableOpacity>
        <Octicon name={"flame"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => navigation.navigate('Favorite', {})}>
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
    justifyContent: 'flex-start',
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

