import React from 'react';
import { TouchableOpacity, View, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import RecipeLabel from './RecipeLabel';

const Favorite = () => {
  const navigation = useNavigation(true);
    return (
        <View style = { styles.container }>
          
            <StatusBar barStyle="light-content"/>
            <View style={styles.header}><Text style={styles.favtext}>Favorite</Text></View>

            <View style={{width: "100%",marginTop: 150}}>
              <ScrollView>
              <RecipeLabel 
                difficult={2}
                toPage = "Profile"//ใส่เป็นหน้า profile ไปก่อนเฉยๆ
                pic= {require('../img/kaomankai.png')}
                title="ข้าวมันไก่"
                description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
                time="~30 นาที"
                allergy="ไก่"
                />

              <RecipeLabel 
                difficult={2}
                toPage = "Profile"
                pic= {require('../img/kaomankai.png')}
                title="ข้าวมันไก่"
                description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
                time="~30 นาที"
                allergy="ไก่"
                />

              <RecipeLabel 
                difficult={2}
                toPage = "Profile"
                pic= {require('../img/kaomankai.png')}
                title="ข้าวมันไก่"
                description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
                time="~30 นาที"
                allergy="ไก่"
                />
              </ScrollView>
              </View> 
            
            
            

            <View style={styles.bottomNavigatorView}>

              <TouchableOpacity>
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