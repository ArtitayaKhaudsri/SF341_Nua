import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Platform, Button } from 'react-native';
import {TouchableOpacity} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  return (
    <View style={styles.container}>
      {/* TOP NAVIGATION */}
      <View style={styles.topNaigationView}>
        <Text style={styles.stepText}>STEP N</Text>
        <Text style={styles.menuText}>ชื่อเมนูอาหาร</Text>
      </View>

      {/* BACK BUTTON */}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('FriedPage', {})}>
          <Octicon name={"arrow-left"} color="#fff" size={28} style={styles.backArrow} />
        </TouchableOpacity>
      </View>

      {/* NEXT BUTTON */}
      <View style={styles.forButton}>
        <Button title='ถัดไป  >' color={'#83cc61'}/>
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
    height: 126,
    backgroundColor: '#C21010',
    position: 'absolute',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center'
  },

  backArrow: {
    position: 'absolute',
    left: 30.04,
    top: 70,
    width: 18.96,
  },

  stepText: {
    top: 20,
    color: '#fff'
  },

  menuText: {
    top: 5,
    color: '#fff'
  },

  forButton:{
    flex: 1,
    width: 95,
    height: 35,
    position: 'absolute',
    bottom: 90,
    right: 20,
    justifyContent: 'center',
    borderRadius: 100
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
