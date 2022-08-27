import React from "react";
import { PressableProps } from "react-native";

import { Container, Title } from "./styles";

interface ButtonProps extends PressableProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
