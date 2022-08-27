import styled from "styled-components/native";
import { Pressable } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(Pressable)`
  width: 100%;
  align-items: center;
  border-radius: ${RFValue(10)}px;
  background-color: ${({ theme }) =>  theme.colors.secondary};
  padding: ${RFValue(18)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) =>  theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) =>  theme.colors.shape};
`;
