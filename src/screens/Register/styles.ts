import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({theme}) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(14)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  padding: ${RFValue(24)}px;
  justify-content: space-between;
`;

export const Fields = styled.View``;

export const TransactionsButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
