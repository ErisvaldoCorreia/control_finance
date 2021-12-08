import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
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

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Category = styled(Pressable)<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  background-color: ${({theme, isActive}) => 
    isActive ? theme.colors.secondary_light : theme.colors.shape
  };
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.text};
  height: 1px;
`;

export const Footer = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px;
`;