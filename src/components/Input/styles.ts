import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  padding: ${RFValue(16)}px ${RFValue(18)}px;
  border-radius: ${RFValue(10)}px;
  margin-bottom: ${RFValue(8)}px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  background-color: ${({ theme }) => theme.colors.shape};
`;
