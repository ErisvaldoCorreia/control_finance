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
  totalPercent: string;
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

    const totalOutcomes = outcomes.reduce(
      (accumulator: number, transaction: DataProps) => {
        return accumulator + Number(transaction.amount);
      },
      0
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

        const percent = `${((outcomeSum / totalOutcomes) * 100).toFixed(0)}%`;

        totalOutcomesCategory.push({
          name: category.name,
          color: category.color,
          key: category.key,
          total: outcomeSum,
          totalPercent: percent,
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
          <VictoryPie
            colorScale={totalByCategories.map((category) => category.color)}
            data={totalByCategories}
            height={340}
            style={{
              labels: {
                fontSize: 16,
                fontWeight: "bold",
              },
            }}
            labelRadius={130}
            x="totalPercent"
            y="total"
          />
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
