import React, { FC } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";

const FormTask: FC = () => {

    const navigate = useNavigate()

    return (
        <View style={styles.formTask__container}>
            <View style={styles.formTask__header}>
                <TouchableOpacity onPress={() => navigate("/")}>
                    <Image style={styles.formTask__image} source={require("../../images/iconBack.png")} />
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Text>Заголовок</Text>
                    <TextInput placeholder="Напишите название задачи"/>
                </View>
                <View>
                    <Text>Описание</Text>
                    <TextInput placeholder="Напишите описание задачи"/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formTask__container: {
        flex: 1,
        backgroundColor: "#fde3da",
        alignItems: "center"
    },
    formTask__header: {
        flex: .1,
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#f7744a"
    },
    formTask__image: {
        height: 24,
        width: 24,
        marginTop: 15,
        marginLeft: 15,
    },
})

export default FormTask