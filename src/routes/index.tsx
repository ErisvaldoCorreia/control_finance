import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoute } from "./app.routes";
import { AuthRoute } from "./auth.routes";
import { useAuth } from "../hooks";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoute /> : <AuthRoute />}
    </NavigationContainer>
  );
}
