import React, { useState } from "react";
import { Modal } from "react-native";

import { Button, IconButton, Input, Category } from "../../components";
import { CategorySelect } from "..";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsButtons,
} from "./styles";

export function Register() {
  const [selectedTransaction, setSelecetedTransaction] = useState("");
  const [modalCategory, setModalCategory] = useState(false);
  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });

  const handleSetTransactionSelected = (type: "income" | "outcome") => {
    setSelecetedTransaction(type);
  };

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome da Transação" />
          <Input placeholder="Valor da Transação" />
          <TransactionsButtons>
            <IconButton
              title="Entrada"
              type="income"
              onPress={() => handleSetTransactionSelected("income")}
              isActive={selectedTransaction === "income"}
            />
            <IconButton
              title="Saída"
              type="outcome"
              onPress={() => handleSetTransactionSelected("outcome")}
              isActive={selectedTransaction === "outcome"}
            />
          </TransactionsButtons>
          <Category
            onPress={() => setModalCategory(true)}
            title={category.name}
          />
        </Fields>
        <Button title="Enviar" />
      </Form>

      <Modal visible={modalCategory}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          onClose={() => setModalCategory(false)}
        />
      </Modal>
    </Container>
  );
}
