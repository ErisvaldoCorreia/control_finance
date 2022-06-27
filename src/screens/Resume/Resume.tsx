import React from "react";
import { HistoryItem } from "../../components";

import { Container, Header, Title } from "./styles";

export function Resume() {
  return (
    <Container>
      <Header>
        <Title>Resumo de gastos</Title>
      </Header>

      <HistoryItem title="Compras" amount="R$ 150.50" color="red" />
    </Container>
  );
}
