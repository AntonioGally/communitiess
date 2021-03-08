import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  FormContent,
  Label,
  ButtonsContent,
  TextHeader,
} from "./styles";
import { ButtonArrowBack } from "../../elements/Buttons";
import { PrimaryInput } from "../../elements/Input";
import { ButtonPrimary, ButtonOutline } from "../../elements/Buttons";
import { useNavigation } from "@react-navigation/native";
export default function Sigin() {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.navigate("OnGoing")}>
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
            <PrimaryInput />
          </View>
          <View>
            <Label>Senha:</Label>
            <PrimaryInput />
          </View>
        </FormContent>
        <ButtonsContent>
          <TouchableOpacity style={{ marginBottom: "4%" }}>
            <ButtonPrimary text={"Entrar"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ButtonOutline text={"Entrar com Linkedin"} icon />
          </TouchableOpacity>
        </ButtonsContent>
      </Container>
    </>
  );
}
