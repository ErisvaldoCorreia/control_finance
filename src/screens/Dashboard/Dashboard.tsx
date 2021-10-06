import React from "react";

import {
  Container,
  Header,
  Photo,
  UserGreetings,
  UserInfo,
  UserName,
  User,
  UserWrapper,
  IconPower,
  CardContainer,
  ListTransactions,
  Title,
  TransactionsListCards,
} from "./styles";
import { Cards, Transaction, DataProps } from "../../components";

export interface DataListProps extends DataProps {
  id: string;
}

export function Dashboard() {
  const dataTransactions: DataListProps[] = [
    {
      id: "1",
      title: "Desenvolvimento de sites",
      amount: "R$ 1.200,00",
      type: "positive",
      category: { name: "Serviço", icon: "dollar-sign" },
      date: "05/10/2021",
    },
    {
      id: "2",
      title: "Hamburgueria",
      amount: "R$ 200,00",
      type: "negative",
      category: { name: "Alimentação", icon: "coffee" },
      date: "05/10/2021",
    },
    {
      id: "3",
      title: "Prestação da Casa",
      amount: "R$ 2.500,00",
      type: "negative",
      category: { name: "Casa", icon: "home" },
      date: "05/10/2021",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/31773949?v=4",
              }}
            />
            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Erisvaldo</UserName>
            </User>
          </UserInfo>
          <IconPower name="power" />
        </UserWrapper>
      </Header>

      <CardContainer>
        <Cards
          type="income"
          title="Entrada"
          amount="R$ 10.000,00"
          infoTransaction="Última entrada em 17 de jun!"
        />
        <Cards
          type="outcome"
          title="Saída"
          amount="R$ 2.000,00"
          infoTransaction="Última saída em 19 de jun!"
        />
        <Cards
          type="total"
          title="Total"
          amount="R$ 8.000,00"
          infoTransaction="Entre 17 de jun e 20 de jun!"
        />
      </CardContainer>

      <ListTransactions>
        <Title>Listagem de Transações:</Title>

        <TransactionsListCards
          data={dataTransactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Transaction data={item} />}
        />
      </ListTransactions>
    </Container>
  );
}
