import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../types/toDoListType";

interface IState {
    listTask: {
        title: string
        description: string
    }[]
}

const initialState: IState = {
    listTask: []
}

const toDoListSlice = createSlice({
    initialState,
    name: "toDoListSlice",
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const newTask = {
                title: action.payload.title,
                description: action.payload.description
            }

            state.listTask.push(newTask);
        }
    }
})

export const { reducer: toDoListReducer, actions: toDoListActions } = toDoListSlice;