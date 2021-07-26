import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    width: ${RFValue(300)}px;
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
    font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(30)}px;
`;

export const Content = styled.View``;

export const Amount = styled.Text`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(30)}px;
    margin-top: ${RFValue(38)}px;
`;

export const InfoTransactions = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
`;
