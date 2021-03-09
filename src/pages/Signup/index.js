import React, { useState, useRef } from "react";
import { View } from "react-native";
import FirstPage from "./FirstPage/index.js";
import SecondPage from "./SecondPage/index.js";
import ThirdPage from "./ThirdPage/index.js";
import AppIntroSlider from "react-native-app-intro-slider";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ButtonArrowBack } from "../../elements/Buttons";

export default function Signup() {
  const slider = useRef();
  const navigation = useNavigation();
  const [auxDone, setAuxDone] = useState(false);
  const data = [
    { name: "FirstPage", key: 1, component: FirstPage },
    { name: "SecondPage", key: 2, component: SecondPage },
    { name: "ThirdPage", key: 3, component: ThirdPage },
  ];
  function renderSlides({ item }) {
    return (
      <View key={item.key}>
        {item.name === "FirstPage" ? (
          <FirstPage />
        ) : item.name === "SecondPage" ? (
          <SecondPage />
        ) : (
          <ThirdPage />
        )}
      </View>
    );
  }
  return (
    <>
      {auxDone ? (
        navigation.navigate("SelectOptions")
      ) : (
        <AppIntroSlider
          renderItem={renderSlides}
          data={data}
          activeDotStyle={{ backgroundColor: "#EF2568", width: 16 }}
          dotStyle={{
            backgroundColor: "rgba(239, 37, 104, 0.6)",
            width: 8,
            height: 8,
          }}
          onDone={() => setAuxDone(true)}
          showNextButton={false}
          showDoneButton={false}
          style={{ flex: 1, backgroundColor: "#fff" }}
          dotClickEnabled={false}
        />
      )}
    </>
  );
}
