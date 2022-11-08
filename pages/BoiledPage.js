import { useNavigation } from '@react-navigation/native';
import React, {useState, useRef, useEffect } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, StatusBar,Button, Image} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const BoiledPage = () => {
    const navigation = useNavigation();

    const [seconds, setSeconds] = useState(30);
    const funRef = useRef(null);
    const [start, setStartToggle] = useState(true);

    const getRemaining = () => {
    const minute = Math.floor(seconds / 60);
    const second = seconds - minute * 60;
        return formatTime(minute) + ":" + formatTime(second) + " m";
    };

    const formatTime = (time) => {
        return ("0" + time).slice(-2);
    };
    let sec = seconds;
    useEffect(() => {
        // let timer = null;

        if (!start) {
            let sec = seconds;
            funRef.current = setInterval(() => {
            console.log("Seconds remaining:", sec);
            if (sec <= 0) {
                clearInterval(funRef.current);
            // setStartToggle(true);
            }
            setSeconds(sec--);
            }, 1000);
        } else {
        clearInterval(funRef.current);
        }
    }, [start]);

    const startTimer = () => {
        setSeconds(sec);
        setStartToggle(false);
    };

    const stopTimer = () => {
        setSeconds(sec);
        setStartToggle(true);
    };

    return(
        <View style = { styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('FriedPage', {})}>
                    <Octicon name={"arrow-left"} color="#fff" size={28} style={styles.backArrow} />
                </TouchableOpacity>
                {/*put header and header menu here*/}
                <Text style = {styles.headerText}>STEP X</Text>
                <Text style = {styles.headerText2}>ใส่ชื่อเมนูที่นี่</Text>
            </View>

            {/*put cooking methods*/}
            <Text style = {styles.text_cooking1}>อันนี้ใส่ขั้นตอนการทำอาหาร xxxxxxxxxxxxxxxxxxxxx</Text>

            {/*manage position of timer*/}
            {/*set timer here*/}
            <Text style={seconds ? styles.timerText : [styles.timerText, { color: "#C21010"}]}>
                {getRemaining(seconds)}</Text>
            
            {/*put picture here*/}
            <Image source = { require('../assets/icon.png')} style = {styles.picture}/>

            {/*set start button here*/}
            {start ? (
                <TouchableOpacity onPress={startTimer} style={styles.button} >
                    <Text style={styles.buttonText}>เริ่มจับเวลา</Text>
                </TouchableOpacity>
                
            ) : (
                <TouchableOpacity onPress={stopTimer} style={styles.button}>
                    <Text style={styles.buttonText}>หยุด</Text>
                </TouchableOpacity>
            )}

            {/*set green button and navigate screen here*/}
            <TouchableOpacity style={styles.buttonNextPage}>
                <Button
                color="#83CC61"
                title="ถัดไป       >"
                onPress={() => navigation.navigate('FriedPage', {})} />
            </TouchableOpacity>

            <View style={styles.bottomNavigatorView}>
                <TouchableOpacity>
                <Octicon name={"home"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <FontAwesome name={"fire"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Octicon name={"heart"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Octicon name={"person"} color="#fff" size={21} style={styles.bottomNavigatorIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        backgroundColor: "#C21010",
        width: '100%',
        height: 126,
        top: 0,
    },
    backArrow: {
        position: 'absolute',
        left: 30.04,
        top: 70,
        width: 18.96,
    },
    headerText: {
        position: 'absolute',
        justifyContent: 'center',
        height: 36,
        left: 152,
        top: 62,
        color: '#F5F5F5',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 36,
    },
    headerText2: {
        position: 'absolute',
        justifyContent: 'center',
        height: 21,
        left: 152,
        top: 92,
        color: '#F5F5F5',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 21,
    },
    text_cooking1: {
        position: 'absolute',
        width: 289,
        height: 48,
        left: 49,
        top: 157,
        fontSize: 16,
        // fontFamily: 'Poppins',
        //fontStyle: 'normal',
        //lineHeight: 24
    },
    timerText: { 
        position: 'absolute',
        color: "#C21010",
        height: 60,
        left: 121,
        top: 242,
        // fontFamily: 'Poppins',
        fontStyle: 'bold',
        fontSize: 40,
    },
    picture: {
        position: 'absolute',
        height: 128,
        width: 128,
        left: 116,
        top: 295,
        marginTop: 10,
    },
    button: {
        position: 'absolute',
        height: 41,
        left: 136,
        top: 430,
        width: 108,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        borderColor: '#C21010',
        borderWidth: 0.5,
        borderStyle: 'solid',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#C21010',
        fontWeight: "bold",
    },
    buttonNextPage: {
        position: 'absolute',
        width: 92,
        height: 35,
        left: 238,
        top: 678,
        borderRadius: 10,
        overflow: 'hidden',
    },
    bottomNavigatorView: {
        flew: 1,
        width: '100%',
        height: 65,
        backgroundColor: '#C21010',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
      },
      bottomNavigatorIcon: {
        marginTop: 20,
      }, 
})

export default BoiledPage

