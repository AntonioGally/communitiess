import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import House from "../assets/Svgs/BottomMenu/House.svg";
import MagnifyingGlass from "../assets/Svgs/BottomMenu/MagnifyingGlass.svg";
import Bell from "../assets/Svgs/BottomMenu/Bell.svg";
import UserCircle from "../assets/Svgs/BottomMenu/UserCircle.svg";

import House_Active from "../assets/Svgs/BottomMenu/House_Active.svg";
import MagnifyingGlass_Active from "../assets/Svgs/BottomMenu/MagnifyingGlass_Active.svg";
import Bell_Active from "../assets/Svgs/BottomMenu/Bell_Active.svg";
import UserCircle_Active from "../assets/Svgs/BottomMenu/UserCircle_Active.svg";

import HomeFeed from "../pages/HomeFeed/index.js";
import Search from "../pages/Search/index.js";
import Notifications from "../pages/Notifications/index.js";
import UserProfile from "../pages/UserProfile/index.js";

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#707070"
    inactiveColor="#707070"
    barStyle={{
      backgroundColor: "#fff",
      paddingHorizontal: 16,
      paddingVertical: 16,
    }}
  >
    <Tab.Screen
      name="HomeFeed"
      component={HomeFeed}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#fff",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <House_Active width={30} height={30} />
          ) : (
            <House width={30} height={30} />
          ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: "Pesquisar",
        tabBarColor: "#fff",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <MagnifyingGlass_Active width={30} height={30} />
          ) : (
            <MagnifyingGlass width={30} height={30} />
          ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Notifications}
      options={{
        tabBarLabel: "Notificações",
        tabBarColor: "#fff",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Bell_Active width={30} height={30} />
          ) : (
            <Bell width={30} height={30} />
          ),
      }}
    />
    <Tab.Screen
      name="UserProfile"
      component={UserProfile}
      options={{
        tabBarLabel: "Pefil",
        tabBarColor: "#fff",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <UserCircle_Active width={30} height={30} />
          ) : (
            <UserCircle width={30} height={30} />
          ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreen;
