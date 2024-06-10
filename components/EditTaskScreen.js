// components/EditTaskScreen.js
import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { TaskContext } from "../context/TaskContext";

export default function EditTaskScreen({ route, navigation }) {
  const { task } = route.params;
  const [titulo, setTitulo] = useState(task.titulo);
  const [descripcion, setDescripcion] = useState(task.descripcion);
  const [autor, setAutor] = useState(task.autor);
  const [fecha, setFecha] = useState(task.fecha);
  const { editTask } = useContext(TaskContext);

  const handleEditTask = () => {
    const tareaEditada = {
      ...task,
      titulo,
      descripcion,
      autor,
      fecha,
    };
    editTask(tareaEditada);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Tarea</Text>
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
      <Button mode="contained" onPress={handleEditTask} style={styles.button}>
        Guardar Cambios
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
