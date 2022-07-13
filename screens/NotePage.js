import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useState } from "react/cjs/react.development";
import AsyncStorage from "@react-native-async-storage/async-storage";


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

function NoteS({ route }) {

    const [notes, setNotes] = useState([])
    const { singleNote } = route.params
    const navigation = useNavigation()

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
        const newNotes = await notes.filter((note) => note !== singleNote);
        await AsyncStorage.setItem("NOTES", JSON.stringify(newNotes))
            .then(() => navigation.navigate("Home"));
    };

    return (
        <View style={{ backgroundColor: '#fff', height: '100%' }}>
            <TopBar />
            <View style={styles.title}>
                <Back />
            </View>
            <View style={styles.container1}>
                <Text style={styles.newnote1} value={singleNote}>
                    {singleNote}
                </Text>
            </View>
            <TouchableOpacity onPress={deleteNote} style={styles.deleteNote}>
                <Image style={styles.trash}
                    source={require('../assets/Trash.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Edit", {
                nn: singleNote
            })} style={styles.editNote}>
                <Image style={styles.edit}
                    source={require('../assets/Edit.png')} />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    newnote: {
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
        borderRadius: 10,
        borderColor: "#6F58C9",
        margin: 10,
        marginTop: 10,
        alignItems: 'center',
        color: "#6F58C9",
        fontSize: 18,
    },


    container1: {
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
        width: 100,
        height: 80
    },

    title: {
    },

    trash: {
        marginTop: 10,
        marginLeft: 20,
        width: 50,
        height: 50,
    },
    back: {
        marginTop: 10,
        marginLeft: 20,
        width: 55,
        height: 50,
    },
    editNote: {
        width: 100,
        height: 80
    },
    edit: {
        marginTop: 10,
        marginLeft: 20,
        width: 50,
        height: 50,
    },

});

export default NoteS;