import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SigninTitle,
  Footer,
} from "./style";

import LogoSvg from "../../assets/logo.svg";

export function Signin() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Organize suas {"\n"}finanças de forma {"\n"}descomplicada!
          </Title>
          <SigninTitle>
            Faça seu login usando{"\n"} sua conta social.
          </SigninTitle>
        </TitleWrapper>
      </Header>
      <Footer></Footer>
    </Container>
  );
}
