import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Header, TitleWrapper, Title, SigninTitle } from "./style";

import LogoSvg from "../../assets/logo.svg";

export function Signin() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(200)} height={RFValue(200)} />

          <Title>
            Organize suas {"\n"}finanças de forma {"\n"}descomplicada!
          </Title>
          <SigninTitle>
            Faça seu login usando{"\n"} sua conta social.
          </SigninTitle>
        </TitleWrapper>
      </Header>
    </Container>
  );
}
