import React, { useState } from "react";
import { View, StyleSheet, Text, Switch, Button } from "react-native";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("es");

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const changeLanguage = (lang) => setLanguage(lang);

  // Estilos para el modo claro
  const lightStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#fff",
    },
    title: {
      fontSize: 32,
      marginBottom: 16,
      textAlign: "center",
    },
    setting: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    text: {
      color: "#000",
    },
  });

  // Estilos para el modo oscuro
  const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#121212",
    },
    title: {
      fontSize: 32,
      marginBottom: 16,
      textAlign: "center",
      color: "#fff",
    },
    setting: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    text: {
      color: "#fff",
    },
  });

  // Seleccionar los estilos según el modo
  const styles = darkMode ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>
      <View style={styles.setting}>
        <Text style={styles.text}>Modo Oscuro</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
      <View style={styles.setting}>
        <Text style={styles.text}>Idioma</Text>
        <Button onPress={() => changeLanguage("es")}>Español</Button>
        <Button onPress={() => changeLanguage("en")}>Inglés</Button>
      </View>
      <View style={styles.setting}>
        <Text style={styles.text}>Idioma actual: {language}</Text>
      </View>
    </View>
  );
}
