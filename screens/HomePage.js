import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from "react-native";
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

function AllNotes() {

    const [notes, setNotes] = useState([])
    const navigation = useNavigation()

    useFocusEffect(
        React.useCallback(() => {
            getNotes()
        }, [])
    )

    const getNotes = () => {
        AsyncStorage.getItem("NOTES").then((notes) => {
            setNotes(JSON.parse(notes))
        })
    }


    return (
        <View style={styles.listview}>
            <Text style={styles.newnote} >Your Notes</Text>
            <View style={{ height: 620 }}>
                <FlatList
                    data={notes}
                    renderItem={({ item }) => (
                        <Text style={styles.textstyle} onPress={() => navigation.navigate("Note", {
                            singleNote: item
                        })}>{item}</Text>
                    )
                    }
                />
            </View>
        </View>
    );
}



const HomeS = () => {
    return (
        <>
            <TopBar />
            <AllNotes />
        </>
    );
}

const styles = StyleSheet.create({

    listview: {
        maxHeight: 650
    },

    newnote: {
        margin: 6,
        marginTop: 15,
        marginLeft: 20,
        alignItems: 'center',
        color: "#6F58C9",
        fontSize: 30,
        fontWeight: 'bold'
    },


    textstyle: {
        marginTop: 5,
        fontSize: 20,
        paddingLeft: 15,
        paddingTop: 10,
        backgroundColor: "#7E78D2",
        borderRadius: 10,
        marginTop: 20,
        height: 50,
        marginHorizontal: 20,
        color: '#fff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
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

export default HomeS;
