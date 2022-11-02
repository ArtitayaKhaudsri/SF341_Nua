import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import RecipeLabel from './RecipeLabel';
import Octicon from 'react-native-vector-icons/Octicons';
import TopNavigator from './TopNavigator';


const MainMenuPage = () => {

    return (
    <SafeAreaView style={styles.container}>
        
        <Image source={require('../assets/Logo_red.png')} style={styles.logo}/>

        {/* Category Navigation tab */}
        <View style={{width: "100%", height: 1, backgroundColor: "#DFDFDF"}}/> 
        <TopNavigator selected = '1'/>
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
          <RecipeLabel 
          difficult={2}
          toPage = "LoginPage"
          pic= {require('../assets/food/kaomankai.png')}
          title="ข้าวมันไก่"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="ไก่"
           />

          <RecipeLabel
          difficult={2}
          toPage = "LoginPage"
          pic= {require('../assets/food/clearSoup.jpg')}
          title="แกงจืดเต้าหู้ไข่"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="หมู"
          />

          <RecipeLabel
          difficult={2}
          toPage = "LoginPage"
          pic= {require('../assets/food/clearSoup.jpg')}
          title="แกงจืดเต้าหู้ไข่"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="หมู"
          />

          <RecipeLabel
          difficult={2}
          toPage = "LoginPage"
          pic= {require('../assets/food/clearSoup.jpg')}
          title="แกงจืดเต้าหู้ไข่"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="หมู"
          />

          <RecipeLabel
          difficult={2}
          toPage = "LoginPage"
          pic= {require('../assets/food/clearSoup.jpg')}
          title="แกงจืดเต้าหู้ไข่"
          description="เมนูอาหารง่าย ๆ แต่ความอร่อยเหลือล้น"
          time="~30 นาที"
          allergy="หมู"
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