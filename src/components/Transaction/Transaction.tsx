import React from "react";
import { categories } from "../../utils/categories";

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

export type EntryType = "income" | "outcome";

export interface DataProps {
  type: EntryType;
  name: string;
  amount: string;
  date: string;
  category: string;
}

interface TransactionProps {
  data: DataProps;
}

export function Transaction({ data }: TransactionProps) {
  const [category] = categories.filter((item) => item.key === data.category);

  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount type={data.type}>
        {data.type === "outcome" && "- "}
        {data.amount}
      </Amount>

      <InfoFooter>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <DateTransaction>{data.date}</DateTransaction>
      </InfoFooter>
    </Container>
  );
}
