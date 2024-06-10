// components/TaskListScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import tasks from "../data/tasks.json";

export default function TaskListScreen({ navigation }) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(tasks);
  }, []);

  const renderTask = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ViewTask", { task: item })}
      style={styles.task}
    >
      <Text style={styles.title}>{item.titulo}</Text>
      <Text>{item.descripcion}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={taskList}
        renderItem={renderTask}
        keyExtractor={(item) => item.titulo}
      />
      <Button
        title="Agregar Tarea"
        onPress={() => navigation.navigate("AddTask")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  task: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
