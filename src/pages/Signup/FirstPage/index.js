import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
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
import {
  ButtonPrimary,
  ButtonOutline,
  ButtonArrowBack,
} from "../../../elements/Buttons";
import { useNavigation } from "@react-navigation/native";
export default function Signup() {
  const navigation = useNavigation();
  const { setPage } = useContext(SignupContext);
  return (
    <>
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
    </>
  );
}
