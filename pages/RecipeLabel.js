import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Octicon from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

/* เป็นหน้า component ป้ายเมนูอาหาร มันจะรับค่ามาจากหน้าอื่นที่มาเรียกใช้มัน */
const RecipeLabel = (props) => {
    const navigation = useNavigation();
    const [liked, setLiked] = useState(props.like);

    const update =(like) => {
        fetch('http://192.168.0.111:3410/api/recipes/update/'+props.id+'/'+like)
            //fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => console.error(error))

    }

    const isLiked = () => {
        setLiked(!liked);
        update(!liked);
    }

    {/* เก็บ props ความยาก */}
    let level = props.difficult
    console.log(level)

    {/* เก็บ props ว่าจะลิงค์ไปหน้าไหน */}
    let page = props.toPage

    return (
        <View>
            <TouchableOpacity
                /* เอาค่าที่ได้จากการเก็บ props ลิงค์ไปหน้าสูตรอาหารนั้น ๆ */
                onPress={() => navigation.navigate('RecipePage', {})}
                style={styles.labelStyle}>

                {/* รูปอาหาร */}
                <Image source={props.pic == 1 ? require('../assets/food/kaidao.jpg') :
                    props.pic == 2 ? require('../assets/food/tomzab.jpg'):
                        props.pic == 3 ? require('../assets/food/kalumple.jpg') : require('../assets/food/Yummy-sea-vermicelli.jpg')
                }
                       style = {styles.foodPicStyle}/>

                {/* source={require('../assets/food/clearSoup.jpg')} */}

                {/* ปุ่มเพิ่มเข้า Favourite */}
                <TouchableOpacity
                    onPress={() => isLiked()}
                    style={{position: "absolute", marginTop: 18, marginLeft: "85%"}}>

                    <Octicon name={liked? "heart-fill" : "heart"}
                             size={25}
                             color={liked? "#C21010" : "#fff"}
                             style={{shadowColor: "#000", elevation: 1}}/>
                </TouchableOpacity>

                {/* ชื่ออาหาร */}
                <View style={styles.viewTextStyle}>
                    <Text style={styles.textStyle}>
                        {props.title}
                    </Text>
                </View>

                {/* คำอธิบายเกี่ยวกับอาหารสั้น ๆ */}
                <View>
                    <Text style={styles.descriptionStyle}> {props.description} </Text>
                </View>

                <View style={styles.detailStyle}>
                    {/* ระดับความยาก */}
                    <View style={{flexDirection: "row", alignItems: "flex-start"}}>
                        <FontAwesome name="fire" size={13} color={level>=1? "#fff" : "#CE4141"} style={{marginLeft: 20, marginRight: 4}}/>
                        <FontAwesome name="fire" size={13} color={level>=2? "#fff" : "#CE4141"} style={{marginRight: 4}}/>
                        <FontAwesome name="fire" size={13} color={level==3? "#fff" : "#CE4141"}/>
                        {/* <Octicon name="flame" size={13} color="#fff"/> */}
                    </View>


                    <View style={{flexDirection: "row", justifyContent: "flex-end", alignSelf: 'flex-end'}}>

                        {/* ใช้เวลาเท่าไหร่ */}
                        <FeatherIcon name="clock" size={13} color="#fff" style={{marginLeft: 165, marginRight: 4}}/>
                        <Text style={{color: "#fff", fontSize: 10, marginRight: 6}}> {props.time} </Text>

                        {/* อาหารที่อาจทำให้เกิดการแพ้ */}
                        <FeatherIcon name="info" size={13} color="#fff" style={{marginRight: 4}}/>
                        <Text style={{color: "#fff", fontSize: 10, marginRight: 80}}> {props.allergy} </Text>
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