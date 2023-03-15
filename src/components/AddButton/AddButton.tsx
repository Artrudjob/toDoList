import React, { FC } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface IProps {
    onPress: () => void
    title: string
}

const AddButton: FC<IProps> = ({ onPress, title }) => {

    return (
        <TouchableOpacity style={styles.addButton__container} onPress={onPress}>
            <Text style={styles.addButton__text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButton__container: {
        width: "80%",
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    addButton__text: {
        fontSize: 18,
        color: "#000000",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default AddButton