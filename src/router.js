import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnGoing from "./pages/onGoing/index.js";
import Sigin from "./pages/Sigin/index.js";
import Signup from "./pages/Signup/index.js";
import SelectOptions from "./pages/SelectOptions/index.js";
import SelectCommunities from "./pages/SelectCommunities/index.js";
import CommunitiesProfile from "./pages/CommunitiesProfile/index.js";
import MainTabScreen from "./elements/MainTabScreen.js";
import CommuniteQR from "./pages/CommuniteQR/index.js";
import Search from "./pages/Search/index.js";
import Notifications from "./pages/Notifications/index.js";

import BottomMenuProvider from "./context/BottomMenu.js";

const Stack = createStackNavigator();

function Routes() {
  return (
    <BottomMenuProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="OnGoing" component={OnGoing} />
          <Stack.Screen name="Sigin" component={Sigin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SelectOptions" component={SelectOptions} />
          <Stack.Screen
            name="SelectCommunities"
            component={SelectCommunities}
          />
          <Stack.Screen
            name="CommunitiesProfile"
            component={CommunitiesProfile}
          />
          <Stack.Screen name="CommuniteQR" component={CommuniteQR} />
          <Stack.Screen name="MainTabScreen" component={MainTabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BottomMenuProvider>
  );
}

export default Routes;
