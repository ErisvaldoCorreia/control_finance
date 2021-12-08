import React from "react";

import { Container, CategoryTitle, Icon } from "./styles";

interface CategoryProps {
  title: string;
  onPress: () => void;
}

export function Category({ title, onPress }: CategoryProps) {
  return (
    <Container onPress={onPress}>
      <CategoryTitle>{title}</CategoryTitle>
      <Icon name="chevron-down" />
    </Container>
  );
}
