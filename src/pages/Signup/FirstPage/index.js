import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  TextHeader,
  FormContent,
  Label,
  ButtonsContent,
} from "./styles";
import { ButtonArrowBack } from "../../../elements/Buttons";
import { PrimaryInput } from "../../../elements/Input";
import { ButtonPrimary, ButtonOutline } from "../../../elements/Buttons";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Signup() {
  const navigation = useNavigation();
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
          <TouchableOpacity>
            <ButtonPrimary text={"Prosseguir"} />
          </TouchableOpacity>
        </ButtonsContent>
      </Container>
    </>
  );
}
