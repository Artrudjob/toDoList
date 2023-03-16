import { RootState } from "../store";

export const getListTasks = (state: RootState) => {
    return state.toDoList.listTask
}