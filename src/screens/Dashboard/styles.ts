import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: 42%;
    background-color: ${({theme}) => theme.colors.primary};
    justify-content: center;
    align-items: center;
`;

export const UserWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 24px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 10px;
`;

export const User = styled.View`
    margin-left: 17px;
`;

export const UserGreetings = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: 18px;
`;

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: 18px;
    font-weight: bold;
`;
