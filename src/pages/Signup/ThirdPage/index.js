import React, { useContext } from "react";
import menino from "../../../assets/Menino.png";
import { TouchableOpacity, Image } from "react-native";
import { SignupContext } from "../../../context/Signup.js";
import {
  Container,
  Header,
  TextHeader,
  ImageContent,
  ButtonsContent,
  ButtonPhoto,
  TextButton,
} from "./styles";

import { ButtonPrimary, ButtonArrowBack } from "../../../elements/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function ThirdPage() {
  const { setPage } = useContext(SignupContext);
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => setPage("SecondPage")}>
            <ButtonArrowBack />
          </TouchableOpacity>
          <TextHeader style={{ marginTop: "10%" }}>
            Manda uma foto bem dahora
          </TextHeader>
          <TextHeader>pra gente por de perfil.</TextHeader>
        </Header>
        <ImageContent>
          <Image
            source={menino}
            style={{ width: "100%", height: "79%", borderRadius: 8 }}
          />
          <ButtonPhoto>
            <TextButton>Escolher outra foto</TextButton>
          </ButtonPhoto>
        </ImageContent>
        <ButtonsContent>
          <TouchableOpacity
            onPress={() => navigation.navigate("SelectOptions")}
          >
            <ButtonPrimary text={"Concluir"} />
          </TouchableOpacity>
        </ButtonsContent>
      </Container>
    </>
  );
}
