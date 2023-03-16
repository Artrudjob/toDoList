import React, { FC, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import { useAppDispatch } from "../../store/hooks";
import { toDoListActions } from "../../store/slice/toDolListSlice";
import AddButton from "../AddButton/AddButton";

const FormTask: FC = () => {

    const [titleInput, setTitleInput] = useState<string>("");
    const [descriptionInput, setDescriptionInput] = useState<string>(""); 
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function addTask() {
        dispatch(toDoListActions.addTask({ title: titleInput, description: descriptionInput }));
    }

    return (
        <View style={styles.formTask__container}>
            <View style={styles.formTask__header}>
                <TouchableOpacity onPress={() => navigate("/")}>
                    <Image style={styles.formTask__image} source={require("../../images/iconBack.png")} />
                </TouchableOpacity>
                <Text style={styles.formTask__title}>Новая задача</Text>
            </View>
            <View style={styles.formTask__form}>
                <View>
                    <Text style={styles.formTask__text}>Заголовок:</Text>
                    <TextInput style={styles.formTask__input}
                               placeholder="Напишите название задачи" 
                               onChangeText={newTitle => setTitleInput(newTitle)}
                               defaultValue={titleInput} 
                    />
                </View>
                <View>
                    <Text style={styles.formTask__text}>Описание:</Text>
                    <TextInput style={styles.formTask__input}
                               placeholder="Напишите описание задачи"  
                               onChangeText={newDescription => setDescriptionInput(newDescription)}
                               defaultValue={descriptionInput} 
                    />
                </View>
            </View>
            <AddButton title="Сохранить" onPress={addTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    formTask__container: {
        flex: 1,
        backgroundColor: "#fde3da",
        alignItems: "center",
    },
    formTask__header: {
        flex: .1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        backgroundColor: "#f7744a"
    },
    formTask__title: {
        fontFamily: "Arial",
        fontSize: 34,
        fontWeight: "bold",
        paddingTop: 20,
        paddingLeft: 40,
    },
    formTask__image: {
        height: 24,
        width: 24,
        marginTop: 28,
        marginLeft: 15,
    },
    formTask__form: {
        flex: .8,
        width: "100%",
        justifyContent: "flex-start",
    },
    formTask__text:  {
        fontFamily: "Arial",
        fontSize: 28,
        paddingTop: 25,
        marginLeft: 15
    },
    formTask__input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    }
})

export default FormTask