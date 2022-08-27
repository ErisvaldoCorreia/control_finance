import styled from 'styled-components/native';
import { Pressable } from "react-native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(Pressable)`
  background-color: ${({ theme }) => theme.colors.shape };
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 18px 16px;
  margin-top: 16px;
`;

export const CategoryTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text };
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text };
  font-size: ${RFValue(20)}px;
`;
