import styled, { css } from "styled-components/native";
import { Pressable } from "react-native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
  type: 'income' | 'outcome'
}

interface ContainerProps extends IconProps {
  isActive: boolean;
}

export const Container = styled(Pressable)<ContainerProps>`
  width: 49%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  
  border-radius: 5px;
  border-style: solid;
  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px; 
  border-color: ${({ theme }) =>  theme.colors.text};
  
  ${({ isActive, type}) => isActive && type === 'income' && css`
    background-color: ${({ theme }) =>  theme.colors.success_light};
  `};

  ${({ isActive, type}) => isActive && type === 'outcome' && css`
    background-color: ${({ theme }) =>  theme.colors.attention_light};
  `};
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) => type === 'income' 
        ? theme.colors.success
        : theme.colors.attention
      };
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) =>  theme.fonts.regular};
`;
