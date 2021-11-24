import React from "react";
import { PressableProps } from "react-native";

import { Container, Icon, Title } from "./styles";

type IconType = "income" | "outcome";

interface IconButtonProps extends PressableProps {
  title: string;
  type: IconType;
  isActive: boolean;
}

const icons = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
};

export function IconButton({
  title,
  type,
  isActive,
  ...rest
}: IconButtonProps) {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon type={type} name={icons[type]} />
      <Title>{title}</Title>
    </Container>
  );
}
