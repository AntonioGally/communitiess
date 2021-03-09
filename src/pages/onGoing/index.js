import React from "react";
import {
  Container,
  ImageContent,
  Text,
  Comunidade,
  ButtonsContent,
} from "./styles";
import { Image, View, TouchableOpacity } from "react-native";
import menina from "../../assets/menina.png";
import { useNavigation } from "@react-navigation/native";
import { ButtonPrimary, ButtonSecondary } from "../../elements/Buttons";

export default function onGoing() {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <ImageContent>
          <Image source={menina} style={{ width: "100%", height: "100%" }} />
        </ImageContent>

        <View
          style={{
            paddingHorizontal: 20,
            height: "20%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Text>Encontre a</Text>
          <Text>
            <Comunidade>comunidade</Comunidade> que
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 5 }}>combina com você! </Text>
            <Image
              source={require("./imgChat.png")}
              style={{ width: 30, height: 30 }}
            />
          </View>
        </View>
        <ButtonsContent>
          <TouchableOpacity onPress={() => navigation.navigate("Sigin")}>
            <ButtonPrimary text={"Entrar"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <ButtonSecondary text={"Ainda não tenho conta"} />
          </TouchableOpacity>
        </ButtonsContent>
      </Container>
    </>
  );
}
