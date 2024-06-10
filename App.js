import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TaskProvider } from "./context/TaskContext";
import HomeScreen from "./components/HomeScreen";
import TaskListScreen from "./components/TaskListScreen";
import AddTaskScreen from "./components/AddTaskScreen";
import EditTaskScreen from "./components/EditTaskScreen";
import ViewTaskScreen from "./components/ViewTaskScreen";
import LoginScreen from "./components/LoginScreen";
import SettingsScreen from "./components/SettingsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TaskList" component={TaskListScreen} />
          <Stack.Screen name="AddTask" component={AddTaskScreen} />
          <Stack.Screen name="EditTask" component={EditTaskScreen} />
          <Stack.Screen name="ViewTask" component={ViewTaskScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
