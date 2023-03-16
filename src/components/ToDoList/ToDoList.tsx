import React, { FC, useEffect } from "react";
import AddButton from "../AddButton/AddButton";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigate } from "react-router-native";
import { useAppSelector } from "../../store/hooks";
import { getListTasks } from "../../store/selectors/toDoListSelectors";

const ToDoList: FC = () => {

    const navigate = useNavigate();
    const listTasks = useAppSelector(getListTasks);

    function openFormTask() {
        navigate("/formTask");
    }

    function getTaskElements(): JSX.Element[] {
        return listTasks.map((task, index) => {
            return (
                <View style={styles.taskBox} key={index}>
                    <Text style={styles.taskTitle}>{task.title}</Text>
                    <Text>{task.description}</Text>
                </View>
            )
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput style={styles.title} editable={false} value={"Список задач"} />
            </View>
                <ScrollView>
                    {getTaskElements()}
                </ScrollView>
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
    },
    taskBox: {
        width: "100%",
        backgroundColor: "#ffaf8c",
        borderRadius: 5,
        marginTop: 15
    },
    taskTitle: {
        fontFamily: "Arial",
        fontSize: 28,
        fontWeight: "bold",
    }
})

export default ToDoList