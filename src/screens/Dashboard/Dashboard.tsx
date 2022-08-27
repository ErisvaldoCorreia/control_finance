import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
import { useFocusEffect } from "@react-navigation/native";

export interface DataListProps extends DataProps {
  id: string;
}

interface TransactionsProps {
  amount: string;
  lastTransaction: string;
}

interface TransactionsData {
  income: TransactionsProps;
  outcome: TransactionsProps;
  total: TransactionsProps;
}

export function Dashboard() {
  const [dataTransactions, setDataTransactions] = useState<DataListProps[]>();
  const [dataCards, setDataCards] = useState<TransactionsData>(
    {} as TransactionsData
  );

  function getLastTransactionsDate(collection: DataListProps[], type: any) {
    const lastIncomeTransaction = Math.max.apply(
      Math,
      collection
        .filter((transaction) => transaction.type === type)
        .map((transaction) => new Date(transaction.date).getTime())
    );

    const date = new Date(lastIncomeTransaction);

    return `${date.getDate()} de ${date.toLocaleString("PT-BR", {
      month: "long",
    })}`;
  }

  async function loadTransactionsFormatted() {
    const DATA_KEY = "@controlFinance:transactions_collection";
    const resposnse = await AsyncStorage.getItem(DATA_KEY);
    const transactions = resposnse ? JSON.parse(resposnse) : [];
    let incomesSum = 0;
    let outcomesSum = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "income") {
          incomesSum += Number(item.amount);
        } else {
          outcomesSum += Number(item.amount);
        }

        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    setDataTransactions(transactionsFormatted);
    const lastIncomeTransaction = getLastTransactionsDate(
      transactions,
      "income"
    );
    const lastOutcomeTransaction = getLastTransactionsDate(
      transactions,
      "outcome"
    );
    const intervalTransactions = `01 à ${lastOutcomeTransaction}`;

    const totalExpenses = incomesSum - outcomesSum;
    setDataCards({
      income: {
        amount: incomesSum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: `Última entrada em ${lastIncomeTransaction}`,
      },
      outcome: {
        amount: outcomesSum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: `Última saída em ${lastOutcomeTransaction}`,
      },
      total: {
        amount: totalExpenses.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: intervalTransactions,
      },
    });
  }

  useEffect(() => {
    loadTransactionsFormatted();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactionsFormatted();
    }, [])
  );

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
          amount={dataCards?.income?.amount}
          infoTransaction={dataCards?.income?.lastTransaction}
        />
        <Cards
          type="outcome"
          title="Saída"
          amount={dataCards?.outcome?.amount}
          infoTransaction={dataCards?.outcome?.lastTransaction}
        />
        <Cards
          type="total"
          title="Total"
          amount={dataCards?.total?.amount}
          infoTransaction={dataCards?.total?.lastTransaction}
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
