import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';
import RecipeLabel from './RecipeLabel';
import { NavigationContainer } from '@react-navigation/native';




const MainMenuPage = () => {

    const navigation = useNavigation();

    const [liked, setLiked] = useState(false);
    
    
  //  const isLiked = () => {
  //     setLiked(!liked)
  //   }

    return (
    <SafeAreaView style={styles.container}>
        
        <Image source={require('../assets/Logo_red.png')} style={styles.logo}/>
        <View style={{width: "100%", height: 1, backgroundColor: "#DFDFDF"}} />


        
        <ScrollView>
          <RecipeLabel
          difficult={2}
          pic= {require('../assets/food/kaomankai.png')}
          title="ข้าวมันไก่"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="ไก่"
          />

          <RecipeLabel
          difficult={2}
          pic= {require('../assets/food/clearSoup.jpg')}
          title="แกงจืดเต้าหู้ไข่"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="หมู"
          />

          <RecipeLabel
          difficult={2}
          pic= {require('../assets/food/clearSoup.jpg')}
          title="แกงจืดเต้าหู้ไข่"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="หมู"
          />

          <RecipeLabel
          difficult={2}
          pic= {require('../assets/food/clearSoup.jpg')}
          title="แกงจืดเต้าหู้ไข่"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="หมู"
          />

          <RecipeLabel
          difficult={2}
          pic= {require('../assets/food/clearSoup.jpg')}
          title="แกงจืดเต้าหู้ไข่"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="หมู"
          />
          
           

           
      </ScrollView>
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
    
  }
  });
  
  export default MainMenuPage





















































  // <TouchableOpacity 
  //          onPress={() => navigation.navigate('LoginPage', {})} /* change LoginPage to Recipe Page */
  //          style={{backgroundColor: "#E64848", 
  //          width: "80%", 
  //          height: 190, 
  //          alignSelf: "center", 
  //          borderRadius: 10,
  //          shadowColor: "#000",
  //          elevation: 5 /* only worked on andriod */

  //          /* below props only worked on ios */
  //         //  shadowOpacity: 100,
  //         //  shadowRadius: 4,
  //         //  shadowOffset: {
  //         //   width: 30,
  //         //   height: -5
  //         //  }
  //          }}>
            
  //            <Image source={require('../assets/food/clearSoup.jpg')} style = {{borderTopLeftRadius: 10, borderTopRightRadius: 10, alignSelf: "flex-start", width: "100%", height: 130}}/>
  //            <TouchableOpacity 
  //            onPress={() => isLiked()}
  //            style={{position: "absolute", marginTop: 18, marginLeft: "85%"}}
  //            >
  //              <Octicon name={liked? "heart-fill" : "heart"}
  //                        size={25} color="#fff"/>
  //            </TouchableOpacity>
            
  //           <View style={styles.viewTextStyle}>
  //               <Text style={styles.textStyle}>
  //                   แกงจืดเต้าหู้ไข่
  //               </Text>
  //           </View>

  //           <View>
  //               <Text style={styles.descriptionStyle}>เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น</Text>
  //           </View>

  //           <View style={styles.detailStyle}>
  //               <View style={{flexDirection: "row", alignItems: "flex-start"}}>
  //                   <FontAwesome name="fire" size={13} color="#fff" style={{marginLeft: 20, marginRight: 4}}/> 
  //                   <FontAwesome name="fire" size={13} color="#fff" style={{marginRight: 4}}/> 
  //                   <Octicon name="flame" size={13} color="#fff"/>
  //               </View>
            

  //               <View style={{flexDirection: "row", justifyContent: "flex-end", alignSelf: 'flex-end'}}> 
  //                   <FeatherIcon name="clock" size={13} color="#fff" style={{marginLeft: 165, marginRight: 4}}/>
  //                   <Text style={{color: "#fff", fontSize: 10, marginRight: 6}}>~30 นาที</Text>
  //                   <FeatherIcon name="info" size={13} color="#fff" style={{marginRight: 4}}/>
  //                   <Text style={{color: "#fff", fontSize: 10, marginRight: 80}}>หมู</Text>
  //               </View>
  //           </View>
            
  //          </TouchableOpacity>