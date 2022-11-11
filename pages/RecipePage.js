import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Platform, Button } from 'react-native';
import {TouchableOpacity} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default function App() {
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
        
        <Text style={styles.nameFont}>ชื่ออาหาร</Text>
        <Text style={styles.plainText}>คำโปรย</Text>
        {/* Icon ที่ตองบอกเดี๋ยว Back มาใส่ */}
        <View>

        </View>
      </View>

      {/* LINE */}
      <View style={{ borderBottomColor: '#c7c7c7', borderBottomWidth: StyleSheet.hairlineWidth}}/>

      {/* วัตถุดิบ */}
      <View style={styles.content}>
        <Text style={styles.nameFont}>วัตถุดิบ</Text>
        <Text style={styles.plainText}>1. อะไร</Text>
      </View>

      {/* LINE */}
      <View borderBottomColor= '#c7c7c7' borderBottomWidth= {StyleSheet.hairlineWidth}/>

      {/* ขั้นตอนการทำ */}
      <View style={styles.content}>
        <Text style={styles.nameFont}>ขั้นตอนการทำ</Text>
        <Text style={styles.plainText}>1. ทำอะไร</Text>
      </View>

      <View style={styles.forButton}>
        <Button title="LET'S COOK!" color={'#83cc61'}/>
      </View>

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomNavigatorView}>
        <TouchableOpacity>
          <Octicon name={"home"} color="#fff" size={21} style={styles.bottomNavigatorIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome name={"fire"} color="#fff" size={21} style={styles.bottomNavigatorIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Octicon name={"heart"} color="#fff" size={21} style={styles.bottomNavigatorIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Octicon name={"person"} color="#fff" size={21} style={styles.bottomNavigatorIcon} />
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
    height: 50,
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
  }
});
