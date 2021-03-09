import React, { useContext } from "react";
import { SignupContext } from "../../../context/Signup.js";
import { TouchableOpacity, View } from "react-native";
import { ButtonArrowBack } from "../../../elements/Buttons";
import { PrimaryInput } from "../../../elements/Input";
import { ButtonPrimary } from "../../../elements/Buttons";
import {
  Container,
  Header,
  TextHeader,
  FormContent,
  Label,
  ButtonsContent,
} from "./styles";

export default function SecondPage() {
  const { setPage } = useContext(SignupContext);
  return (
    <>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => setPage("FirstPage")}>
            <ButtonArrowBack />
          </TouchableOpacity>
          <TextHeader style={{ marginTop: "10%" }}>
            Agora, nos ajude a
          </TextHeader>
          <TextHeader>proteger sua conta.</TextHeader>
        </Header>
        <FormContent>
          <View>
            <Label>Crie uma senha:</Label>
            <PrimaryInput autoCorrect={false} autoCapitalize="none" />
          </View>
        </FormContent>
        <ButtonsContent>
          <TouchableOpacity onPress={() => setPage("ThirdPage")}>
            <ButtonPrimary text={"Prosseguir"} />
          </TouchableOpacity>
        </ButtonsContent>
      </Container>
    </>
  );
}
