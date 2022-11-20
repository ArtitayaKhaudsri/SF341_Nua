import React, {useState, useEffect} from 'react';
import { TouchableOpacity, View, StyleSheet, StatusBar, Text, FlatList} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import RecipeLabel from './RecipeLabel';

const Favorite = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  console.log(data);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({a:"a",b:"b"})
  };

  useEffect(() => {
    fetch('http://192.168.0.111:3410/api/recipes')
    //fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
    
  }, [])
  
  const navigation = useNavigation(true);
    return (
        <View style = { styles.container }>
          
            <StatusBar barStyle="light-content"/>
            <View style={styles.header}><Text style={styles.favtext}>Favorite</Text></View>

            <View style={{width: "100%",marginTop: 150}}>
              <FlatList
              data = {data}
              keyExtractor = {({id}, index) => id}
              renderItem = {({ item }) => {
                if(item.like){
                  return (
                  <RecipeLabel
                difficult={item.level}
                toPage = {item.topage}
                pic= {item.picture}
                title={item.menuName}
                description={item.title}
                time="ไม่เกิน 30 นาที"
                allergy= {item.foodAllergy}
                like={item.like}
                id={item.id}
                />)
                }
              }}
              />
              </View> 
            
            
            

            <View style={styles.bottomNavigatorView}>

              <TouchableOpacity onPress = {() => navigation.navigate('MainMenuPage', {})}>
                <Octicon name={"home"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <Octicon name={"flame"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
              </TouchableOpacity>

              <TouchableOpacity>
                <Octicon name={"heart-fill"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
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
      backgroundColor: '#F5F5F5',
    },
    header: {
      position: 'absolute',
      width: '100%',
      height: 126,
      marginTop: 0,
      backgroundColor: '#C21010'
    },

    favtext: {
      color: '#F5F5F5',
      fontSize: 28,
      fontWeight: 'bold',
      position: 'absolute',
      bottom: 35,
      left: 140
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
}
)

export default Favorite
