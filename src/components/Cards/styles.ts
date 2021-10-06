import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { TypeCard } from './Cards';

interface TypeProps {
    type: TypeCard;
}

export const Container = styled.View<TypeProps>`
    background-color: ${({ theme, type }) => type === 'total' 
        ? theme.colors.secondary 
        : theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: ${RFValue(10)}px;
    margin-right: 15px;
    padding: 20px 24px 42px 24px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    color: ${({ theme, type }) => type === 'total' 
        ? theme.colors.shape 
        : theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<TypeProps>`
    ${({ type }) => type === 'income' && css`
        color: ${({ theme }) => theme.colors.success};
    `};

    ${({ type }) => type === 'outcome' && css`
        color: ${({ theme }) => theme.colors.attention};
    `};

    ${({ type }) => type === 'total' && css`
        color: ${({ theme }) => theme.colors.shape};
    `};

    font-size: ${RFValue(30)}px;
`;

export const Content = styled.View``;

export const Amount = styled.Text<TypeProps>`
    color: ${({ theme, type }) => type === 'total' 
        ? theme.colors.shape 
        : theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(30)}px;
    margin-top: ${RFValue(38)}px;
`;

export const InfoTransactions = styled.Text<TypeProps>`
    color: ${({ theme, type }) => type === 'total' 
        ? theme.colors.shape 
        : theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
`;
