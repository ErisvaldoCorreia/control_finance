import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    width: 300px;
    border-radius: 5px;
    margin-right: 15px;

    padding: 20px 24px 42px 24px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 14px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.success};
    font-size: 30px;
`;

export const Content = styled.View``;

export const Amount = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: 32px;
    margin-top: 38px;
`;

export const InfoTransactions = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 12px;
`;
