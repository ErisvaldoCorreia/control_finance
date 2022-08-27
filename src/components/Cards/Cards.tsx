import React from "react";
import {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Amount,
  InfoTransactions,
} from "./styles";

export type TypeCard = "income" | "outcome" | "total";

interface PropsCards {
  type: TypeCard;
  title: string;
  amount: string;
  infoTransaction: string;
}

const iconName = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
  total: "dollar-sign",
};

export function Cards({ type, title, amount, infoTransaction }: PropsCards) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={iconName[type]} type={type} />
      </Header>

      <Content>
        <Amount type={type}>{amount}</Amount>
        <InfoTransactions type={type}>{infoTransaction}</InfoTransactions>
      </Content>
    </Container>
  );
}
