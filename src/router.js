import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnGoing from "./pages/onGoing/index.js";
import Sigin from "./pages/Sigin/index.js";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="OnGoing" component={OnGoing} />
        <Stack.Screen name="Sigin" component={Sigin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
