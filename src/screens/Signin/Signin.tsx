import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { SocialButton } from "../../components";
import LogoSvg from "../../assets/logo.svg";
import GoogleSvg from "../../assets/google.svg";
import AppleSvg from "../../assets/apple.svg";
import { useAuth } from "../../hooks";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SigninTitle,
  Footer,
  FooterWrapper,
} from "./style";

export function Signin() {
  const { signinWithGoogle } = useAuth();

  const handleSignInGoogle = async () => {
    try {
      await signinWithGoogle();
    } catch (e) {
      console.log(e);
    }
  };

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
      <Footer>
        <FooterWrapper>
          <SocialButton
            title="Login com Google"
            svg={GoogleSvg}
            onPress={handleSignInGoogle}
          />
          <SocialButton title="Login com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
