import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Storage from "@react-native-async-storage/async-storage";

export default function ListaRegistros() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const carregarRegistros = async () => {
      try {
        const registrosExistentes = await Storage.getItem("registros");
        if (registrosExistentes) {
          setRegistros(JSON.parse(registrosExistentes));
        }
      } catch (error) {
        console.error("Erro ao carregar os registros", error);
      }
    };

    carregarRegistros();
  }, []);

  const salvarRegistro = async (qtd, produto, valor) => {
    try {
      const novoRegistro = { qtd, produto, valor };
      const registrosAtualizados = [...registros, novoRegistro];
      setRegistros(registrosAtualizados);
      await Storage.setItem("registros", JSON.stringify(registrosAtualizados));
    } catch (error) {
      console.error("Erro ao salvar o registro", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Registros</Text>
      <FlatList
        data={registros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Quantidade: {item.qtd}</Text>
            <Text style={styles.itemText}>Produto: {item.produto}</Text>
            <Text style={styles.itemText}>Preço: R$ {item.valor}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
});
