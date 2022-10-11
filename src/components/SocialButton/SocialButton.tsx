import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";

import { Container, ImageIcon, Title } from "./styles";

interface SocialButtonProps extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SocialButton({ title, svg: Svg, ...rest }: SocialButtonProps) {
  return (
    <Container {...rest}>
      <ImageIcon>
        <Svg />
      </ImageIcon>
      <Title>{title}</Title>
    </Container>
  );
}
