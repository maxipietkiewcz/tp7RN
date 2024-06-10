import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = () => {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Variable para almacenar los mensajes de error
    let errorMessages = [];

    // Validar el correo electrónico
    if (!correo) {
      errorMessages.push("El correo electrónico es obligatorio.");
    } else if (!emailRegex.test(correo)) {
      errorMessages.push("El formato del correo electrónico no es válido.");
    }

    // Validar la contraseña
    //Contraseña: No debe ser menor a 5 caracteres. Debe contener al menos: una letra mayúscula, una letra minúscula, y un símbolo (Ejemplo: @hOla123).
    if (!contraseña) {
      errorMessages.push("La contraseña es obligatoria.");
    } else if (contraseña.length < 5) {
      errorMessages.push("La contraseña debe tener al menos 8 caracteres.");
    } else if (contraseña.length > 20) {
      errorMessages.push("La contraseña debe tener menos de 20 caracteres.");
    } else if (!/[a-z]/.test(contraseña)) {
      errorMessages.push(
        "La contraseña debe tener al menos una letra minúscula."
      );
    } else if (!/[A-Z]/.test(contraseña)) {
      errorMessages.push(
        "La contraseña debe tener al menos una letra mayúscula."
      );
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(contraseña)) {
      errorMessages.push(
        "La contraseña debe tener al menos un siñombolo (Ejemplo: @hOla123)."
      );
    }

    // Mostrar mensajes de error si hay
    if (errorMessages.length > 0) {
      alert(errorMessages.join("\n"));
      return;
    }

    // Si todas las validaciones pasan, mostrar un mensaje de éxito
    console.log("Correo:", correo);
    console.log("Contraseña:", contraseña);
    alert("Inicio de sesión exitoso");
    // Redireccionar a la pantalla de inicio de sesión
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        label="Correo"
        value={correo}
        onChangeText={setCorreo}
        style={styles.input}
      />
      <TextInput
        label="Contraseña"
        value={contraseña}
        onChangeText={setContraseña}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Iniciar Sesión
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
