import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { NativeRouter, Route, Routes } from "react-router-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import ToDoList from './src/components/ToDoList/ToDoList';
import FormTask from './src/components/FormTask/FormTask';

export default function App() {
  return (
    <>
      <NativeRouter>
        <StatusBar style="auto" />
        <Provider store={store}>
          <Routes>
            <Route path={"/"} element={<ToDoList />} />
            <Route path={"/formTask"} element={<FormTask />} />
          </Routes>
        </Provider>
      </NativeRouter>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
