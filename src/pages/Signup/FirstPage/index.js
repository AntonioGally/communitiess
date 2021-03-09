import React, { useContext, useState, useEffect } from "react";
import { TouchableOpacity, View, Keyboard } from "react-native";
import { SignupContext } from "../../../context/Signup.js";
import {
  Container,
  Header,
  TextHeader,
  FormContent,
  Label,
  ButtonsContent,
} from "./styles";
import { PrimaryInput } from "../../../elements/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  ButtonPrimary,
  ButtonOutline,
  ButtonArrowBack,
} from "../../../elements/Buttons";
import { useNavigation } from "@react-navigation/native";
export default function Signup() {
  const navigation = useNavigation();
  const { setPage } = useContext(SignupContext);
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
  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={!auxKeyboard ? { flex: 1 } : {}}
      >
        <Container>
          <Header>
            <TouchableOpacity onPress={() => navigation.navigate("OnGoing")}>
              <ButtonArrowBack />
            </TouchableOpacity>
            <TextHeader style={{ marginTop: "10%" }}>
              Vamos criar uma conta
            </TextHeader>
            <TextHeader>pra você, fica de boa!</TextHeader>
          </Header>
          <FormContent>
            <View style={{ marginBottom: "10%" }}>
              <Label>Qual seu nome?</Label>
              <PrimaryInput autoCorrect={false} autoCapitalize="none" />
            </View>
            <View>
              <Label>Qual seu email?</Label>
              <PrimaryInput autoCorrect={false} autoCapitalize="none" />
            </View>
          </FormContent>
          <ButtonsContent>
            <TouchableOpacity style={{ marginBottom: "4%" }}>
              <ButtonOutline text={"Entrar com Linkedin"} icon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPage("SecondPage")}>
              <ButtonPrimary text={"Prosseguir"} />
            </TouchableOpacity>
          </ButtonsContent>
        </Container>
      </KeyboardAwareScrollView>
    </>
  );
}
