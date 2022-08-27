import React from "react";

import { Container, Amount, Title } from "./styles";

interface HistoryItemProps {
  color: string;
  title: string;
  amount: string;
}

export function HistoryItem({ color, title, amount }: HistoryItemProps) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
