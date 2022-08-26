import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useFocusEffect } from "@react-navigation/native";
import { addMonths, format, subMonths } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { VictoryPie } from "victory-native";

import { DataProps, HistoryItem } from "../../components";
import { categories } from "../../utils/categories";

import {
  Container,
  Content,
  Header,
  Title,
  ChartContainer,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  MonthCurrently,
} from "./styles";

interface CategoryTotalProps {
  name: string;
  amount: string;
  total: number;
  totalPercent: string;
  color: string;
  key: string;
}

export function Resume() {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [totalByCategories, setTotalByCategories] = useState(
    [] as CategoryTotalProps[]
  );

  function getSelectedMonth(action: "next" | "prev") {
    if (action === "next") {
      setSelectedMonth(addMonths(selectedMonth, 1));
      return;
    }

    setSelectedMonth(subMonths(selectedMonth, 1));
  }

  async function loadData() {
    const DATA_KEY = "@controlFinance:transactions_collection";
    const resposnse = await AsyncStorage.getItem(DATA_KEY);
    const transactions = resposnse ? JSON.parse(resposnse) : [];

    const outcomes = transactions.filter(
      (transaction: DataProps) =>
        transaction.type === "outcome" &&
        new Date(transaction.date).getMonth() === selectedMonth.getMonth() &&
        new Date(transaction.date).getFullYear() === selectedMonth.getFullYear()
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
  }, [selectedMonth]);

  useFocusEffect(
    useCallback(() => {
      setSelectedMonth(new Date());
      loadData();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Title>Resumo de Gastos</Title>
      </Header>

      <Content
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: 24,
          paddingBottom: useBottomTabBarHeight(),
        }}
      >
        <MonthSelect>
          <MonthSelectButton onPress={() => getSelectedMonth("prev")}>
            <MonthSelectIcon name="chevron-left" />
          </MonthSelectButton>

          <MonthCurrently>
            {format(selectedMonth, "MMMM, yyyy", {
              locale: ptBR,
            }).toUpperCase()}
          </MonthCurrently>

          <MonthSelectButton onPress={() => getSelectedMonth("next")}>
            <MonthSelectIcon name="chevron-right" />
          </MonthSelectButton>
        </MonthSelect>

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
