import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Keyboard } from "react-native";
import {
  Header,
  FormContent,
  Label,
  ButtonsContent,
  TextHeader,
  MySvg,
  Container,
} from "./styles";
import EyeSlash from "../../assets/Svgs/EyeSlash.svg";
import { PrimaryInput } from "../../elements/Input";
import {
  ButtonPrimary,
  ButtonOutline,
  ButtonArrowBack,
} from "../../elements/Buttons";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
export default function Sigin() {
  const navigation = useNavigation();
  const [auxKeyboard, setAuxKeyboard] = useState(false);
  const [auxPassword, setAuxPassword] = useState(true);
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

  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={!auxKeyboard ? { flex: 1 } : {}}
      >
        <Container>
          <Header>
            <TouchableOpacity onPress={() => navigation.goBack("OnGoing")}>
              <ButtonArrowBack />
            </TouchableOpacity>
            <TextHeader style={{ marginTop: "10%" }}>
              Bom te ter de volta por
            </TextHeader>
            <TextHeader>aqui, vamos entrando?</TextHeader>
          </Header>
          <FormContent>
            <View style={{ marginBottom: "10%" }}>
              <Label>Email:</Label>
              <PrimaryInput autoCorrect={false} autoCapitalize="none" />
            </View>
            <View style={{ position: "relative", width: "100%" }}>
              <Label>Senha:</Label>
              <MySvg onPress={() => setAuxPassword(!auxPassword)}>
                <EyeSlash />
              </MySvg>
              <PrimaryInput
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={auxPassword}
              />
            </View>
          </FormContent>

          <ButtonsContent>
            <TouchableOpacity
              style={{ marginBottom: "4%" }}
              onPress={() => navigation.navigate("HomeFeed")}
            >
              <ButtonPrimary text={"Entrar"} />
            </TouchableOpacity>
            <TouchableOpacity>
              <ButtonOutline text={"Entrar com Linkedin"} icon />
            </TouchableOpacity>
          </ButtonsContent>
        </Container>
      </KeyboardAwareScrollView>
    </>
  );
}
