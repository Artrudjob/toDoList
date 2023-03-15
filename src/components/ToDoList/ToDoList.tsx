import React, { FC } from "react";
import AddButton from "../AddButton/AddButton";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";

const ToDoList: FC = () => {

    const navigate = useNavigate();

    function openFormTask() {
        navigate("/formTask");
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput style={styles.title} editable={false} value={"Список задач"} />
            </View>
            <>
                <ScrollView></ScrollView>
            </>
            <AddButton title="Добавить задачу"  onPress={openFormTask}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fde3da",
        alignItems: "center"
    },
    header: {
        flex: .12,
        width: "100%",
        justifyContent: "center",
        backgroundColor: "#f7744a"
    },
    title: {
        fontFamily: "Arial",
        fontSize: 34,
        fontWeight: "bold",
        paddingTop: 15,
        paddingLeft: 15,
    }
})

export default ToDoList