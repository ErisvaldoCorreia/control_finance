import React from "react";
import { Button, IconButton, Input } from "../../components";

import { Container, Header, Title, Form, Fields } from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome da Transação" />
          <Input placeholder="Valor da Transação" />
          <IconButton title="Entrada" type="income" />
          <IconButton title="Saída" type="outcome" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
