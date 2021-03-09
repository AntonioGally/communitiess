import React, { useContext, useState, useEffect } from "react";
import { SignupContext } from "../../../context/Signup.js";
import { TouchableOpacity, View, Keyboard } from "react-native";
import { ButtonArrowBack } from "../../../elements/Buttons";
import { PrimaryInput } from "../../../elements/Input";
import { ButtonPrimary } from "../../../elements/Buttons";
import EyeSlash from "../../../assets/Svgs/EyeSlash.svg";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Container,
  Header,
  TextHeader,
  FormContent,
  Label,
  ButtonsContent,
  MySvg,
} from "./styles";

export default function SecondPage() {
  const { setPage } = useContext(SignupContext);
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
          <Header style={auxKeyboard ? { marginBottom: "10%" } : {}}>
            <TouchableOpacity onPress={() => setPage("FirstPage")}>
              <ButtonArrowBack />
            </TouchableOpacity>
            <TextHeader style={{ marginTop: "10%" }}>
              Agora, nos ajude a
            </TextHeader>
            <TextHeader>proteger sua conta.</TextHeader>
          </Header>
          <FormContent style={auxKeyboard ? { height: "40%" } : {}}>
            <View style={{ position: "relative", width: "100%" }}>
              <Label>Crie uma senha:</Label>
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
            <TouchableOpacity onPress={() => setPage("ThirdPage")}>
              <ButtonPrimary text={"Prosseguir"} />
            </TouchableOpacity>
          </ButtonsContent>
        </Container>
      </KeyboardAwareScrollView>
    </>
  );
}
