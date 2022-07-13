import { React, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Switch, Appearance } from "react-native";



const TopBar = () => {

  return (
    <View style={styles.bar}>
      <Image source={require('../assets/logosmall.png')} resizeMode='contain' style={{ width: 46, height: 48, tintColor: '#FFFF', alignSelf: "center", marginTop: 5 }} />
    </View>
  );
}

const AboutS = () => {

  return (
    <>
      <View>
        <View>
          <TopBar />
        </View>
        <Text style={{ color: "#7E78D2", marginTop: 40, marginHorizontal: 10, fontSize: 35, fontWeight: 'bold' }}> About</Text>
        <Text style={{ color: "#7E78D2", marginTop: 60, marginHorizontal: 20, fontSize: 25, fontWeight: 'bold' }}>
          Paddy is a Note-taking Android app made by Fahid AlKhatieb and Hussein Kasim for the Wireless Networks course.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  bar: {
    backgroundColor: '#6F58C9',
    width: '100%',
    height: 50
  },


  allNotes: {
    height: 620,
    marginTop: 8,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },

  bar: {
    backgroundColor: '#7E78D2',
    width: "100%",
    alignSelf: "center",
    alignContent: "center",
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    height: 60
  },


});

export default AboutS;