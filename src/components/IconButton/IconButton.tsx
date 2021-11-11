import React from "react";
import { PressableProps } from "react-native";

import { Container, Icon, Title } from "./styles";

type IconType = "income" | "outcome";

interface IconButtonProps extends PressableProps {
  title: string;
  type: IconType;
}

const icons = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
};

export function IconButton({ title, type, ...rest }: IconButtonProps) {
  return (
    <Container {...rest}>
      <Icon name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
}
