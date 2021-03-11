import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Header,
  TextHeader,
  Container,
  CardsContent,
  ButtonsContent,
  TextJumpContent,
  TextJump,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Cards from "./Cards";
import { ButtonArrowBack } from "../../elements/Buttons.js";

export default function SelectCommunities() {
  const navigation = useNavigation();
  const list = [
    {
      image: require("../../assets/SelectCommunities/Image1.png"),
      title: "Papo de UX",
      subtitle: "Design, produto",
    },
    {
      image: require("../../assets/SelectCommunities/Image2.png"),
      title: "Papo Produto",
      subtitle: "Produto",
    },
    {
      image: require("../../assets/SelectCommunities/Image3.png"),
      title: "Mergo",
      subtitle: "Design, produto",
    },
    {
      image: require("../../assets/SelectCommunities/Image4.png"),
      title: "How Bootcamps",
      subtitle: "Design, Produto, Dados",
    },
  ];
  return (
    <>
      <Container>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack("SelectOptions")}>
            <ButtonArrowBack />
          </TouchableOpacity>
          <TextHeader style={{ marginTop: "10%" }}>
            Conheça comunidades de
          </TextHeader>
          <TextHeader>seu interesse: </TextHeader>
        </Header>
        <CardsContent showsVerticalScrollIndicator={false}>
          {list.map((information, index) => (
            <Cards
              onPress={() =>
                navigation.navigate("CommunitiesProfile", { information })
              }
              key={index}
              image={information.image}
              title={information.title}
              subtitle={information.subtitle}
            />
          ))}
        </CardsContent>
        <ButtonsContent>
          <TextJumpContent onPress={() => navigation.navigate("HomeFeed")}>
            <TextJump>Quero pular essa parte</TextJump>
          </TextJumpContent>
        </ButtonsContent>
      </Container>
    </>
  );
}
