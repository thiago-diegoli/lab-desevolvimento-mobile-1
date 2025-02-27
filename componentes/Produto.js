import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { TextInputMask } from "react-native-masked-text";

export default function Produto({ onSalvarDados }) {
  const [qtd, setQtd] = useState("");
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");

  const handleSalvar = () => {
    if (qtd && produto && valor) {
      onSalvarDados(qtd, produto, valor);
      setQtd("");
      setProduto("");
      setValor("");
    } else {
      alert("Erro", "Por favor, preencha todos os campos.");
    }
  };

  const limparCampos = () => {
    setQtd("");
    setProduto("");
    setValor("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <Text style={styles.label}>Quantidade:</Text>
        <TextInput
          value={qtd}
          onChangeText={setQtd}
          style={[styles.input, { width: "25%" }]}
          maxLength={6}
          //placeholder="Quantidade"
        />
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.label}>Produto:</Text>
        <TextInput
          value={produto}
          onChangeText={setProduto}
          style={styles.input}
          placeholder="Nome do produto"
          maxLenght={20}
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Valor:</Text>
        <TextInputMask
          type={"money"} //Tipo de máscara para moeda
          value={valor}
          onChangeText={setValor}
          style={styles.input}
          placeholder="Valor do Produto"
          maxLenght={10}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputRow}>
        <View style={styles.botao}>
          <Button title="Limpar" onPress={limparCampos} color="#FF6347" />
        </View>
        <View style={styles.botao}>
          <Button title="Salvar" onPress={handleSalvar} color="#32CD32" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    padding: 20,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 15,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    width: "70%",
    borderRadius: 5,
    backgroundColor: "#FFF",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  botao: {
    width: "40%",
    marginTop: 20,
  },
});
