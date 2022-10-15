import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";

import theme from "./src/theme/theme";
import { AppRoute } from "./src/routes/app.routes";

import { Signin } from "./src/screens/Signin/Signin";
import { AuthProvider } from "./src/hooks";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor="#5636d3" barStyle="light-content" />

        <AuthProvider>
          <Signin />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
