import React, { useState, useEffect } from "react";
import X_svg from "../../assets/Svgs/X.svg";
import Lupa from "../../assets/Svgs/Lupa.svg";
import Cards from "./Cards.js";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  InputContent,
  MySvg,
  AnimationContent,
  TextContent,
  Title,
  Subtitle,
  BottomMenu,
  CardsContent,
  MySvgQr,
} from "./styles";
import { Keyboard, View } from "react-native";
import { PrimaryInput } from "../../elements/Input.js";
import BottomMenuComponent from "../../elements/BottomMenu.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Svg_QrCode from "../../assets/Svgs/QrCode_expanded.svg";

const Search = () => {
  const navigation = useNavigation();
  const [auxKeyboard, setAuxKeyboard] = useState(false);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setAuxKeyboard(true);
  };

  const _keyboardDidHide = () => {
    setAuxKeyboard(false);
  };
  const list = [
    {
      image: require("../../assets/SelectCommunities/Image1.png"),
      title: "Papo de UX",
      subtitle: "Design, Produto",
    },
    {
      image: require("../../assets/SelectCommunities/Image2.png"),
      title: "Papo Produto",
      subtitle: "Produto",
    },
    {
      image: require("../../assets/SelectCommunities/Image3.png"),
      title: "Mergo",
      subtitle: "Design, Produto",
    },
    {
      image: require("../../assets/SelectCommunities/Image4.png"),
      title: "How Bootcamps",
      subtitle: "Design, Produto, Dados",
    },
    {
      image: require("../../assets/SelectCommunities/Image1.png"),
      title: "Papo de UX",
      subtitle: "Design, Produto",
    },
    {
      image: require("../../assets/SelectCommunities/Image2.png"),
      title: "Papo Produto",
      subtitle: "Produto",
    },
    {
      image: require("../../assets/SelectCommunities/Image3.png"),
      title: "Mergo",
      subtitle: "Design, Produto",
    },
    {
      image: require("../../assets/SelectCommunities/Image4.png"),
      title: "How Bootcamps",
      subtitle: "Design, Produto, Dados",
    },
  ];
  return (
    <>
      <KeyboardAwareScrollView
        style={{ backgroundColor: "#fff" }}
        contentContainerStyle={!auxKeyboard ? { flex: 1 } : {}}
      >
        <Container>
          <Header>
            <InputContent
              style={
                !auxKeyboard && {
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }
              }
            >
              <PrimaryInput
                placeholder="Pesquisar"
                autoCorrect={false}
                autoCapitalize="none"
                style={!auxKeyboard && { width: "80%" }}
              />
              {!auxKeyboard && (
                <MySvgQr>
                  <Svg_QrCode />
                </MySvgQr>
              )}
              {auxKeyboard && (
                <MySvg>
                  <X_svg />
                </MySvg>
              )}
            </InputContent>
          </Header>
          {auxKeyboard ? (
            <AnimationContent>
              <Lupa />
              <TextContent>
                <Title>Pesquise por comunidades</Title>
                <Subtitle>Você pode pesquisar por nome da</Subtitle>
                <Subtitle>comunidade ou usar o ssID da</Subtitle>
                <Subtitle>comunidade</Subtitle>
              </TextContent>
            </AnimationContent>
          ) : (
            <CardsContent showsVerticalScrollIndicator={false}>
              {list.map((information, index) => (
                <Cards
                  onPress={() =>
                    navigation.navigate("CommunitiesProfile", {
                      information,
                      fromWhre: "Search",
                    })
                  }
                  key={index}
                  image={information.image}
                  title={information.title}
                  subtitle={information.subtitle}
                />
              ))}
            </CardsContent>
          )}

          {/* <BottomMenu>
            <BottomMenuComponent />
          </BottomMenu> */}
        </Container>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Search;
