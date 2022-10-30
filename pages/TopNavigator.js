import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';


const TopNavigator = (props) => {
    const navigation = useNavigation();
    let onSelected = props.selected
    console.log(onSelected)
    
    return(
        <View style={styles.topNavigatorView}>
          <TouchableOpacity onPress = {() => navigation.navigate('MainMenuPage', {})}>
            <Text style={ onSelected == 1? styles.topTextSelected:styles.topTextNormal}>ทั้งหมด</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('MenuBoiledPage', {})}>
            <Text style={onSelected == 2? styles.topTextSelected:styles.topTextNormal}>ต้ม</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('MenuStirFryPage', {})}>
            <Text style={onSelected == 3? styles.topTextSelected:styles.topTextNormal}>ผัด</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('MenuDeepFriedPage', {})}>
            <Text style={onSelected == 4? styles.topTextSelected:styles.topTextNormal}>ทอด</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() => navigation.navigate('MenuOtherPage', {})}>
            <Text style={onSelected == 5? styles.topTextSelected:styles.topTextNormal}>อื่น ๆ</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    topNavigatorView: {
      flew: 1,
      width: '100%',
      height: 50,
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      alignItems: "center"
    },
    topTextNormal: {
      color: "#C7C7C7"
    },
    topTextSelected: {
      color: "#5A9E7C"
    }
});

export default TopNavigator
