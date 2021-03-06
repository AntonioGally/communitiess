import React from "react";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";
import Routes from "./src/router";
import { View } from "react-native";

import {
  useFonts,
  WorkSans_100Thin,
  WorkSans_200ExtraLight,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
  WorkSans_900Black,
} from "@expo-google-fonts/work-sans";

export default function App() {
  let [fontLoaded] = useFonts({
    WorkSans_100Thin,
    WorkSans_200ExtraLight,
    WorkSans_300Light,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
    WorkSans_700Bold,
    WorkSans_800ExtraBold,
    WorkSans_900Black,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <Routes />
    </>
  );
}
