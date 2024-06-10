// components/AddTaskScreen.js
import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { TaskContext } from "../context/TaskContext";

export default function AddTaskScreen({ navigation }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [autor, setAutor] = useState("");
  const [fecha, setFecha] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleAddTask = () => {
    const nuevaTarea = {
      titulo,
      descripcion,
      autor,
      fecha,
    };
    addTask(nuevaTarea);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Tarea</Text>
      <TextInput
        label="Título"
        value={titulo}
        onChangeText={setTitulo}
        style={styles.input}
      />
      <TextInput
        label="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        style={styles.input}
      />
      <TextInput
        label="Autor"
        value={autor}
        onChangeText={setAutor}
        style={styles.input}
      />
      <TextInput
        label="Fecha"
        value={fecha}
        onChangeText={setFecha}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleAddTask} style={styles.button}>
        Agregar Tarea
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 16,
  },
});
