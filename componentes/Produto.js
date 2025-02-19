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
      <Text style={styles.label}>Quantidade:</Text>
      <Text style={styles.label}>Produto:</Text>
      <Text style={styles.label}>Valor:</Text>
      <View style={styles.inputRow}>
        <View style={[styles.botao, { margin: 10 }]}>
          <Button title="Limpar" onPress={limparCampos} />
        </View>
        <View style={styles.botao}>
          <Button title="Salvar" onPress={handleSalvar} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "flex-end",
    padding: 25,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    justifyContent: "flex-end",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 10,
    width: "80%",
    marginBottom: -10,
    marginLeft: 5,
    borderRadius: 5,
    marginTop: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
  botao: {
    marginTop: 20,
  },
});
