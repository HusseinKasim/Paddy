import React from "react";
import { StyleSheet, View, Image, KeyboardAvoidingView } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react/cjs/react.development";



const TopBar = () => {
    return (
        <View style={styles.bar}>
            <Image source={require('../assets/logosmall.png')} resizeMode='contain' style={{ width: 46, height: 48, tintColor: '#FFFF', alignSelf: "center", marginTop: 5 }} />
        </View>
    );
}

const Back = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/Back.png')} style={styles.back} />
        </TouchableOpacity>
    );
}


function EditS({ route }) {

    const { nn } = route.params
    const [notes, setNotes] = useState([])
    const navigation = useNavigation();
    const [note, setNote] = useState(nn)

    useFocusEffect(
        React.useCallback(() => {
            getNotes();
        }, [])
    );

    const getNotes = () => {
        AsyncStorage.getItem("NOTES").then((notes) => {
            setNotes(JSON.parse(notes));
        });

    };

    const deleteNote = async () => {
        const value = await AsyncStorage.getItem("NOTES")
        const n = value ? JSON.parse(value) : []
        n.push(note)
        await AsyncStorage.setItem("NOTES", JSON.stringify(n))
        const newNotes = await n.filter((note) => note !== nn);
        await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes))
            .then(() => navigation.navigate("Home"));
    };

    return (
        <>
            <TopBar />
            <Back />
            <View>
                <TextInput multiline style={styles.input} onChangeText={setNote} value={note} maxLength={60} />
                <View>
                    <KeyboardAvoidingView style={styles.bottom}>
                    </KeyboardAvoidingView>
                </View>
                <TouchableOpacity onPress={deleteNote} style={styles.addNote}>
                    <Image style={styles.add}
                        source={require('../assets/Editbutton.png')} />
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    newnote: {
        borderStyle: 'outset',
        borderRadius: 10,
        borderColor: "#6F58C9",
        margin: 10,
        marginTop: 20,
        alignSelf: 'center',
        color: "#6F58C9",
        fontSize: 24,
        fontWeight: 'bold'
    },
    newnote1: {
        borderStyle: 'outset',
        borderRadius: 10,
        borderColor: "#6F58C9",
        margin: 10,
        marginTop: 10,
        alignItems: 'center',
        color: "#6F58C9",
        fontSize: 18,
    },

    container: {
        borderStyle: 'outset',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#6F58C9",
        alignContent: 'center',
        height: 80,
        marginHorizontal: 20,
        marginTop: 90,
    },
    container1: {
        borderStyle: 'outset',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#6F58C9",
        alignContent: 'center',
        marginTop: 20,
        height: 420,
        marginHorizontal: 20,
        marginBottom: 20,
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

    deleteNote: {
        width: 50,
        height: 50
    },

    title: {
        marginTop: 80,
    },
    input: {
        marginTop: 40,
        height: 100,
        borderWidth: 1,
        padding: 10,
    },

    trash: {
        width: 50,
        height: 50,
    },
    back: {
        width: 55,
        height: 50,
        marginBottom: 40,
        paddingLeft: 10
    },
    addNote: {
        width: 120,
        height: 80,
    },
    add: {
        marginTop: 30,
        marginLeft: 20,
        width: 100,
        height: 55,
    },

});

export default EditS;
