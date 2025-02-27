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
            <Text>Quantidade: {item.qtd}</Text>
            <Text>Produto: {item.produto}</Text>
            <Text>Preço: R$ {item.valor}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
