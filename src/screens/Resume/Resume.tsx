import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { VictoryPie } from "victory-native";
import { DataProps, HistoryItem } from "../../components";
import { categories } from "../../utils/categories";

import { Container, Content, Header, Title, ChartContainer } from "./styles";

interface CategoryTotalProps {
  name: string;
  amount: string;
  total: number;
  color: string;
  key: string;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState(
    [] as CategoryTotalProps[]
  );

  async function loadData() {
    const DATA_KEY = "@controlFinance:transactions_collection";
    const resposnse = await AsyncStorage.getItem(DATA_KEY);
    const transactions = resposnse ? JSON.parse(resposnse) : [];

    const outcomes = transactions.filter(
      (transaction: DataProps) => transaction.type === "outcome"
    );

    const totalOutcomesCategory: CategoryTotalProps[] = [];

    categories.forEach((category) => {
      let outcomeSum = 0;

      outcomes.forEach((outcome: DataProps) => {
        if (outcome.category === category.key) {
          outcomeSum += Number(outcome.amount);
        }
      });

      if (outcomeSum > 0) {
        const amount = outcomeSum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        totalOutcomesCategory.push({
          name: category.name,
          color: category.color,
          key: category.key,
          total: outcomeSum,
          amount,
        });
      }
    });

    setTotalByCategories(totalOutcomesCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo de gastos</Title>
      </Header>

      <Content>
        <ChartContainer>
          <VictoryPie data={totalByCategories} x="name" y="total" />
        </ChartContainer>

        {totalByCategories.map((item) => (
          <HistoryItem
            key={item.key}
            title={item.name}
            amount={item.amount}
            color={item.color}
          />
        ))}
      </Content>
    </Container>
  );
}
