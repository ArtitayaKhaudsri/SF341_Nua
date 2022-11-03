import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Octicon from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const RecipeLabel = (props) => {
   const [liked, setLiked] = useState(false);
   const navigation = useNavigation();

   const isLiked = () => {
      setLiked(!liked)
    }
    
   let level = props.difficult
    console.log(level)
  
   let page = props.toPage

    return (
        <View>
         <TouchableOpacity onPress={() => navigation.navigate(page, {})}
            /* change LoginPage to Recipe Page */
           style={styles.labelStyle}>
            
            <Image source={props.pic} style = {styles.foodPicStyle}/>
            <TouchableOpacity 
            onPress={() => isLiked()}
            style={{position: "absolute", marginTop: 18, marginLeft: "85%"}}
            >
              <Octicon name={liked? "heart-fill" : "heart"}
                        size={25} 
                        color={liked? "#C21010" : "#fff"}
                        style={{shadowColor: "#000", elevation: 1}}/>
              {/* <Animated.View style={[StyleSheet.absoluteFillObject, outtlineStyle]}>
                <Octicon name="heart"
                        size={25} color="#fff"/>
              </Animated.View>

              <Animated.View style={fillStyle}>
                <Octicon name="heart-fill"
                        size={25} color="#fff"/>
              </Animated.View/> */}
            </TouchableOpacity>
            
            <View style={styles.viewTextStyle}>
                <Text style={styles.textStyle}>
                    {props.title}
                </Text>
            </View>

            <View>
                <Text style={styles.descriptionStyle}>{props.description}</Text>
            </View>

            <View style={styles.detailStyle}>
                <View style={{flexDirection: "row", alignItems: "flex-start"}}>
                    <FontAwesome name="fire" size={13} color={level>=1? "#fff" : "#CE4141"} style={{marginLeft: 20, marginRight: 4}}/> 
                    <FontAwesome name="fire" size={13} color={level>=2? "#fff" : "#CE4141"} style={{marginRight: 4}}/> 
                    <FontAwesome name="fire" size={13} color={level==3? "#fff" : "#CE4141"}/> 
                    {/* <Octicon name="flame" size={13} color="#fff"/> */}
                </View>
            

                <View style={{flexDirection: "row", justifyContent: "flex-end", alignSelf: 'flex-end'}}> 
                    <FeatherIcon name="clock" size={13} color="#fff" style={{marginLeft: 165, marginRight: 4}}/>
                    <Text style={{color: "#fff", fontSize: 10, marginRight: 6}}>{props.time}</Text>
                    <FeatherIcon name="info" size={13} color="#fff" style={{marginRight: 4}}/>
                    <Text style={{color: "#fff", fontSize: 10, marginRight: 80}}>{props.allergy}</Text>
                </View>
            </View>
            
           </TouchableOpacity>
           </View>
    );
}



export default RecipeLabel


const styles = StyleSheet.create({
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
    labelStyle: {
      backgroundColor: "#E64848", 
      width: "80%", 
      height: 190, 
      alignSelf: "center", 
      borderRadius: 10,
      shadowColor: "#000",
      elevation: 5, /* only worked on andriod */
      marginBottom: 20
          
       /* below props only worked on ios */
      //  shadowOpacity: 100,
      //  shadowRadius: 4,
      //  shadowOffset: {
      //   width: 30,
      //   height: -5
      //  }
    },
    foodPicStyle: {
      borderTopLeftRadius: 10, 
      borderTopRightRadius: 10, 
      alignSelf: "flex-start", 
      width: "100%", 
      height: 130
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
      justifyContent: 'space-between'
    }
    });