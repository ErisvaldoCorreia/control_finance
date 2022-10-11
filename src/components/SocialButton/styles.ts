import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  height: ${RFValue(56)}px;
  background-color: ${({theme}) => theme.colors.shape};
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(16)}px;
`;

export const ImageIcon = styled.View`
  border-color: ${({theme}) => theme.colors.background};
  border-right-width: ${RFValue(1)}px;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
