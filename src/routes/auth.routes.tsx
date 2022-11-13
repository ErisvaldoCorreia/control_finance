import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Signin } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Signin" component={Signin} />
    </Navigator>
  );
}
