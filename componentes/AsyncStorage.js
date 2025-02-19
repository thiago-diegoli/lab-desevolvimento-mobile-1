import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import Storage from "@react-native-async-storage/async-storage";
import Produto from "./Produto";
import ListaRegistros from "./ListaRegistros";


export default function AsyncStorage() {
  const salvarNoAsyncStorage = async (qtd, produto, valor) => {
    try {
      const registro = {
        qtd,
        produto,
        valor,
      };

      const registrosExistentes = await Storage.getItem("registro");
      const registros = registrosExistentes
        ? JSON.parse(registrosExistentes)
        : [];

      registros.push(registro);

      await Storage.setItem("registros", JSON.stringify(registros));

      alert("Sucesso", "Registro salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar no AsyncStorage", error);
      alert("Erro", "Ocorreu um erro ao salvar os dadso.");
    }
  };

  return (
    <View>
      <Produto onSalvarDados={salvarNoAsyncStorage} />
      <ListaRegistros />
    </View>
  );
}
