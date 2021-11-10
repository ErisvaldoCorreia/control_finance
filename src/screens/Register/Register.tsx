import React from "react";
import { Button, Input } from "../../components";

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
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
