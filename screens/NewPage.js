import React from "react";
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react/cjs/react.development";
import AsyncStorage from "@react-native-async-storage/async-storage";


const TopBar = () => {
  return (
    <View style={styles.bar}>
      <Image source={require('../assets/logosmall.png')} resizeMode='contain' style={{ width: 46, height: 48, tintColor: '#FFFF', alignSelf: "center", marginTop: 5 }} />
    </View>
  );
}


function Newbutton() {
  const navigation = useNavigation();
  const [note, setNote] = useState("")

  const saveNote = async () => {
    const value = await AsyncStorage.getItem("NOTES")
    const n = value ? JSON.parse(value) : []
    n.push(note)
    await AsyncStorage.setItem("NOTES", JSON.stringify(n))
      .then(() => navigation.navigate("Home"))
    setNote("")
  }

  return (
    <>
      <Text style={styles.newnote}>New Note</Text>
      <View>
        <TextInput multiline onChangeText={setNote} style={styles.input} value={note} placeholder={'Write something interesting...'} maxLength={60} />
        <View>
          <KeyboardAvoidingView style={styles.bottom}>
          </KeyboardAvoidingView>
        </View>
        <TouchableOpacity onPress={saveNote} style={styles.addNote}>
          <Image style={styles.add}
            source={require('../assets/add.png')} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const NewNote = () => {
  return (
    <>
      <TopBar />
      <Newbutton />
    </>
  );
}

const styles = StyleSheet.create({
  newnote: {
    margin: 10,
    marginLeft: 20,
    alignItems: 'center',
    color: "#6F58C9",
    fontSize: 30,
    fontWeight: 'bold'
  },
  btn: {
    alignSelf: 'center',
    marginTop: 250,
    marginBottom: 30,
    width: 260,
    height: 40,
    alignItems: 'center',
    backgroundColor: '#FFFF',
    color: "#7E78D2",
    borderWidth: 1
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36
  },
  input: {
    marginTop: 40,
    height: 100,
    borderWidth: 1,
    padding: 10,
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
  addNote: {
    marginLeft: 20,
    width: 100,
    height: 50
  },
  add: {
    width: 100,
    height: 55,
  },

});

export default NewNote;
