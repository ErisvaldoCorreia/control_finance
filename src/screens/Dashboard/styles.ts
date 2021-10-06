import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Platform, FlatList } from 'react-native';
import { DataListProps } from './Dashboard';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(40)}px;
    background-color: ${({theme}) => theme.colors.primary};
    justify-content: flex-start;
    align-items: center;
`;

export const UserWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${Platform.OS === 'ios' ? RFValue(48) : RFValue(28)}px;
    padding: 0 24px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: ${RFValue(10)}px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreetings = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-weight: bold;
`;

export const IconPower = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(28)}px;
`;

export const CardContainer = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`;

export const ListTransactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(10)}px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    margin-bottom: ${RFValue(16)}px;
`;

export const TransactionsListCards = styled(
        FlatList as new () => FlatList<DataListProps>
    ).attrs({
        showsVerticalScrollIndicator: false,
        contentContainerStyle: {
        paddingBottom: Platform.OS === "ios" ? 30 : 0,
    },
})``;
