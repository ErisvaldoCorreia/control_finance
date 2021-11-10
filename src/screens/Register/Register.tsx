import React from "react";
import { Input } from "../../components";

import { Container, Header, Title, Form } from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Input placeholder="Nome da Transação" />
        <Input placeholder="Valor da Transação" />
      </Form>
    </Container>
  );
}
