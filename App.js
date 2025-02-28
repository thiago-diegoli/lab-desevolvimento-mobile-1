import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "./componentes/AsyncStorage";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.cabecalho}>Armazenamento Local</Text>
      <AsyncStorage />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  cabecalho: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
});
