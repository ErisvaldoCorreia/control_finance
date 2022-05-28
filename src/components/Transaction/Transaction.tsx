import React from "react";

import {
  Container,
  Title,
  Amount,
  InfoFooter,
  Category,
  Icon,
  CategoryName,
  DateTransaction,
} from "./styles";

interface Category {
  name: string;
  icon: string;
}

export type EntryType = "income" | "outcome";

export interface DataProps {
  type: EntryType;
  name: string;
  amount: string;
  date: string;
  category: Category;
}

interface TransactionProps {
  data: DataProps;
}

export function Transaction({ data }: TransactionProps) {
  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === "outcome" && "- "}
        {data.amount}
      </Amount>

      <InfoFooter>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <DateTransaction>{data.date}</DateTransaction>
      </InfoFooter>
    </Container>
  );
}
