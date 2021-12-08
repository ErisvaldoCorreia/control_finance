import React from "react";

import { Container, CategoryTitle, Icon } from "./styles";

interface CategoryProps {
  title: string;
}

export function Category({ title }: CategoryProps) {
  return (
    <Container>
      <CategoryTitle>{title}</CategoryTitle>
      <Icon name="chevron-down" />
    </Container>
  );
}
