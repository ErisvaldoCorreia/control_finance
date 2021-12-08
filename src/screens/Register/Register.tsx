import React, { useState } from "react";
import { Button, IconButton, Input, Category } from "../../components";

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
          <Category title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
