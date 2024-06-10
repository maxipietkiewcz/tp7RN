// components/ViewTaskScreen.js
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function ViewTaskScreen({ route, navigation }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.titulo}</Text>
      <Text style={styles.description}>{task.descripcion}</Text>
      <Text style={styles.author}>Autor: {task.autor}</Text>
      <Text style={styles.date}>Fecha: {task.fecha}</Text>
      <Button
        title="Editar Tarea"
        onPress={() => navigation.navigate("EditTask", { task })}
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
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  author: {
    fontSize: 16,
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    marginBottom: 16,
  },
});
